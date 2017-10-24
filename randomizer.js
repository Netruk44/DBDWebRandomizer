Array.prototype.randomElement = function () {
    if(this.length === 0) {
      return undefined;
    }
  
    return this[Math.floor(Math.random() * this.length)]
};

(function(angular) {
  "use strict";
  let app = angular.module("randomizerApp", []);

  app.controller("randomizer", [
    function() {
      let vm = this;

      // What we show the user, contains strings
      // Probably just for debugging
      vm.showState = {
      };

      // For internal use, contains objects
      vm.currentSelections = {
      };
      
      vm.allItems = [];
      
      vm.Initialize = function() {
        function CreateItem(name, image, type, requirements) {
          vm.allItems.push({
            name: name,
            image: image,
            type: type,
            requirements: requirements
          });
        };

        // Type: The required type (Character, Item, Addon)
        // Options: Array of acceptable values
        function CreateRequirement(type, options) {
          return {
            requiredName: type,
            requiredValue: options
          };
        };
        
        // Roles
        CreateItem("Survivor", "Assets/Survivors.png", "Role", []);
        CreateItem("Killer", "Assets/Killers.png", "Role", []);
        
        // Characters
        CreateItem("Dwight", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Meg", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Claudette", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Jake", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Nea", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Laurie", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Ace", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Bill", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Feng", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("David", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        /*CreateItem("Kate", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);*/
        
        CreateItem("Trapper", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Wraith", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hillbilly", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Nurse", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Shape", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hag", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Doctor", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Huntress", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Cannibal", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        /*CreateItem("Sandman", "Assets/Unknown_Person.png", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);*/
        
        // Killer items (weapons)
        CreateItem("Cleaver", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Trapper"])
        ]);
        CreateItem("Azarov's Skull", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Wraith"])
        ]);
        CreateItem("Hammer", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Hillbilly"])
        ]);
        CreateItem("Bonesaw", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Nurse"])
        ]);
        CreateItem("Kitchen Knife", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Shape"])
        ]);
        CreateItem("Claws", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Hag"])
        ]);
        CreateItem("Stick", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Doctor"])
        ]);
        CreateItem("Broad Axe", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Huntress"])
        ]);
        CreateItem("Sledge", "Assets/Unknown_Weapon.png", "Item", [
          CreateRequirement("Character", ["Cannibal"])
        ]);
        
        // Survivor Items
        CreateItem("Chinese Firecracker", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Flashlight", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Will O' Wisp", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Sport Flashlight", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Utility Flashlight", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Broken Key", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Dull Key", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Skeleton Key", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Map", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Rainbow Map", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Camping Aid Kit", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("All Hallows' Eve Lunchbox", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("First Aid Kit", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Emergency Med-Kit", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Ranger Med-Kit", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Worn Out Tools", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Toolbox", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Mechanic's Toolbox", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Commodious Toolbox", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Engineer's Toolbox", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Alex's Toolbox", "Assets/Unknown_Item.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        // Add-Ons (hoo boy, hope you're ready for this)
        // Trapper addons
        CreateItem("Trapper Gloves", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Strong Coil Spring", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Serrated Jaws", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Wax Brick", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Trapper Bag", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Trap Setters", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Secondary Coil", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Logwood Dye", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("4-Coil Spring Kit", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Tar Bottle", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Setting tools", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Rusted Jaws", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Oily Coil", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Fastening Tools", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Stitched Bag", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Honing Stone", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Bloody Coil", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        CreateItem("Diamond Stone", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Cleaver"])
        ]);
        
        // Wraith addons
        CreateItem("Bone Clapper", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Swift Hunt - Soot", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Blink - Soot", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Blind warrior - Soot", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Coxcombed Clapper", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Windstorm - Soot", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Swift Hunt - Mud", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Blind Warrior - Mud", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("All Seeing - Mud", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Windstorm - Mud", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("The Ghost - Soot", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Swift Hunt - White", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Blind Warrior - White", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("All Seeing - White", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Windstorm - Blood", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Blind Warrior - Blood", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("All Seeing - Blood", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("Blind Warrior - Spirit", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        CreateItem("All Seeing - Spirit", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Azarov's Skull"])
        ]);
        
        // Hillbilly addons (and also some Cannibal)
        CreateItem("Vegetable Oil", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Spark Plug", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Chainsaw File", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Spiked Boots", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer"])
        ]);
        CreateItem("Speed Limiter", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Shop Lubricant", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Primer Bulb", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Long Guide Bar", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Homemade Muffler", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Grisly Chains", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Depth Gauge Rake", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Death Engravings", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer"])
        ]);
        CreateItem("The Thompson's Mix", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer"])
        ]);
        CreateItem("Rusted Chains", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Light Chassis", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Doom Engravings", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer"])
        ]);
        CreateItem("Carburetor Tuning Guide", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        CreateItem("Thompson's Moonshine", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer"])
        ]);
        CreateItem("Begrimed Chains", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Hammer", "Sledge"])
        ]);
        
        // Nurse addons
        CreateItem("Wooden Horse", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("White Nit Comb", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Torn Bookmark", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Metal Spoon", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Matchbox", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Bad Man Keepsake", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Pocket Watch", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Dull Bracelet", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Dark Cincture", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Catatonic Boy's Treasure", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Spasmodic Breath", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Heavy Panting", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Fragile Wheeze", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Ataxic Respiration", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Anxious Gasp", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Plaid Flannel", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Kavanagh's Last Breath", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Jenner's Last Breath", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Campbell's Last Breath", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        CreateItem("Bad Man's Last Breath", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Bonesaw"])
        ]);
        
        // Shape addons
        CreateItem("Tacky Earrings", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Boyfriend's Memo", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Blond Hair", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Reflective Fragment", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Memorial Flower", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Jewelry", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Hair Brush", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Glass Fragment", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Dead Rabbit", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Mirror Shard", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Judith's Journal", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Jewelry Box", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("J. Meyers Memorial", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Hair Bow", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Vanity Mirror", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Tombstone Piece", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Scratched Mirror", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Lock of Hair", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Judith's Tombstone", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        CreateItem("Fragrant Tuft of Hair", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Kitchen Knife"])
        ]);
        
        // Hag addons
        CreateItem("Rope Necklet", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Powdered Eggshell", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Dead Fly Mud", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Bog Water", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Pussy Willow Catkins", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Half Eggshell", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Dragonfly Wings", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Cypress Necklet", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Bloodied Water", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Willow Wreath", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Swamp Orchid Necklet", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Dried Cicada", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Cracked Turtle Egg", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Bloodied Mud", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Scarred Hand", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Rusty Shackles", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Granma's Heart", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Disfigured Ear", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Waterlogged Show", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        CreateItem("Mint Rag", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Claws"])
        ]);
        
        // Doctor addons
        CreateItem("Moldy Electrode", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Maple Knight", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Order - Class I", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Calm - Class I", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Scrapped Tape", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Polished Electrode", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Interview Tape", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Retraint - Class II", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Order - Class II", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Discipline - Class II", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Calm - Class II", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("High Stimulus Electrode", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Restraint - Class III", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Discipline - Class III", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Restraint - Carter's Notes", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Order - Carter's Notes", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Obedience - Carter's Notes", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Discipline - Carter's Notes", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Calm - Carter's Notes", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        CreateItem("Iridescent King", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Stick"])
        ]);
        
        // Huntress Addons
        CreateItem("Coarse Stone", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Berus Toxin", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Bandaged Haft", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Amanita Toxin", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Yew Seed Brew", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Shiny Pin", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Oak Haft", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Manna Grass Braid", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Leather Loop", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Fine Stone", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Deerskin Gloves", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Yew Seed Concoction", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Venemous Concoction", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Rusty Head", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Pungent Fiale", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Flower Babushka", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Infantry Belt", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Glowing Concoction", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Begrimed Head", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        CreateItem("Iridescent Head", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broad Axe"])
        ]);
        
        // Cannibal Addons
        CreateItem("Knife Scratches", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Sledge"])
        ]);
        CreateItem("Chili", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Sledge"])
        ]);
        CreateItem("The Grease", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Sledge"])
        ]);
        CreateItem("The Beast's Marks", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Sledge"])
        ]);
        CreateItem("Award-winning Chili", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Sledge"])
        ]);
        
        // Flashlight Addons
        CreateItem("Wide Lens", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Power Bulb", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Leather Grip", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Battery", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Tir Optic", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Rubber Grip", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Low Amp Filament", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Heavy Duty Battery", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Focus Lens", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Long Life Battery", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Intense Halogen", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("High-End Sapphire Lens", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        CreateItem("Odd Bulb", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Flashlight", "Will O' Wisp", "Sport Flashlight", "Utility Flashlight"])
        ]);
        
        // Key Addons
        CreateItem("Prayer Rope", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Scratched Pearl", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Prayer Beads", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Eroded Token", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Gold Token", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Weaved Ring", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Milky Glass", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        CreateItem("Blood Amber", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Broken Key", "Dull Key", "Skeleton Key"])
        ]);
        
        // Map Addons
        CreateItem("Map Addendum", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Yellow Wire", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Unusual Stamp", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Retardant Jelly", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Red Twine", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Glass Bead", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Odd Stamp", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Black Silk Cord", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        CreateItem("Crystal Bead", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Map", "Rainbow Map"])
        ]);
        
        // Med Kit addons
        CreateItem("Rubber Gloves", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Butterfly Tape", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Bandages", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Sponge", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Self Adherent Wrap", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Needle and Thread", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Medical Scissors", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Gauze Roll", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Surgical Suture", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Styptic Agent", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Gel Dressings", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Abdominal Dressing", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        CreateItem("Anti-Hemorrhagic Syringe", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Camping Aid Kit", "All Hallows' Eve Lunchbox", "First Aid Kit", "Emergency Med-Kit", "Ranger Med-Kit"])
        ]);
        
        // Toolbox Addons
        CreateItem("Spring Clamp", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Scraps", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Clean Rag", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Wire Spool", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Socket Swivels", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Protective Gloves", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Instructions", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Grip Wrench", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Cutting Wire", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Hacksaw", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        CreateItem("Brand New Part", "Assets/Unknown_AddOn.png", "AddOn", [
          CreateRequirement("Item", ["Worn Out Tools", "Toolbox", "Mechanic's Toolbox", "Commodious Toolbox", "Engineer's Toolbox", "Alex's Toolbox"])
        ]);
        
        // Survivor Offerings
        CreateItem("Bog Laurel Sachet", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fresh Bog Laurel", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fragrant Bog Laurel", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Crispleaf Amaranth Sachet", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fresh Crispleaf Amaranth", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fragrant Crispleaft Amaranth", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Primrose Blossom Sachet", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fresh Primrose Blossom", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fragrant Primrose Blossom", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Sweet William Sachet", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fresh Sweet William", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Fragrant Sweet William", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Bound Envelope", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Sealed Envelope", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Escape Cake", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Chalk Pouch", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Cream Chalk Pouch", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Ivory Chalk Pouch", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Salt Pouch", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Black Salt Statuette", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Vigo's Jar of Salty Lips", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Tarnished Coin", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Shiny Coin", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Shroud of Union", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Vigo's Shroud", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Shroud of Binding", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Petrified Oak", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("White Ward", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        // Killer Offerings
        CreateItem("Tanager Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Devout Tanager Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Ardent Tanager Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Raven Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Devout Raven Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Ardent Raven Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Spotted Owl Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Devout Spotted Owl Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Ardent Spotted Owl Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Shrike Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Devout Shrike Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Ardent Shrike Wreath", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hollow Shell", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Survivor Pudding", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Scratched Coin", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Cut Coin", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Moldy Oak", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Rotten Oak", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Putrid Oak", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Cypress Memento Mori", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Ivory Memento Mori", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Ebony Memento Mori", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Shroud of Separation", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Black Ward", "Assets/Unknown_Offering.png", "Offering", [
          CreateRequirement("Role", ["Killer"])
        ]);
        
        // All Player Offerings
        CreateItem("Bloody Party Streamers", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Clear Reagent", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Faint Reagent", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Hazy Reagent", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Murky Reagent", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("New Moon Bouquet", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Crescent Bouquet", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Quarter Moon Bouquet", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Full Moon Bouquet", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("MacMillan Ledger Page", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Signed Ledger Page", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("MacMillan's Phalanx Bone", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Shredded Plate", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Virginia Plate", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Azarov's Key", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Cattle Tag 28", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Cattle Tag 81", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Heart Locket", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Lunacy Ticket", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("P. Elliot Lunacy Ticket", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Charred Wedding Photograph", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Harvest Festival Leaflet", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Decrepit Clapboard", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Strode Realty Key", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Fuming Cordage", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Fuming Welcome Sign", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Granma's Cookboox", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Emergency Certificate", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Psychiatric Assessment Report", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Shattered Glasses", "Assets/Unknown_Offering.png", "Offering", []);
        
        CreateItem("Painted River Rock", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("Children's Book", "Assets/Unknown_Offering.png", "Offering", []);
        CreateItem("The Last Mask", "Assets/Unknown_Offering.png", "Offering", []);
        
        // Survivor Perks
        CreateItem("Ace In The Hole", "Assets/SurvivorPerks/Ace_In_The_Hole.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Adrenaline", "Assets/SurvivorPerks/Adrenaline.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Alert", "Assets/SurvivorPerks/Alert.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Balanced Landing", "Assets/SurvivorPerks/Balanced_Landing.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Bond", "Assets/SurvivorPerks/Bond.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Borrowed Time", "Assets/SurvivorPerks/Borrowed_Time.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Botany Knowledge", "Assets/SurvivorPerks/Botany_Knowledge.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Calm Spirit", "Assets/SurvivorPerks/Calm_Spirit.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Dark Sense", "Assets/SurvivorPerks/Dark_Sense.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Dead Hard", "Assets/SurvivorPerks/Dead_Hard.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Decisive Strike", "Assets/SurvivorPerks/Decisive_Strike.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Deja Vu", "Assets/SurvivorPerks/Deja_Vu.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Empathy", "Assets/SurvivorPerks/Empathy.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Hope", "Assets/SurvivorPerks/Hope.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Iron Will", "Assets/SurvivorPerks/Iron_Will.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Kindred", "Assets/SurvivorPerks/Kindred.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Leader", "Assets/SurvivorPerks/Leader.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Left Behind", "Assets/SurvivorPerks/Left_Behind.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Lightweight", "Assets/SurvivorPerks/Lightweight.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Lithe", "Assets/SurvivorPerks/Lithe.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("No Mither", "Assets/SurvivorPerks/No_Mither.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("No One Left Behind", "Assets/SurvivorPerks/No_One_Left_Behind.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Object of Obsession", "Assets/SurvivorPerks/Object_of_Obsession.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Open Handed", "Assets/SurvivorPerks/Open_Handed.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Plunderer's Instinct", "Assets/SurvivorPerks/Plunderer's_Instinct.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Premonition", "Assets/SurvivorPerks/Premonition.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Prove Thyself", "Assets/SurvivorPerks/Prove_Thyself.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Quick and Quiet", "Assets/SurvivorPerks/Quick_and_Quiet.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Resilience", "Assets/SurvivorPerks/Resilience.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Saboteur", "Assets/SurvivorPerks/Saboteur.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Self Care", "Assets/SurvivorPerks/Self_Care.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Slippery Meat", "Assets/SurvivorPerks/Slippery_Meat.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Small Game", "Assets/SurvivorPerks/Small_Game.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Sole Survivor", "Assets/SurvivorPerks/Sole_Survivor.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Spine Chill", "Assets/SurvivorPerks/Spine_Chill.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Sprint Burst", "Assets/SurvivorPerks/Sprint_Burst.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Streetwise", "Assets/SurvivorPerks/Streetwise.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Technician", "Assets/SurvivorPerks/Technician.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("This Is Not Happening", "Assets/SurvivorPerks/This_Is_Not_Happening.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Unbreakable", "Assets/SurvivorPerks/Unbreakable.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Up The Ante", "Assets/SurvivorPerks/Up_The_Ante.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Urban Evasion", "Assets/SurvivorPerks/Urban_Evasion.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("We'll Make It", "Assets/SurvivorPerks/We'll_Make_It.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("We're Gonna Live Forever", "Assets/SurvivorPerks/We're_Gonna_Live_Forever.png", "Perk", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        // Killer Perks
        CreateItem("A Nurse's Calling", "Assets/SurvivorPerks/A_Nurse's_Calling.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Agitation", "Assets/SurvivorPerks/Agitation.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Barbecue And Chili", "Assets/SurvivorPerks/Barbecue_And_Chili.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Beast Of Prey", "Assets/SurvivorPerks/Beast_Of_Prey.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Bitter Murmur", "Assets/SurvivorPerks/Bitter_Murmur.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Bloodhound", "Assets/SurvivorPerks/Bloodhound.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Brutal Strength", "Assets/SurvivorPerks/Brutal_Strength.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Deerstalker", "Assets/SurvivorPerks/Deerstalker.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Distressing", "Assets/SurvivorPerks/Distressing.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Dying Light", "Assets/SurvivorPerks/Dying_Light.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Enduring", "Assets/SurvivorPerks/Enduring.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Franklin's Demise", "Assets/SurvivorPerks/Franklin's_Demise.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Devour Hope", "Assets/SurvivorPerks/Hex_-_Devour_Hope.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Huntress Lullaby", "Assets/SurvivorPerks/Hex_-_Huntess_Lullaby.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - No One Escapes Death", "Assets/SurvivorPerks/Hex_-No_One_Escapes_Death.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Ruin", "Assets/SurvivorPerks/Hex_-_Ruin.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - The Third Seal", "Assets/SurvivorPerks/Hex_-_The_Third_Seal.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Thrill Of The Hunt", "Assets/SurvivorPerks/Hex_-_Thrill Of The Hunt.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Insidious", "Assets/SurvivorPerks/Insidious.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Iron Grasp", "Assets/SurvivorPerks/Iron_Grasp.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Knock Out", "Assets/SurvivorPerks/Knock_Out.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Lightborn", "Assets/SurvivorPerks/Lightborn.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Monior And Abuse", "Assets/SurvivorPerks/Monior_And_Abuse.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Monstrous Shrine", "Assets/SurvivorPerks/Monstrous_Shrine.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Overcharge", "Assets/SurvivorPerks/Overcharge.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Overwhelming Presence", "Assets/SurvivorPerks/Overwhelming_Presence.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Play With Your Food", "Assets/SurvivorPerks/Play_With_Your_Food.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Predator", "Assets/SurvivorPerks/Predator.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Save The Best For Last", "Assets/SurvivorPerks/Save_Best_For_Last.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Shadowborn", "Assets/SurvivorPerks/Shadowborn.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Sloppy Butcher", "Assets/SurvivorPerks/Sloppy_Butcher.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Spies From The Shadows", "Assets/SurvivorPerks/Spies_From_The_Shadows.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Stridor", "Assets/SurvivorPerks/Stridor.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Territorial Imperitive", "Assets/SurvivorPerks/Territorial_Imperitive.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Thanatophobia", "Assets/SurvivorPerks/Thanatophobia.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Tinkerer", "Assets/SurvivorPerks/Tinkerer.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Unnerving Presence", "Assets/SurvivorPerks/Unnerving_Presence.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Unrelenting", "Assets/SurvivorPerks/Unrelenting.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Whispers", "Assets/SurvivorPerks/Whispers.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
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
          if(vm.allItems[i].type === type) {
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
        
        vm.showState[type] = selectedItem.name;
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
          vm.showState[type] = [];
          vm.currentSelections[type] = [];
        }
        
        let selectedItem = allAvailableOptions.randomElement();
        
        // No items to choose from
        if(selectedItem === undefined) {
          // TODO: Undefined handling
          return;
        }
        
        vm.showState[type].push(selectedItem.name);
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
      
      vm.Initialize();

      // Examples
      /*vm.allItems = [
        // Role examples
        {
          name: "Killer",
          image: "http://www.foo.bar/image.png",
          type: "Role",
          requirements: []
        },
        {
          name: "Survivor",
          image: "http://www.foo.bar/image.png",
          type: "Role",
          requirements: []
        },
        
        // Character examples
        {
          name: "Trapper",
          image: "http://www.foo.bar/image.png",
          type: "Character",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Killer"]
            }
          ]
        },
        {
          name: "Jake",
          image: "http://www.foo.bar/image.png",
          type: "Character",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Survivor"]
            }
          ]
        },

        // Item examples
        {
          name: "Cleaver",
          image: "http://www.foo.bar/image.png",
          type: "Item",
          requirements: [
            {
              requiredName: "Character",
              requiredValue: ["Trapper"]
            }
          ]
        },
        {
          name: "Flashlight",
          image: "http://www.foo.bar/image.png",
          type: "Item",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Survivor"]
            }
          ]
        },

        // Item add-on examples
        {
          name: "Trapper Gloves",
          image: "http://www.foo.bar/image.png",
          type: "AddOn",
          requirements: [
            {
              requiredName: "Character",
              requiredValue: ["Trapper"]
            }
          ]
        },
        {
          name: "Wide Lens",
          image: "http://www.foo.bar/image.png",
          type: "AddOn",
          requirements: [
            {
              requiredName: "Item",
              requiredValue: ["Flashlight"]
            }
          ]
        },

        // Offering examples
        {
          name: "Tenager Wreath",
          image: "http://www.foo.bar/image.png",
          type: "Offering",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Killer"]
            }
          ]
        },
        {
          name: "Bog Laurel Sachet",
          image: "http://www.foo.bar/image.png",
          type: "Offering",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Survivor"]
            }
          ]
        },

        // Perk examples
        {
          name: "A Nurse's Calling",
          image: "http://www.foo.bar/image.png",
          type: "Perk",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Killer"]
            }
          ]
        },
        {
          name: "Ace In The Hole",
          image: "http://www.foo.bar/image.png",
          type: "Perk",
          requirements: [
            {
              requiredName: "Role",
              requiredValue: ["Survivor"]
            }
          ]
        }
      ];*/
    }
  ]);
})(window.angular);
