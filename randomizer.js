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
        CreateItem("Dwight", "Assets/Survivor/Dwight.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Meg", "Assets/Survivor/Meg.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Claudette", "Assets/Survivor/Claudette.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Jake", "Assets/Survivor/Jake.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Nea", "Assets/Survivor/Nea.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Laurie", "Assets/Survivor/Laurie.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Ace", "Assets/Survivor/Ace.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Bill", "Assets/Survivor/Bill.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Feng", "Assets/Survivor/Feng.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("David", "Assets/Survivor/David.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        /*CreateItem("Kate", "Assets/Survivor/Kate.jpg", "Character", [
          CreateRequirement("Role", ["Survivor"])
        ]);*/
        
        CreateItem("Trapper", "Assets/Killer/Trapper.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Wraith", "Assets/Killer/Wraith.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hillbilly", "Assets/Killer/Hillbilly.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Nurse", "Assets/Killer/Nurse.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Shape", "Assets/Killer/Shape.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hag", "Assets/Killer/Hag.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Doctor", "Assets/Killer/Doctor.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Huntress", "Assets/Killer/Huntress.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Cannibal", "Assets/Killer/Cannibal.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);
        /*CreateItem("Sandman", "Assets/Killer/Sandman.jpg", "Character", [
          CreateRequirement("Role", ["Killer"])
        ]);*/
        
        // Killer items (weapons)
        CreateItem("Trap", "Assets/KillerItems/Trap.png", "Item", [
          CreateRequirement("Character", ["Trapper"])
        ]);
        CreateItem("Bell", "Assets/KillerItems/Bell.png", "Item", [
          CreateRequirement("Character", ["Wraith"])
        ]);
        CreateItem("Hillbilly's Chainsaw", "Assets/KillerItems/Billy_Saw.png", "Item", [
          CreateRequirement("Character", ["Hillbilly"])
        ]);
        CreateItem("Teleport", "Assets/KillerItems/Breath.png", "Item", [
          CreateRequirement("Character", ["Nurse"])
        ]);
        CreateItem("Evil Within", "Assets/KillerItems/Evil.png", "Item", [
          CreateRequirement("Character", ["Shape"])
        ]);
        CreateItem("Hex", "Assets/KillerItems/Hex.png", "Item", [
          CreateRequirement("Character", ["Hag"])
        ]);
        CreateItem("Shock Therapy", "Assets/KillerItems/Spark.png", "Item", [
          CreateRequirement("Character", ["Doctor"])
        ]);
        CreateItem("Hatchet", "Assets/KillerItems/Axe.png", "Item", [
          CreateRequirement("Character", ["Huntress"])
        ]);
        CreateItem("Cannibal's Chainsaw", "Assets/KillerItems/Cannibal_Saw.png", "Item", [
          CreateRequirement("Character", ["Cannibal"])
        ]);
        
        // Survivor Items
        CreateItem("Chinese Firecracker", "Assets/SurvivorItems/ChineseFirecracker.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Flashlight", "Assets/SurvivorItems/Flashlight.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Will O' Wisp", "Assets/SurvivorItems/Flashlight_WillOWisp.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Sport Flashlight", "Assets/SurvivorItems/Flashlight_Sport.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Utility Flashlight", "Assets/SurvivorItems/Flashlight_Utility.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Broken Key", "Assets/SurvivorItems/Key_Broken.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Dull Key", "Assets/SurvivorItems/Key_Dull.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Skeleton Key", "Assets/SurvivorItems/Key_Skeleton.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Map", "Assets/SurvivorItems/Map.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Rainbow Map", "Assets/SurvivorItems/Map_Rainbow.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Camping Aid Kit", "Assets/SurvivorItems/FirstAid_Camping.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("All Hallows' Eve Lunchbox", "Assets/SurvivorItems/FirstAid_Spooky.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("First Aid Kit", "Assets/SurvivorItems/FirstAid.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Emergency Med-Kit", "Assets/SurvivorItems/FirstAid_Emergency.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Ranger Med-Kit", "Assets/SurvivorItems/FirstAid_Ranger.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("Worn Out Tools", "Assets/SurvivorItems/Toolbox_Worn.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Toolbox", "Assets/SurvivorItems/Toolbox.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Mechanic's Toolbox", "Assets/SurvivorItems/Toolbox_Mechanic.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Commodious Toolbox", "Assets/SurvivorItems/Toolbox_Commodious.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Engineer's Toolbox", "Assets/SurvivorItems/Toolbox_Engineer.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        CreateItem("Alex's Toolbox", "Assets/SurvivorItems/Toolbox_Alex.png", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        CreateItem("No Item", "", "Item", [
          CreateRequirement("Role", ["Survivor"])
        ]);
        
        // Add-Ons (hoo boy, hope you're ready for this)
        // Trapper addons
        CreateItem("Trapper Gloves", "Assets/KillerAddons/Trapper_TrapperGloves.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Strong Coil Spring", "Assets/KillerAddons/Trapper_StrongCoilSpring.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Serrated Jaws", "Assets/KillerAddons/Trapper_SerratedJaws.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Wax Brick", "Assets/KillerAddons/Trapper_WaxBrick.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Trapper Bag", "Assets/KillerAddons/Trapper_TrapperBag.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Trap Setters", "Assets/KillerAddons/Trapper_TrapSetters.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Secondary Coil", "Assets/KillerAddons/Trapper_SecondaryCoil.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Logwood Dye", "Assets/KillerAddons/Trapper_LogwoodDye.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("4-Coil Spring Kit", "Assets/KillerAddons/Trapper_CoilSpringKit.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Tar Bottle", "Assets/KillerAddons/Trapper_TarBottle.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Setting Tools", "Assets/KillerAddons/Trapper_SettingTools.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Rusted Jaws", "Assets/KillerAddons/Trapper_RustedJaws.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Oily Coil", "Assets/KillerAddons/Trapper_OilyCoil.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Fastening Tools", "Assets/KillerAddons/Trapper_FasteningTools.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Stitched Bag", "Assets/KillerAddons/Trapper_StitchedBag.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Honing Stone", "Assets/KillerAddons/Trapper_HoningStone.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Bloody Coil", "Assets/KillerAddons/Trapper_BloodyCoil.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        CreateItem("Diamond Stone", "Assets/KillerAddons/Trapper_DiamondStone.png", "AddOn", [
          CreateRequirement("Item", ["Trap"])
        ]);
        
        // Wraith addons
        CreateItem("Bone Clapper", "Assets/KillerAddons/Wraith_BoneClapper.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Swift Hunt - Soot", "Assets/KillerAddons/Wraith_SwiftHuntSoot.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Blink - Soot", "Assets/KillerAddons/Wraith_BlinkSoot.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Blind Warrior - Soot", "Assets/KillerAddons/Wraith_BlindWarriorSoot.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Coxcombed Clapper", "Assets/KillerAddons/Wraith_CoxcombedClapper.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Windstorm - Soot", "Assets/KillerAddons/Wraith_WindstormSoot.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Swift Hunt - Mud", "Assets/KillerAddons/Wraith_SwiftHuntMud.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Blind Warrior - Mud", "Assets/KillerAddons/Wraith_BlindWarriorMud.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("All Seeing - Mud", "Assets/KillerAddons/Wraith_AllSeeingMud.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Windstorm - Mud", "Assets/KillerAddons/Wraith_WindstormMud.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("The Ghost - Soot", "Assets/KillerAddons/Wraith_TheGhostSoot.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Swift Hunt - White", "Assets/KillerAddons/Wraith_SwiftHuntWhite.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Blind Warrior - White", "Assets/KillerAddons/Wraith_BlindWarriorWhite.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("All Seeing - White", "Assets/KillerAddons/Wraith_AllSeeingWhite.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Windstorm - Blood", "Assets/KillerAddons/Wraith_WindstormBlood.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Blind Warrior - Blood", "Assets/KillerAddons/Wraith_BlindWarriorBlood.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("All Seeing - Blood", "Assets/KillerAddons/Wraith_AllSeeingBlood.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("Blind Warrior - Spirit", "Assets/KillerAddons/Wraith_BlindWarriorSpirit.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        CreateItem("All Seeing - Spirit", "Assets/KillerAddons/Wraith_AllSeeingSpirit.png", "AddOn", [
          CreateRequirement("Item", ["Bell"])
        ]);
        
        // Hillbilly addons (and also some Cannibal)
        CreateItem("Vegetable Oil", "Assets/KillerAddons/Hillbilly_VegetableOil.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Spark Plug", "Assets/KillerAddons/Hillbilly_SparkPlug.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Chainsaw File", "Assets/KillerAddons/Hillbilly_ChainsawFile.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Spiked Boots", "Assets/KillerAddons/Hillbilly_SpikedBoots.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw"])
        ]);
        CreateItem("Speed Limiter", "Assets/KillerAddons/Hillbilly_SpeedLimiter.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Shop Lubricant", "Assets/KillerAddons/Hillbilly_ShopLubricant.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Primer Bulb", "Assets/KillerAddons/Hillbilly_PrimerBulb.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Long Guide Bar", "Assets/KillerAddons/Hillbilly_LongGuideBar.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Homemade Muffler", "Assets/KillerAddons/Hillbilly_HomemadeMuffler.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Grisly Chains", "Assets/KillerAddons/Hillbilly_GrislyChains.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Depth Gauge Rake", "Assets/KillerAddons/Hillbilly_DepthGaugeRake.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Death Engravings", "Assets/KillerAddons/Hillbilly_DeathEngravings.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw"])
        ]);
        CreateItem("The Thompson's Mix", "Assets/KillerAddons/Hillbilly_TheThompsonsMix.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw"])
        ]);
        CreateItem("Rusted Chains", "Assets/KillerAddons/Hillbilly_RustedChains.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Light Chassis", "Assets/KillerAddons/Hillbilly_LightChassis.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Doom Engravings", "Assets/KillerAddons/Hillbilly_DoomEngravings.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw"])
        ]);
        CreateItem("Carburetor Tuning Guide", "Assets/KillerAddons/Hillbilly_CarburetorTuningGuide.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        CreateItem("Thompson's Moonshine", "Assets/KillerAddons/Hillbilly_ThompsonsMoonshine.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw"])
        ]);
        CreateItem("Begrimed Chains", "Assets/KillerAddons/Hillbilly_BegrimedChains.png", "AddOn", [
          CreateRequirement("Item", ["Hillbilly's Chainsaw", "Cannibal's Chainsaw"])
        ]);
        
        // Nurse addons
        CreateItem("Wooden Horse", "Assets/KillerAddons/Nurse_WoodenHorse.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("White Nit Comb", "Assets/KillerAddons/Nurse_WhiteNitComb.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Torn Bookmark", "Assets/KillerAddons/Nurse_TornBookmark.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Metal Spoon", "Assets/KillerAddons/Nurse_MetalSpoon.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Matchbox", "Assets/KillerAddons/Nurse_Matchbox.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Bad Man Keepsake", "Assets/KillerAddons/Nurse_BadManKeepsake.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Pocket Watch", "Assets/KillerAddons/Nurse_PocketWatch.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Dull Bracelet", "Assets/KillerAddons/Nurse_DullBracelet.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Dark Cincture", "Assets/KillerAddons/Nurse_DarkCincture.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Catatonic Boy's Treasure", "Assets/KillerAddons/Nurse_CatatonicBoysTreasure.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Spasmodic Breath", "Assets/KillerAddons/Nurse_SpasmodicBreath.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Heavy Panting", "Assets/KillerAddons/Nurse_HeavyPanting.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Fragile Wheeze", "Assets/KillerAddons/Nurse_FragileWheeze.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Ataxic Respiration", "Assets/KillerAddons/Nurse_AtaxicRespiration.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Anxious Gasp", "Assets/KillerAddons/Nurse_AnxiousGasp.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Plaid Flannel", "Assets/KillerAddons/Nurse_PlaidFlannel.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Kavanagh's Last Breath", "Assets/KillerAddons/Nurse_KavanaghsLastBreath.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Jenner's Last Breath", "Assets/KillerAddons/Nurse_JennersLastBreath.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Campbell's Last Breath", "Assets/KillerAddons/Nurse_CampbellsLastBreath.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        CreateItem("Bad Man's Last Breath", "Assets/KillerAddons/Nurse_BadMansLastBreath.png", "AddOn", [
          CreateRequirement("Item", ["Teleport"])
        ]);
        
        // Shape addons
        CreateItem("Tacky Earrings", "Assets/KillerAddons/Shape_TackyEarrings.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Boyfriend's Memo", "Assets/KillerAddons/Shape_BoyfriendsMemo.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Blond Hair", "Assets/KillerAddons/Shape_BlondHair.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Reflective Fragment", "Assets/KillerAddons/Shape_ReflectiveFragment.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Memorial Flower", "Assets/KillerAddons/Shape_MemorialFlower.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Jewelry", "Assets/KillerAddons/Shape_Jewelry.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Hair Brush", "Assets/KillerAddons/Shape_HairBrush.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Glass Fragment", "Assets/KillerAddons/Shape_GlassFragment.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Dead Rabbit", "Assets/KillerAddons/Shape_DeadRabbit.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Mirror Shard", "Assets/KillerAddons/Shape_MirrorShard.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Judith's Journal", "Assets/KillerAddons/Shape_JudithsJournal.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Jewelry Box", "Assets/KillerAddons/Shape_JewelryBox.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("J. Meyers Memorial", "Assets/KillerAddons/Shape_JMeyersMemorial.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Hair Bow", "Assets/KillerAddons/Shape_HairBow.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Vanity Mirror", "Assets/KillerAddons/Shape_VanityMirror.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Tombstone Piece", "Assets/KillerAddons/Shape_TombstonePiece.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Scratched Mirror", "Assets/KillerAddons/Shape_ScratchedMirror.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Lock of Hair", "Assets/KillerAddons/Shape_LockOfHair.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Judith's Tombstone", "Assets/KillerAddons/Shape_JudithsTombstone.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        CreateItem("Fragrant Tuft of Hair", "Assets/KillerAddons/Shape_FragrantTuftOfHair.png", "AddOn", [
          CreateRequirement("Item", ["Evil Within"])
        ]);
        
        // Hag addons
        CreateItem("Rope Necklet", "Assets/KillerAddons/Hag_RopeNecklet.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Powdered Eggshell", "Assets/KillerAddons/Hag_PowderedEggshell.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Dead Fly Mud", "Assets/KillerAddons/Hag_DeadFlyMud.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Bog Water", "Assets/KillerAddons/Hag_BogWater.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Pussy Willow Catkins", "Assets/KillerAddons/Hag_PussyWillowCatkins.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Half Eggshell", "Assets/KillerAddons/Hag_HalfEggshell.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Dragonfly Wings", "Assets/KillerAddons/Hag_DragonflyWings.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Cypress Necklet", "Assets/KillerAddons/Hag_CypressNecklet.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Bloodied Water", "Assets/KillerAddons/Hag_BloodiedWater.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Willow Wreath", "Assets/KillerAddons/Hag_WillowWreath.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Swamp Orchid Necklet", "Assets/KillerAddons/Hag_SwampOrchidNecklet.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Dried Cicada", "Assets/KillerAddons/Hag_DriedCicada.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Cracked Turtle Egg", "Assets/KillerAddons/Hag_CrackedTurtleEgg.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Bloodied Mud", "Assets/KillerAddons/Hag_BloodiedMud.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Scarred Hand", "Assets/KillerAddons/Hag_ScarredHand.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Rusty Shackles", "Assets/KillerAddons/Hag_RustyShackles.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Granma's Heart", "Assets/KillerAddons/Hag_GranmasHeart.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Disfigured Ear", "Assets/KillerAddons/Hag_DisfiguredEar.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Waterlogged Shoe", "Assets/KillerAddons/Hag_WaterloggedShoe.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        CreateItem("Mint Rag", "Assets/KillerAddons/Hag_MintRag.png", "AddOn", [
          CreateRequirement("Item", ["Hex"])
        ]);
        
        // Doctor addons
        CreateItem("Moldy Electrode", "Assets/KillerAddons/Doctor_MoldyElectrode.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Maple Knight", "Assets/KillerAddons/Doctor_MapleKnight.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Order - Class I", "Assets/KillerAddons/Doctor_OrderClassI.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Calm - Class I", "Assets/KillerAddons/Doctor_CalmClassI.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Scrapped Tape", "Assets/KillerAddons/Doctor_ScrappedTape.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Polished Electrode", "Assets/KillerAddons/Doctor_PolishedElectrode.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Interview Tape", "Assets/KillerAddons/Doctor_InterviewTape.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Restraint - Class II", "Assets/KillerAddons/Doctor_RestraintClassII.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Order - Class II", "Assets/KillerAddons/Doctor_OrderClassII.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Discipline - Class II", "Assets/KillerAddons/Doctor_DisciplineClassII.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Calm - Class II", "Assets/KillerAddons/Doctor_CalmClassII.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("High Stimulus Electrode", "Assets/KillerAddons/Doctor_HighStimulusElectrode.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Restraint - Class III", "Assets/KillerAddons/Doctor_RestraintClassIII.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Discipline - Class III", "Assets/KillerAddons/Doctor_DisciplineClassIII.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Restraint - Carter's Notes", "Assets/KillerAddons/Doctor_RestraintCartersNotes.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Order - Carter's Notes", "Assets/KillerAddons/Doctor_OrderCartersNotes.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Obedience - Carter's Notes", "Assets/KillerAddons/Doctor_ObedienceCartersNotes.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Discipline - Carter's Notes", "Assets/KillerAddons/Doctor_DisciplineCartersNotes.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Calm - Carter's Notes", "Assets/KillerAddons/Doctor_CalmCartersNotes.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        CreateItem("Iridescent King", "Assets/KillerAddons/Doctor_IridescentKing.png", "AddOn", [
          CreateRequirement("Item", ["Shock Therapy"])
        ]);
        
        // Huntress Addons
        CreateItem("Coarse Stone", "Assets/KillerAddons/Huntress_CoarseStone.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Berus Toxin", "Assets/KillerAddons/Huntress_BerusToxin.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Bandaged Haft", "Assets/KillerAddons/Huntress_BandagedHaft.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Amanita Toxin", "Assets/KillerAddons/Huntress_AmanitaToxin.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Yew Seed Brew", "Assets/KillerAddons/Huntress_YewSeedBrew.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Shiny Pin", "Assets/KillerAddons/Huntress_ShinyPin.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Oak Haft", "Assets/KillerAddons/Huntress_OakHaft.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Manna Grass Braid", "Assets/KillerAddons/Huntress_MannaGrassBraid.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Leather Loop", "Assets/KillerAddons/Huntress_LeatherLoop.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Fine Stone", "Assets/KillerAddons/Huntress_FineStone.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Deerskin Gloves", "Assets/KillerAddons/Huntress_DeerskinGloves.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Yew Seed Concoction", "Assets/KillerAddons/Huntress_YewSeedConcoction.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Venemous Concoction", "Assets/KillerAddons/Huntress_VenemousConcoction.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Rusty Head", "Assets/KillerAddons/Huntress_RustyHead.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Pungent Fiale", "Assets/KillerAddons/Huntress_PungentFiale.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Flower Babushka", "Assets/KillerAddons/Huntress_FlowerBabushka.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Infantry Belt", "Assets/KillerAddons/Huntress_InfantryBelt.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Glowing Concoction", "Assets/KillerAddons/Huntress_GlowingConcoction.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Begrimed Head", "Assets/KillerAddons/Huntress_BegrimedHead.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        CreateItem("Iridescent Head", "Assets/KillerAddons/Huntress_IridescentHead.png", "AddOn", [
          CreateRequirement("Item", ["Hatchet"])
        ]);
        
        // Cannibal Addons
        CreateItem("Knife Scratches", "Assets/KillerAddons/Cannibal_KnifeScratches.png", "AddOn", [
          CreateRequirement("Item", ["Cannibal's Chainsaw"])
        ]);
        CreateItem("Chili", "Assets/KillerAddons/Cannibal_Chili.png", "AddOn", [
          CreateRequirement("Item", ["Cannibal's Chainsaw"])
        ]);
        CreateItem("The Grease", "Assets/KillerAddons/Cannibal_TheGrease.png", "AddOn", [
          CreateRequirement("Item", ["Cannibal's Chainsaw"])
        ]);
        CreateItem("The Beast's Marks", "Assets/KillerAddons/Cannibal_TheBeastsMarks.png", "AddOn", [
          CreateRequirement("Item", ["Cannibal's Chainsaw"])
        ]);
        CreateItem("Award-Winning Chili", "Assets/KillerAddons/Cannibal_AwardWinningChili.png", "AddOn", [
          CreateRequirement("Item", ["Cannibal's Chainsaw"])
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
        
        CreateItem("No Add-On", "", "AddOn", []);
        CreateItem("No Add-On ", "", "AddOn", []);
        
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
        CreateItem("Fragrant Crispleaf Amaranth", "Assets/Unknown_Offering.png", "Offering", [
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
        
        CreateItem("No Offering", "", "Offering", []);
        
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
        CreateItem("A Nurse's Calling", "Assets/KillerPerks/A_Nurse's_Calling.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Agitation", "Assets/KillerPerks/Agitation.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Barbecue And Chili", "Assets/KillerPerks/Barbecue_And_Chili.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Beast Of Prey", "Assets/KillerPerks/Beast_Of_Prey.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Bitter Murmur", "Assets/KillerPerks/Bitter_Murmur.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Bloodhound", "Assets/KillerPerks/Bloodhound.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Brutal Strength", "Assets/KillerPerks/Brutal_Strength.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Deerstalker", "Assets/KillerPerks/Deerstalker.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Distressing", "Assets/KillerPerks/Distressing.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Dying Light", "Assets/KillerPerks/Dying_Light.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Enduring", "Assets/KillerPerks/Enduring.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Franklin's Demise", "Assets/KillerPerks/Franklin's_Demise.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Devour Hope", "Assets/KillerPerks/Hex_-_Devour_Hope.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Huntress Lullaby", "Assets/KillerPerks/Hex_-_Huntress_Lullaby.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - No One Escapes Death", "Assets/KillerPerks/Hex_-_No_One_Escapes_Death.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Ruin", "Assets/KillerPerks/Hex_-_Ruin.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - The Third Seal", "Assets/KillerPerks/Hex_-_The_Third_Seal.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Hex - Thrill Of The Hunt", "Assets/KillerPerks/Hex_-_Thrill_Of_The_Hunt.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Insidious", "Assets/KillerPerks/Insidious.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Iron Grasp", "Assets/KillerPerks/Iron_Grasp.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Knock Out", "Assets/KillerPerks/Knock_Out.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Lightborn", "Assets/KillerPerks/Lightborn.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Monitor And Abuse", "Assets/KillerPerks/Monitor_And_Abuse.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Monstrous Shrine", "Assets/KillerPerks/Monstrous_Shrine.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Overcharge", "Assets/KillerPerks/Overcharge.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Overwhelming Presence", "Assets/KillerPerks/Overwhelming_Presence.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Play With Your Food", "Assets/KillerPerks/Play_With_Your_Food.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Predator", "Assets/KillerPerks/Predator.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Save The Best For Last", "Assets/KillerPerks/Save_The_Best_For_Last.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Shadowborn", "Assets/KillerPerks/Shadowborn.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Sloppy Butcher", "Assets/KillerPerks/Sloppy_Butcher.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Spies From The Shadows", "Assets/KillerPerks/Spies_From_The_Shadows.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Stridor", "Assets/KillerPerks/Stridor.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Territorial Imperitive", "Assets/KillerPerks/Territorial_Imperitive.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Thanatophobia", "Assets/KillerPerks/Thanatophobia.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Tinkerer", "Assets/KillerPerks/Tinkerer.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Unnerving Presence", "Assets/KillerPerks/Unnerving_Presence.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Unrelenting", "Assets/KillerPerks/Unrelenting.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        CreateItem("Whispers", "Assets/KillerPerks/Whispers.png", "Perk", [
          CreateRequirement("Role", ["Killer"])
        ]);
        
        CreateItem("No Perk", "", "Perk", []);
        CreateItem("No Perk ", "", "Perk", []);
        CreateItem("No Perk  ", "", "Perk", []);
        CreateItem("No Perk   ", "", "Perk", []);
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
          name: "Trap",
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
