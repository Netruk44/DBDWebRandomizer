Array.prototype.randomElement = function () {
    if(this.length === 0) {
      return undefined;
    }
  
    return this[Math.floor(Math.random() * this.length)]
};

(function(angular) {
  "use strict";
  let app = angular.module("randomizerApp", []);

  app.controller("randomizer", [ '$http',  
    function($http) {
      let vm = this;

      // For internal use, contains objects
      vm.currentSelections = {
      };
      
      vm.allItems = [];
      vm.groups = {};
      vm.groupNames = [];
      vm.enabledGroups = {
        "Role": true,
        "Character": true,
        "Item": true,
        "AddOn": true,
        "Offering": true,
        "Perk": true
      }
      
      vm.Initialize = function() {
        $http.get('./allitems.json').then(function (data) {
          vm.allItems = data.data;
          
          // Add all groups
          for (let i = 0; i < vm.allItems.length; i++) {
            let type = vm.allItems[i].type;
            if(vm.groups[type] === undefined) {
              vm.groups[type] = [];
              vm.groupNames.push(type);
            }
            
            vm.groups[type].push(vm.allItems[i]);
          }
        });
      }

      vm.Clear = function() {
        vm.currentState = {
        };

        vm.currentSelections = {
        };
      };
      
      vm.GetAllItemsOfType = function(type){
        let items = [];
        
        for(let i = 0; i < vm.allItems.length; i++) {
          if(vm.allItems[i].type === type && vm.allItems[i].enabled === true) {
            items.push(vm.allItems[i]);
          }
        }
        
        return items;
      }
      
      vm.FilterItemsToRequirements = function(toFilter) {
        let filteredItems = [];
        
        for(let i = 0; i < toFilter.length; i++) {
          let currentItem = toFilter[i];
          // Assume there are no requirements
          let metRequirements = true;
          
          for(let j = 0; j < currentItem.requirements.length; j++) {
            let currentRequirement = currentItem.requirements[j];
            let valueToCheck = vm.currentSelections[currentRequirement.requiredName];
            
            // If value is undefined, we're checking in the wrong order
            if(valueToCheck === undefined) {
              console.error("Checking requirement for " + currentItem.name + ", encountered undefined value checking " + currentRequirement.requiredName);
              metRequirements = false;
              break;
            }
            
            for(let k = 0; k < currentRequirement.requiredValue.length; k++) {
              // There are known requirements, we currently haven't met any
              metRequirements = false;
              
              if(valueToCheck.name === currentRequirement["requiredValue"][k]) {
                metRequirements = true;
                break;
              }
            }
          }
          
          if(metRequirements === true) {
            filteredItems.push(currentItem);
          }
        }
        
        return filteredItems;
      }
      
      vm.RandomizeSingleItem = function(type) {
        let allAvailableOptions = vm.FilterItemsToRequirements(vm.GetAllItemsOfType(type));
        let selectedItem = allAvailableOptions.randomElement();
        
        // No items to choose from
        if(selectedItem === undefined) {
          // TODO: Undefined handling
          return;
        }
        
        vm.currentSelections[type] = selectedItem;
      }
      
      vm.RemoveAlreadySelectedItems = function(type, items) {
        let nonDuplicateOptions = []
        
        for(let i = 0; i < items.length; i++) {
          let isDuplicate = false;
          
          for(let j = 0; j < vm.currentSelections[type].length; j++) {
            // Use name to compare if the item is already selected
            if(items[i].name === vm.currentSelections[type][j].name) {
              isDuplicate = true;
              break;
            }
          }
          
          if(isDuplicate === false) {
            nonDuplicateOptions.push(items[i]);
          }
        }
        
        return nonDuplicateOptions;
      }
      
      vm.AddRandomSingleItem = function(type) {
        let allAvailableOptions = vm.FilterItemsToRequirements(vm.GetAllItemsOfType(type));
        
        if(vm.currentSelections[type] !== undefined) {
          allAvailableOptions = vm.RemoveAlreadySelectedItems(type, allAvailableOptions);
        } else {
          vm.currentSelections[type] = [];
        }
        
        let selectedItem = allAvailableOptions.randomElement();
        
        // No items to choose from
        if(selectedItem === undefined) {
          // TODO: Undefined handling
          return;
        }
        
        vm.currentSelections[type].push(selectedItem);
      }

      vm.Randomize = function() {
        let allItems = vm.allItems;

        vm.Clear();
        // Order matters for randomization, there's dependencies.
        vm.RandomizeSingleItem("Role");
        vm.RandomizeSingleItem("Character");
        vm.RandomizeSingleItem("Item");
        
        vm.AddRandomSingleItem("AddOn");
        vm.AddRandomSingleItem("AddOn");
        
        vm.RandomizeSingleItem("Offering");
        
        vm.AddRandomSingleItem("Perk");
        vm.AddRandomSingleItem("Perk");
        vm.AddRandomSingleItem("Perk");
        vm.AddRandomSingleItem("Perk");
      };
      
      vm.ItemToggled = function(item) {
        if(item.enabled) {
          vm.enabledGroups[item.type] = true;
        }
      }
      
      vm.TurnOffAll = function(type) {
        for(let i = 0; i < vm.groups[type].length; i++) {
          vm.enabledGroups[type] = false;
          if(vm.groups[type][i].canDisable) {
            vm.groups[type][i].enabled = false
          }
        }
      }
      
      vm.TurnOnAll = function(type) {
        vm.enabledGroups[type] = true;
        for(let i = 0; i < vm.groups[type].length; i++) {
          vm.groups[type][i].enabled = true
        }
      }
      
      vm.TurnOffAllInSubgroup = function(type, subgroup) {
        for(let i = 0; i < vm.groups[type].length; i++) {
          if(vm.groups[type][i].canDisable && vm.groups[type][i].subGrouping == subgroup) {
            vm.groups[type][i].enabled = false
          }
        }
      }
      
      vm.TurnOnAllInSubgroup = function(type, subgroup) {
        vm.enabledGroups[type] = true;
        for(let i = 0; i < vm.groups[type].length; i++) {
          if(vm.groups[type][i].subGrouping == subgroup) {
            vm.groups[type][i].enabled = true
          }
        }
      }
      
      vm.GetSubGroupsForType = function(type) {
        let subgroups = [];
        for(let i = 0; i < vm.groups[type].length; i++) {
          if(vm.groups[type][i].subGrouping === "") {
            continue;
          }
          
          let needToAdd = true;
          
          for(let j = 0; j < subgroups.length; j++) {
            if(subgroups[j] == vm.groups[type][i].subGrouping) {
              needToAdd = false;
              break;
            }
          }
          
          if(needToAdd) {
            subgroups.push(vm.groups[type][i].subGrouping);
          }
        }
        
        return subgroups;
      }
      
      vm.GetItemsInSubGroupForType = function(type, subgroup) {
        let items = [];
        
        for(let i = 0; i < vm.groups[type].length; i++) {
          if(vm.groups[type][i].subGrouping === subgroup) {
            items.push(vm.groups[type][i]);
          }
        }
        
        return items;
      }
      
      vm.Initialize();
    }
  ]);
})(window.angular);
