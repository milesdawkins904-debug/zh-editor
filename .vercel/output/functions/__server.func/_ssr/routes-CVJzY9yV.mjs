import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as FolderOpen, i as Skull, l as Download, o as RotateCcw, r as Trash2, s as Plus, t as X, u as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVJzY9yV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var default_config_default = {
	"Horde Options": {
		"Amount of zombies to spawn when a new horde is created": 2,
		"Maximum amount of spawned zombies per horde": 6,
		"Maximum amount of hordes at any given time": 450,
		"Amount of time from when a horde is destroyed until a new horde is created (seconds)": 100,
		"Amount of time before a horde grows in size": 10,
		"Add a zombie to the horde when a horde member kills a player": false,
		"Merge hordes together if they collide": false,
		"Spawn system (SpawnsDatabase, Random)": "Random",
		"Spawn file (only required when using SpawnsDatabase)": "",
		"Amount of time a player needs to be outside of a zombies vision before it forgets about them": 18,
		"Default roam speed (Slowest, Slow, Normal, Fast)": "fast",
		"Force all hordes to roam locally": true,
		"Local roam distance": 380,
		"Restrict chase distance for local hordes (1.5x the maximum roam distance for that horde)": true,
		"Use horde profiles for randomly spawned hordes": true,
		"Specific horde profiles for randomly spawned hordes": [],
		"Sense nearby gunshots and explosions": true
	},
	"Horde Member Options": /*#__PURE__*/ JSON.parse("{\"Can target animals\":false,\"Can be targeted by turrets\":true,\"Can be targeted by NPC turrets\":false,\"Can be targeted by peacekeeper turrets and NPC turrets\":false,\"Can be targeted by Bradley APC\":false,\"Can be targeted by other NPCs\":false,\"Can be targeted by animals\":false,\"Can target other NPCs\":false,\"Can target other NPCs that attack zombies\":false,\"Can target NPCs from HumanNPC\":false,\"Ignore sleeping players\":true,\"Give all zombies glowing eyes\":true,\"Headshots instantly kill zombie\":true,\"Minimum damage required for a headshot kill\":5,\"Kill NPCs that are under water\":true,\"Can zombies swim across water\":true,\"Enable NPC dormant system. This will put NPCs to sleep when no players are nearby to improve performance\":true,\"Zombies make zombie sounds\":false,\"Continue to target players who hide in buildings\":true,\"Throwable explosive building damage multiplier\":1.25,\"Maximum explosive throw range\":22,\"Despawn dud explosives thrown by Zombies\":true,\"Make dud explosives thrown by Zombies explode anyway\":false,\"Don't apply the building damage multiplier if the target is not the owner or authed on the TC\":true,\"Don't apply building damage if the target is not the owner or authed on the TC\":true,\"Melee weapon building damage multiplier\":3,\"Zombies can mount vehicles if target player mounts it\":false,\"Consume throwable items when using\":true,\"Make zombies gingerbread men\":false,\"Corpse despawn time (0 is default behavior)\":90,\"Loadouts\":[{\"LoadoutID\":\"loadout-0\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Bone-clubber\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":96,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"bone.club\",\"SkinID\":1422434602,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-1\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Boner Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.bone.obsidian\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteins.monster.02.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-2\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Frank-tank Satchelstein\"],\"Damage multiplier\":1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":10},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":110,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":96,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"mace\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"explosive.satchel\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"metal.facemask\",\"SkinID\":817371137,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-3\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Boneknife Baghead\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.bone\",\"SkinID\":1158835004,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"shoes.boots\",\"SkinID\":1170010955,\"Amount\":1},{\"Shortname\":\"prisonerhood\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"pants\",\"SkinID\":809637889,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-4\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Stake Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":90,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"vampire.stake\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.f1\",\"SkinID\":0,\"Amount\":1}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-5\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Batty Scarecrow\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"mace.baseballbat\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"scarecrow.suit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-6\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Knifey Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.bone\",\"SkinID\":1121903936,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-7\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Rock Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"rock\",\"SkinID\":890010116,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteins.monster.03.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-8\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Skinny Skull Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"skull\",\"SkinID\":0,\"Amount\":0},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-9\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Wood-clad Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":25},\"Movement\":{\"Speed\":2,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"sickle\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"wood.armor.helmet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wood.armor.jacket\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"woodarmor.gloves\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wooden.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-10\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Frank Fatblade\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":10},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"longsword\",\"SkinID\":1346697708,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"bucket.helmet\",\"SkinID\":926313433,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-11\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Woodclad Mummy\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":25},\"Movement\":{\"Speed\":2,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"sunken.knife\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.flashbang\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"wood.armor.helmet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wood.armor.jacket\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wooden.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wood.armor.pants\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-12\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Sir Shot-a-lot\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":1.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"krieg.chainsword\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"knightsarmour.helmet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"knighttorso.armour\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"knightsarmour.skirt\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"metal.shield\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-13\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Frank Butcherstein\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":15},\"Movement\":{\"Speed\":2,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.butcher\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"wood.armor.jacket\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wooden.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"scarecrowhead\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-14\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Phat Chain-Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":10},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"chainsaw\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"lowgradefuel\",\"SkinID\":0,\"Amount\":50},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"metal.facemask.hockey\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-15\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Miner Mummy\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":2,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.skinning\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hat.miner\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wood.armor.pants\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wooden.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-16\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Molly Mummy\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":2,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"hatchet\",\"SkinID\":3400412748,\"Amount\":1},{\"Shortname\":\"grenade.molotov\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hat.candle\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-17\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Phat Paddle Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":75},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"paddle\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"explosive.timed\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hazmatsuit.diver\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-18\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Spaceman Frank\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":75},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"concretepickaxe\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"explosive.timed\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hazmatsuit.spacesuit\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"improvised.shield\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-19\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Son of Baghead\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":2,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.skinning\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"prisonerhood\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-20\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Frankenkrieg\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":75},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"krieg.chainsword\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"explosive.timed\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hazmat.krieg\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-21\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Poncho-Mummy\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":1.5,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.bone.obsidian\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"mask.bandana\",\"SkinID\":2289910006,\"Amount\":1},{\"Shortname\":\"attire.hide.poncho\",\"SkinID\":3322329423,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"woodarmor.gloves\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"wood.armor.pants\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"riot.helmet\",\"SkinID\":785824026,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-22\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Tommy Tankenstein\"],\"Damage multiplier\":1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":10},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":110,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":96,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"machete\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"explosive.satchel\",\"SkinID\":857130537,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"mummymask\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"reinforced.wooden.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-23\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Hatchet Mummy\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":15},\"Movement\":{\"Speed\":3,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"frontier_hatchet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.bee\",\"SkinID\":0,\"Amount\":2}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"jacket\",\"SkinID\":818070274,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-24\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Frontier Zombie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":75},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"frontier_hatchet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hazmatsuit.frontier\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"improvised.shield\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-25\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Heavy Tankenstein\"],\"Damage multiplier\":1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":10},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":110,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":96,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"salvaged.sword\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.f1\",\"SkinID\":0,\"Amount\":1}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"coffeecan.helmet\",\"SkinID\":3542072501,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"metal.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-26\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Lost Zombie Pilot\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":50},\"Movement\":{\"Speed\":1.5,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":96,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"boomerang\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hazmatsuit.pilot\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-27\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Horseheid\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3.5,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"mace.baseballbat\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"silly.horse.mask\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-28\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Froghead Mummy\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":4},\"Movement\":{\"Speed\":2.5,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"hatchet\",\"SkinID\":3400412748,\"Amount\":1},{\"Shortname\":\"grenade.molotov\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hat.wellipets\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.legs\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"boots.frog\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-29\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Skinning Scarecrow\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.skinning\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"improvised.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"scarecrow.suit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-30\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Masked Frankie\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":10},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"chainsaw\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"lowgradefuel\",\"SkinID\":0,\"Amount\":50},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"frankensteinmask\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.head\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"reinforced.wooden.shield\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"metal.plate.torso\",\"SkinID\":2349927242,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.01.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.03.legs\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-31\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Corporal Armenia\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":1.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"krieg.chainsword\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.f1\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"ballistic.helmet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"ballistic.vest\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"ballistic.legarmor\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-32\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Private Parts\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":1.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"sunken.knife\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"ballistic.vest\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-33\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Captain Queefheart\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":1.5,\"Acceleration\":13,\"Turn speed\":65,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"knife.skinning\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"surveycharge\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"ballistic.legarmor\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"halloween.mummysuit\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-34\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Lumbering Jack\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":75},\"Movement\":{\"Speed\":1.5,\"Acceleration\":11,\"Turn speed\":55,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"lumberjack.hatchet\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"explosive.timed\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"hazmatsuit.lumberjack\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"reinforced.wooden.shield\",\"SkinID\":0,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]},{\"LoadoutID\":\"loadout-35\",\"Potential names for zombies using this loadout (chosen at random)\":[\"Son of Horseheid\"],\"Damage multiplier\":0.1,\"Aim cone scale (for projectile weapons)\":2,\"Vitals\":{\"Health\":5},\"Movement\":{\"Speed\":3.5,\"Acceleration\":12,\"Turn speed\":60,\"Speed multiplier - Slowest\":0.1,\"Speed multiplier - Slow\":0.3,\"Speed multiplier - Normal\":0.5,\"Speed multiplier - Fast\":1,\"Speed multiplier - Low health\":0.5},\"Sensory\":{\"Attack range multiplier\":1,\"Sense range\":48,\"Listen range\":400,\"Target lost range\":64,\"Target lost range time (seconds)\":1,\"Target lost LOS time (seconds)\":1,\"Ignore sneaking outside of vision range\":false,\"Vision cone (0 - 180 degrees)\":180,\"Ignore players in safe zone\":true},\"BeltItems\":[{\"Shortname\":\"icepick.salvaged\",\"SkinID\":3531213636,\"Amount\":1},{\"Shortname\":\"grenade.beancan\",\"SkinID\":0,\"Amount\":3}],\"MainItems\":[],\"WearItems\":[{\"Shortname\":\"shoes.boots\",\"SkinID\":3097589772,\"Amount\":1},{\"Shortname\":\"silly.horse.mask\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"frankensteins.monster.02.torso\",\"SkinID\":0,\"Amount\":1},{\"Shortname\":\"pants\",\"SkinID\":3033868453,\"Amount\":1}],\"Random loot override (applies to this profile only)\":{\"Minimum amount of items to spawn\":0,\"Maximum amount of items to spawn\":0,\"List\":[]},\"AlphaLoot profiles as loot override (applies to this profile only)\":[]}]}"),
	"Loot Table": /*#__PURE__*/ JSON.parse("{\"Drop inventory on death instead of random loot\":false,\"Drop default murderer loot on death instead of random loot\":false,\"Drop one of the specified AlphaLoot profiles as loot\":[],\"Random loot table\":{\"Minimum amount of items to spawn\":4,\"Maximum amount of items to spawn\":5,\"List\":[{\"Shortname\":\"chocolate\",\"ItemName\":\"Chocolate Bar\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"horsedung\",\"ItemName\":\"Horse Dung\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.08,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"skull.human\",\"ItemName\":\"Human Skull\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.02,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"gravestone\",\"ItemName\":\"Gravestone\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"spikes.trap\",\"ItemName\":\"Spike Trap\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"ammo.shotgun\",\"ItemName\":\"12 Gauge Buckshot\",\"Minimum\":1,\"Maximum\":50,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.25,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"spikes.floor\",\"ItemName\":\"Wooden Floor Spikes\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"ammo.rifle.hv\",\"ItemName\":\"HV 5.56 Rifle Ammo\",\"Minimum\":1,\"Maximum\":50,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.25,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"ammo.rifle\",\"ItemName\":\"5.56 Rifle Ammo\",\"Minimum\":1,\"Maximum\":50,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.25,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"trap.landmine\",\"ItemName\":\"Land Mine\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"ammo.pistol.hv\",\"ItemName\":\"HV Pistol Ammo\",\"Minimum\":10,\"Maximum\":50,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.25,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"ammo.pistol\",\"ItemName\":\"Pistol Bullet\",\"Minimum\":10,\"Maximum\":50,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.25,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"barricade.wood\",\"ItemName\":\"Wooden Barricade\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"coffin.storage\",\"ItemName\":\"Coffin\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"barricade.metal\",\"ItemName\":\"Metal Barricade\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"syringe.medical\",\"ItemName\":\"Medical Syringe\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"watchtower.wood\",\"ItemName\":\"Watchtower\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"black.raspberries\",\"ItemName\":\"Black Raspberries\",\"Minimum\":1,\"Maximum\":10,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.25,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"barricade.concrete\",\"ItemName\":\"Concrete Barricade\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"barricade.sandbags\",\"ItemName\":\"Sandbag Barricade\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"barricade.woodwire\",\"ItemName\":\"Barbed Wooden Barricade\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"healingtea.advanced\",\"ItemName\":\"Advanced Healing Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"maxhealthtea.advanced\",\"ItemName\":\"Advanced Max Health Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"oretea.advanced\",\"ItemName\":\"Advanced Ore Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"radiationremovetea.advanced\",\"ItemName\":\"Advanced Rad. Removal Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"scraptea.advanced\",\"ItemName\":\"Advanced Scrap Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"woodtea.advanced\",\"ItemName\":\"Advanced Wood Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"radiationresisttea.advanced\",\"ItemName\":\"Advanced Anti-Rad Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.anchovy\",\"ItemName\":\"Anchovy\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"antiradpills\",\"ItemName\":\"Puke Pills\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":3255499539,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"radiationresisttea\",\"ItemName\":\"Anti-Rad Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.2,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"apple\",\"ItemName\":\"Apple\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"healingtea\",\"ItemName\":\"Basic Healing Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"maxhealthtea\",\"ItemName\":\"Basic Max Health Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"oretea\",\"ItemName\":\"Basic Ore Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"scraptea\",\"ItemName\":\"Basic Scrap Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"woodtea\",\"ItemName\":\"Basic Wood Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"black.raspberries\",\"ItemName\":\"Black Raspberries\",\"Minimum\":2,\"Maximum\":3,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"blueberries\",\"ItemName\":\"Blueberries\",\"Minimum\":4,\"Maximum\":8,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"bread.loaf\",\"ItemName\":\"Bread Loaf\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"cactusflesh\",\"ItemName\":\"Cactus Flesh\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"can.beans\",\"ItemName\":\"Rotten Beans\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.4,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"can.tuna\",\"ItemName\":\"Rancid Tuna\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.4,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"chocolate\",\"ItemName\":\"Chocolate Bar\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"bearmeat.cooked\",\"ItemName\":\"Cooked Bear Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"bigcatmeat.cooked\",\"ItemName\":\"Cooked Big Cat Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"chicken.cooked\",\"ItemName\":\"Cooked Chicken\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"crocodilemeat.cooked\",\"ItemName\":\"Cooked Crocodile Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"deermeat.cooked\",\"ItemName\":\"Cooked Deer Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.cooked\",\"ItemName\":\"Cooked Fish\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"horsemeat.cooked\",\"ItemName\":\"Cooked Horse Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"meat.pork.cooked\",\"ItemName\":\"Cooked Pork\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"snakemeat.cooked\",\"ItemName\":\"Cooked Snake Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"wolfmeat.cooked\",\"ItemName\":\"Cooked Wolf Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"corn\",\"ItemName\":\"Corn\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"seed.corn\",\"ItemName\":\"Corn Seed\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"egg\",\"ItemName\":\"Egg\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"granolabar\",\"ItemName\":\"Granola Bar\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.6,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.herring\",\"ItemName\":\"Herring of Ni!\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"honey\",\"ItemName\":\"Jar of Honey\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"harvestingtea\",\"ItemName\":\"Harvesting Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"largemedkit\",\"ItemName\":\"Large Medkit\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.6,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"syringe.medical\",\"ItemName\":\"Medical Syringe\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.4,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.minnows\",\"ItemName\":\"Minnows\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.orangeroughy\",\"ItemName\":\"Orange Roughy\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"jar.pickle\",\"ItemName\":\"Jar of Pukeles\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"potato\",\"ItemName\":\"Potato\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"radiationresisttea.pure\",\"ItemName\":\"Pure Anti-Rad Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"healingtea.pure\",\"ItemName\":\"Pure Healing Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"maxhealthtea.pure\",\"ItemName\":\"Pure Max Health Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"oretea.pure\",\"ItemName\":\"Pure Ore Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"radiationremovetea.pure\",\"ItemName\":\"Pure Rad. Removal Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"scraptea.pure\",\"ItemName\":\"Pure Scrap Tea\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"woodtea.pure\",\"ItemName\":\"Pure Wood Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"warmingtea\",\"ItemName\":\"Warming Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.survivors\",\"ItemName\":\"Survivalator's Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.apple\",\"ItemName\":\"MILF's Apple Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.bear\",\"ItemName\":\"Bear Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.chicken\",\"ItemName\":\"Pet Chicken Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.fish\",\"ItemName\":\"Aunty's Fish Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.hunters\",\"ItemName\":\"Hunter's Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.bigcat\",\"ItemName\":\"Big Pussy Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"pie.crocodile\",\"ItemName\":\"LaCoste Croc Pie\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"radiationremovetea\",\"ItemName\":\"Rad. Removal Tea\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"bigcatmeat\",\"ItemName\":\"Raw Big Cat Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"crocodilemeat\",\"ItemName\":\"Raw Crocodile Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"snakemeat\",\"ItemName\":\"Raw Snake Meat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"apple.spoiled\",\"ItemName\":\"Rotten Apple\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.6,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.salmon\",\"ItemName\":\"Salmon\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.sardine\",\"ItemName\":\"Sardine\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.smallshark\",\"ItemName\":\"Small Shark\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.3,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.troutsmall\",\"ItemName\":\"Small Trout\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"bigcatmeat.spoiled\",\"ItemName\":\"Rotten Big Cat Meat\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"chicken.spoiled\",\"ItemName\":\"Rotten KFC\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"crocodilemeat.spoiled\",\"ItemName\":\"Spoiled Crocodile Meat\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"snakemeat.spoiled\",\"ItemName\":\"Spoiled Snake Meat\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"humanmeat.spoiled\",\"ItemName\":\"Rotten Horde Flesh\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.7,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"wolfmeat.spoiled\",\"ItemName\":\"Rotten Dogmeat\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"supertea\",\"ItemName\":\"Super Serum\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"waterjug\",\"ItemName\":\"Water Jug\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"coconut\",\"ItemName\":\"Coconut\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.2,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"fish.yellowperch\",\"ItemName\":\"Yellow Perch\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"blood\",\"ItemName\":\"Zombie blood sample\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":3242051288,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.1,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"can.beans\",\"ItemName\":\"Rotten Dogfood\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":3242051845,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.4,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"can.tuna\",\"ItemName\":\"Rancid Catfood\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":3242051715,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.4,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"syringe.medical\",\"ItemName\":\"ZHH virus antidote\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":3241601264,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.7,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"syringe.medical\",\"ItemName\":\"Rabies antidote\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":3242055401,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.6,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"largemedkit\",\"ItemName\":\"Broken leg splint\",\"Minimum\":1,\"Maximum\":2,\"SkinID\":3242053234,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"antiradpills\",\"ItemName\":\"Tapeworm tablets\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":3242054597,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"granolabar\",\"ItemName\":\"Tasty dog treat\",\"Minimum\":2,\"Maximum\":4,\"SkinID\":3242052177,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.7,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"smallwaterbottle\",\"ItemName\":\"Bottle of Irn Bru\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":3242051538,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.4,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"healingtea\",\"ItemName\":\"Can of Irn Bru\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":3242052032,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.5,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"healingtea.advanced\",\"ItemName\":\"ZHH MRE Rations\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":3205195553,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.7,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null},{\"Shortname\":\"wall.graveyard.fence\",\"ItemName\":\"Graveyard Fence\",\"Minimum\":1,\"Maximum\":1,\"SkinID\":0,\"Spawn as blueprint\":false,\"Probability (0.0 - 1.0)\":0.05,\"Minimum condition (0.0 - 1.0)\":1,\"Maximum condition (0.0 - 1.0)\":1,\"Spawn with\":null}]},\"Dropped inventory item blacklist (shortnames)\":[\"exampleitem.shortname1\",\"exampleitem.shortname2\",\"ammo.rifle.explosive\",\"ammo.rocket.basic\",\"attire.hide.poncho\",\"ballistic.helmet\",\"ballistic.legarmor\",\"ballistic.vest\",\"boots.frog\",\"bucket.helmet\",\"coffeecan.helmet\",\"explosive.satchel\",\"explosive.timed\",\"frankensteinmask\",\"frankensteins.monster.01.head\",\"frankensteins.monster.01.legs\",\"frankensteins.monster.01.torso\",\"frankensteins.monster.02.head\",\"frankensteins.monster.02.legs\",\"frankensteins.monster.02.torso\",\"frankensteins.monster.03.head\",\"frankensteins.monster.03.legs\",\"frankensteins.monster.03.torso\",\"halloween.mummysuit\",\"hat.candle\",\"hat.miner\",\"hat.wellipets\",\"hazmat.krieg\",\"hazmatsuit.diver\",\"hazmatsuit.frontier\",\"hazmatsuit.lumberjack\",\"hazmatsuit.pilot\",\"hazmatsuit.spacesuit\",\"heavy.plate.helmet\",\"heavy.plate.jacket\",\"heavy.plate.pants\",\"hoodie\",\"improvised.shield\",\"jacket\",\"knightsarmour.helmet\",\"knightsarmour.skirt\",\"knighttorso.armour\",\"lmg.m249\",\"mask.bandana\",\"metal.facemask\",\"metal.facemask.hockey\",\"metal.plate.torso\",\"metal.shield\",\"multiplegrenadelauncher\",\"mummymask\",\"pants\",\"pistol.m92\",\"prisonerhood\",\"reinforced.wooden.shield\",\"rifle.ak\",\"rifle.lr300\",\"rifle.semiauto\",\"riot.helmet\",\"roadsign.gloves\",\"roadsign.jacket\",\"roadsign.kilt\",\"rocket.launcher\",\"scarecrow.suit\",\"scarecrowhead\",\"shoes.boots\",\"silly.horse.mask\",\"smg.mp5\",\"smg.thompson\",\"tactical.gloves\",\"wood.armor.helmet\",\"wood.armor.jacket\",\"wood.armor.pants\",\"woodarmor.gloves\",\"wooden.shield\"]}"),
	"Monument Spawn Options": {
		"ArcticResearch": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Airfield": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Dome": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": null
		},
		"Junkyard": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 100,
			"Horde profile": "loadout-0"
		},
		"Ferry": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"LargeHarbor": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"GasStation": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Powerplant": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"StoneQuarry": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"SulfurQuarry": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"HQMQuarry": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Radtown": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"LegacyRadtown": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 85,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"LaunchSite": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Satellite": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"SmallHarbor": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Supermarket": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Trainyard": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Tunnels": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Warehouse": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"WaterTreatment": {
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": 100,
			"Maximum amount of members in this horde": 10,
			"Horde profile": ""
		},
		"Custom": [{
			"Location": {
				"X": 0,
				"Y": 0,
				"Z": 0,
				"IsValid": false
			},
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": -1,
			"Maximum amount of members in this horde": 3,
			"Horde profile": ""
		}, {
			"Location": {
				"X": 0,
				"Y": 0,
				"Z": 0,
				"IsValid": false
			},
			"Enable spawns at this monument": false,
			"Distance that this horde can roam from their initial spawn point": -1,
			"Maximum amount of members in this horde": 3,
			"Horde profile": ""
		}]
	},
	"Timed Spawn Options": {
		"Only allows spawns during the set time period": true,
		"Despawn hordes outside of the set time period": true,
		"Start time (0.0 - 24.0)": 17,
		"End time (0.0 - 24.0)": 10,
		"Broadcast notification when hordes start spawning": true,
		"Broadcast notification when hordes start despawning": true
	},
	"Horde Profiles (profile name, list of applicable loadouts)": {
		"Profile1": [
			"loadout-0",
			"loadout-1",
			"loadout-2",
			"loadout-3",
			"loadout-4",
			"loadout-5",
			"loadout-6",
			"loadout-7",
			"loadout-8",
			"loadout-9",
			"loadout-10",
			"loadout-11",
			"loadout-12",
			"loadout-13",
			"loadout-14",
			"loadout-15",
			"loadout-16",
			"loadout-17",
			"loadout-18",
			"loadout-19",
			"loadout-20",
			"loadout-21",
			"loadout-22",
			"loadout-23",
			"loadout-24",
			"loadout-25",
			"loadout-26",
			"loadout-27",
			"loadout-28",
			"loadout-29",
			"loadout-30",
			"loadout-31",
			"loadout-32",
			"loadout-33",
			"loadout-34",
			"loadout-35"
		],
		"Profile2": [
			"loadout-0",
			"loadout-1",
			"loadout-2",
			"loadout-3",
			"loadout-4",
			"loadout-5",
			"loadout-6",
			"loadout-7",
			"loadout-8",
			"loadout-9",
			"loadout-10",
			"loadout-11",
			"loadout-12",
			"loadout-13",
			"loadout-14",
			"loadout-15",
			"loadout-16",
			"loadout-17",
			"loadout-18",
			"loadout-19",
			"loadout-20",
			"loadout-21",
			"loadout-22",
			"loadout-23",
			"loadout-24",
			"loadout-25",
			"loadout-26",
			"loadout-27",
			"loadout-28",
			"loadout-29",
			"loadout-30",
			"loadout-31",
			"loadout-32",
			"loadout-33",
			"loadout-34",
			"loadout-35"
		]
	},
	Version: {
		"Major": 0,
		"Minor": 6,
		"Patch": 36
	}
};
var items_default = /*#__PURE__*/ JSON.parse("[{\"s\":\"ammo.shotgun\",\"n\":\"12 Gauge Buckshot\",\"c\":\"Ammunition\",\"k\":64,\"id\":-1685290200},{\"s\":\"ammo.shotgun.fire\",\"n\":\"12 Gauge Incendiary Shell\",\"c\":\"Ammunition\",\"k\":64,\"id\":-1036635990},{\"s\":\"ammo.shotgun.slug\",\"n\":\"12 Gauge Slug\",\"c\":\"Ammunition\",\"k\":32,\"id\":-727717969},{\"s\":\"ammo.grenadelauncher.he\",\"n\":\"40mm HE Grenade\",\"c\":\"Ammunition\",\"k\":12,\"id\":349762871},{\"s\":\"ammo.grenadelauncher.buckshot\",\"n\":\"40mm Shotgun Round\",\"c\":\"Ammunition\",\"k\":24,\"id\":1055319033},{\"s\":\"ammo.grenadelauncher.smoke\",\"n\":\"40mm Smoke Grenade\",\"c\":\"Ammunition\",\"k\":12,\"id\":915408809},{\"s\":\"ammo.rifle\",\"n\":\"5.56 Rifle Ammo\",\"c\":\"Ammunition\",\"k\":128,\"id\":-1211166256},{\"s\":\"catapult.ammo.bee\",\"n\":\"Bee Catapult Bomb\",\"c\":\"Ammunition\",\"k\":4,\"id\":1954597876},{\"s\":\"arrow.bone\",\"n\":\"Bone Arrow\",\"c\":\"Ammunition\",\"k\":64,\"id\":215754713},{\"s\":\"cannonball\",\"n\":\"Cannonball\",\"c\":\"Ammunition\",\"k\":6,\"id\":-411735114},{\"s\":\"ammo.rifle.explosive\",\"n\":\"Explosive 5.56 Rifle Ammo\",\"c\":\"Ammunition\",\"k\":128,\"id\":-1321651331},{\"s\":\"arrow.fire\",\"n\":\"Fire Arrow\",\"c\":\"Ammunition\",\"k\":64,\"id\":14241751},{\"s\":\"catapult.ammo.incendiary\",\"n\":\"Firebomb\",\"c\":\"Ammunition\",\"k\":4,\"id\":-484006286},{\"s\":\"ammo.mortar.fragment\",\"n\":\"Fragmentation Mortar Shell\",\"c\":\"Ammunition\",\"k\":10,\"id\":-486432631},{\"s\":\"ballista.bolt.hammerhead\",\"n\":\"Hammerhead Bolt\",\"c\":\"Ammunition\",\"k\":3,\"id\":-19318653},{\"s\":\"ammo.handmade.shell\",\"n\":\"Handmade Shell\",\"c\":\"Ammunition\",\"k\":64,\"id\":588596902},{\"s\":\"arrow.hv\",\"n\":\"High Velocity Arrow\",\"c\":\"Ammunition\",\"k\":64,\"id\":-1023065463},{\"s\":\"ammo.rocket.hv\",\"n\":\"High Velocity Rocket\",\"c\":\"Ammunition\",\"k\":3,\"id\":-1841918730},{\"s\":\"ammo.rocket.seeker\",\"n\":\"Homing Missile\",\"c\":\"Ammunition\",\"k\":4,\"id\":1296788329},{\"s\":\"ammo.rifle.hv\",\"n\":\"HV 5.56 Rifle Ammo\",\"c\":\"Ammunition\",\"k\":128,\"id\":1712070256},{\"s\":\"ammo.pistol.hv\",\"n\":\"HV Pistol Ammo\",\"c\":\"Ammunition\",\"k\":128,\"id\":-1691396643},{\"s\":\"dart.incapacitate\",\"n\":\"Incapacitate Dart\",\"c\":\"Ammunition\",\"k\":64,\"id\":-963819285},{\"s\":\"ammo.rifle.incendiary\",\"n\":\"Incendiary 5.56 Rifle Ammo\",\"c\":\"Ammunition\",\"k\":128,\"id\":605467368},{\"s\":\"ballista.bolt.incendiary\",\"n\":\"Incendiary Bolt\",\"c\":\"Ammunition\",\"k\":3,\"id\":-1987565603},{\"s\":\"ammo.pistol.fire\",\"n\":\"Incendiary Pistol Bullet\",\"c\":\"Ammunition\",\"k\":128,\"id\":51984655},{\"s\":\"ammo.rocket.fire\",\"n\":\"Incendiary Rocket\",\"c\":\"Ammunition\",\"k\":3,\"id\":1638322904},{\"s\":\"ammo.rocket.mlrs\",\"n\":\"MLRS Rocket\",\"c\":\"Ammunition\",\"k\":6,\"id\":-1843426638},{\"s\":\"ammo.mortar.basic\",\"n\":\"Mortar Shell\",\"c\":\"Ammunition\",\"k\":10,\"id\":963150711},{\"s\":\"ammo.nailgun.nails\",\"n\":\"Nailgun Nails\",\"c\":\"Ammunition\",\"k\":64,\"id\":-2097376851},{\"s\":\"ammo.paintball\",\"n\":\"Paintball\",\"c\":\"Ammunition\",\"k\":128,\"id\":385645417},{\"s\":\"ballista.bolt.piercer\",\"n\":\"Piercer Bolt\",\"c\":\"Ammunition\",\"k\":3,\"id\":-1127003365},{\"s\":\"ammo.pistol\",\"n\":\"Pistol Bullet\",\"c\":\"Ammunition\",\"k\":128,\"id\":785728077},{\"s\":\"ballista.bolt.pitchfork\",\"n\":\"Pitchfork Bolt\",\"c\":\"Ammunition\",\"k\":3,\"id\":-357442017},{\"s\":\"catapult.ammo.explosive\",\"n\":\"Propane Explosive Bomb\",\"c\":\"Ammunition\",\"k\":4,\"id\":-1827561369},{\"s\":\"dart.radiation\",\"n\":\"Radiation Dart\",\"c\":\"Ammunition\",\"k\":64,\"id\":-594596146},{\"s\":\"ammo.rocket.basic\",\"n\":\"Rocket\",\"c\":\"Ammunition\",\"k\":3,\"id\":-742865266},{\"s\":\"ammo.rocket.sam\",\"n\":\"SAM Ammo\",\"c\":\"Ammunition\",\"k\":1000,\"id\":-384243979},{\"s\":\"dart.scatter\",\"n\":\"Scatter Dart\",\"c\":\"Ammunition\",\"k\":64,\"id\":2036395619},{\"s\":\"catapult.ammo.boulder\",\"n\":\"Scattershot\",\"c\":\"Ammunition\",\"k\":4,\"id\":1831249347},{\"s\":\"ammo.rocket.smoke\",\"n\":\"Smoke Rocket WIP!!!!\",\"c\":\"Ammunition\",\"k\":3,\"id\":-17123659},{\"s\":\"ammo.snowballgun\",\"n\":\"Snowball Gun Ammo\",\"c\":\"Ammunition\",\"k\":128,\"id\":550753330},{\"s\":\"speargun.spear\",\"n\":\"Speargun Spear\",\"c\":\"Ammunition\",\"k\":64,\"id\":-1800345240},{\"s\":\"submarine.torpedo.straight\",\"n\":\"Torpedo\",\"c\":\"Ammunition\",\"k\":100,\"id\":-1671551935},{\"s\":\"dart.wood\",\"n\":\"Wood Dart\",\"c\":\"Ammunition\",\"k\":64,\"id\":-274709858},{\"s\":\"arrow.wooden\",\"n\":\"Wooden Arrow\",\"c\":\"Ammunition\",\"k\":64,\"id\":-1234735557},{\"s\":\"clothing.mannequin\",\"n\":\"#clothingmannequin\",\"c\":\"Attire\",\"k\":1,\"id\":-606898372},{\"s\":\"barrelcostume\",\"n\":\"A Barrel Costume\",\"c\":\"Attire\",\"k\":1,\"id\":-1215166612},{\"s\":\"hazmatsuit.diver\",\"n\":\"Abyss Hazmat\",\"c\":\"Attire\",\"k\":1,\"id\":-797592358},{\"s\":\"hazmatsuit_scientist_arctic\",\"n\":\"Arctic Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":1107575710},{\"s\":\"hazmatsuit.arcticsuit\",\"n\":\"Arctic Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-470439097},{\"s\":\"ballistic.helmet\",\"n\":\"Ballistic helmet\",\"c\":\"Attire\",\"k\":1,\"id\":1127732084},{\"s\":\"ballistic.legarmor\",\"n\":\"Ballistic leg armour\",\"c\":\"Attire\",\"k\":1,\"id\":1983541158},{\"s\":\"ballistic.vest\",\"n\":\"Ballistic vest\",\"c\":\"Attire\",\"k\":1,\"id\":-1780402255},{\"s\":\"mask.bandana\",\"n\":\"Bandana Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-702051347},{\"s\":\"attire.banditguard\",\"n\":\"Bandit Guard Gear\",\"c\":\"Attire\",\"k\":1,\"id\":-1622110948},{\"s\":\"hat.cap\",\"n\":\"Baseball Cap\",\"c\":\"Attire\",\"k\":1,\"id\":-1022661119},{\"s\":\"horse.shoes.basic\",\"n\":\"Basic Horse Shoes\",\"c\":\"Attire\",\"k\":1,\"id\":-1211268013},{\"s\":\"bdu.pants\",\"n\":\"BDU pants\",\"c\":\"Attire\",\"k\":1,\"id\":1468749025},{\"s\":\"bdu.shirt\",\"n\":\"BDU shirt\",\"c\":\"Attire\",\"k\":1,\"id\":-2127311451},{\"s\":\"hat.beenie\",\"n\":\"Beenie Hat\",\"c\":\"Attire\",\"k\":1,\"id\":1675639563},{\"s\":\"hat.candle.birthday\",\"n\":\"Birthday Candle Hat\",\"c\":\"Attire\",\"k\":1,\"id\":1633553557},{\"s\":\"jumpsuit.suit.blue\",\"n\":\"Blue Jumpsuit\",\"c\":\"Attire\",\"k\":1,\"id\":1601468620},{\"s\":\"bone.armor.suit\",\"n\":\"Bone Armor\",\"c\":\"Attire\",\"k\":1,\"id\":1746956556},{\"s\":\"deer.skull.mask\",\"n\":\"Bone Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":-1903165497},{\"s\":\"hat.boonie\",\"n\":\"Boonie Hat\",\"c\":\"Attire\",\"k\":1,\"id\":-23994173},{\"s\":\"shoes.boots\",\"n\":\"Boots\",\"c\":\"Attire\",\"k\":1,\"id\":-1549739227},{\"s\":\"bucket.helmet\",\"n\":\"Bucket Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":850280505},{\"s\":\"bunny.suit\",\"n\":\"Bunny Costume\",\"c\":\"Attire\",\"k\":1,\"id\":1285226495},{\"s\":\"attire.bunnyears\",\"n\":\"Bunny Ears\",\"c\":\"Attire\",\"k\":1,\"id\":-1004426654},{\"s\":\"hat.bunnyhat\",\"n\":\"Bunny Hat\",\"c\":\"Attire\",\"k\":1,\"id\":23391694},{\"s\":\"attire.bunny.onesie\",\"n\":\"Bunny Onesie\",\"c\":\"Attire\",\"k\":1,\"id\":-1266045928},{\"s\":\"burlap.gloves.new\",\"n\":\"Burlap Gloves\",\"c\":\"Attire\",\"k\":1,\"id\":21402876},{\"s\":\"burlap.headwrap\",\"n\":\"Burlap Headwrap\",\"c\":\"Attire\",\"k\":1,\"id\":1877339384},{\"s\":\"burlap.shirt\",\"n\":\"Burlap Shirt\",\"c\":\"Attire\",\"k\":1,\"id\":602741290},{\"s\":\"burlap.shoes\",\"n\":\"Burlap Shoes\",\"c\":\"Attire\",\"k\":1,\"id\":-761829530},{\"s\":\"burlap.trousers\",\"n\":\"Burlap Trousers\",\"c\":\"Attire\",\"k\":1,\"id\":1992974553},{\"s\":\"hat.candle\",\"n\":\"Candle Hat\",\"c\":\"Attire\",\"k\":1,\"id\":1714496074},{\"s\":\"movembermoustachecard\",\"n\":\"Card Movember Moustache\",\"c\":\"Attire\",\"k\":1,\"id\":3380160},{\"s\":\"chicken.costume\",\"n\":\"Chicken Costume\",\"c\":\"Attire\",\"k\":1,\"id\":-152332823},{\"s\":\"clatter.helmet\",\"n\":\"Clatter Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":968019378},{\"s\":\"cocoknight.armor.torso\",\"n\":\"Coconut Armor Chestplate\",\"c\":\"Attire\",\"k\":1,\"id\":1426097945},{\"s\":\"cocoknight.armor.gloves\",\"n\":\"Coconut Armor Gloves\",\"c\":\"Attire\",\"k\":1,\"id\":1873004466},{\"s\":\"cocoknight.armor.helmet\",\"n\":\"Coconut Armor Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":-582467439},{\"s\":\"cocoknight.armor.pants\",\"n\":\"Coconut Armor Pants\",\"c\":\"Attire\",\"k\":1,\"id\":507284030},{\"s\":\"coffeecan.helmet\",\"n\":\"Coffee Can Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":-803263829},{\"s\":\"cratecostume\",\"n\":\"Crate Costume\",\"c\":\"Attire\",\"k\":1,\"id\":1189981699},{\"s\":\"diving.fins\",\"n\":\"Diving Fins\",\"c\":\"Attire\",\"k\":1,\"id\":296519935},{\"s\":\"diving.mask\",\"n\":\"Diving Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-113413047},{\"s\":\"diving.tank\",\"n\":\"Diving Tank\",\"c\":\"Attire\",\"k\":1,\"id\":-2022172587},{\"s\":\"diving.tank.double\",\"n\":\"Double Diving Tank\",\"c\":\"Attire\",\"k\":1,\"id\":-1559420426},{\"s\":\"horse.saddle.double\",\"n\":\"Double Horse Saddle\",\"c\":\"Attire\",\"k\":1,\"id\":-1323101799},{\"s\":\"draculacape\",\"n\":\"Dracula Cape\",\"c\":\"Attire\",\"k\":1,\"id\":-258574361},{\"s\":\"draculamask\",\"n\":\"Dracula Mask\",\"c\":\"Attire\",\"k\":1,\"id\":1865253052},{\"s\":\"hat.dragonmask\",\"n\":\"Dragon Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-22883916},{\"s\":\"attire.egg.suit\",\"n\":\"Egg Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-747743875},{\"s\":\"frankensteinmask\",\"n\":\"Frankenstein Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-1647389398},{\"s\":\"boots.frog\",\"n\":\"Frog Boots\",\"c\":\"Attire\",\"k\":1,\"id\":-1000573653},{\"s\":\"hazmatsuit.frontier\",\"n\":\"Frontier Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-105415879},{\"s\":\"hat.gas.mask\",\"n\":\"Gas Mask\",\"c\":\"Attire\",\"k\":1,\"id\":1659114910},{\"s\":\"ghostsheet\",\"n\":\"Ghost Costume\",\"c\":\"Attire\",\"k\":1,\"id\":-1043618880},{\"s\":\"gingerbreadsuit\",\"n\":\"Gingerbread Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-558880549},{\"s\":\"gloweyes\",\"n\":\"Glowing Eyes\",\"c\":\"Attire\",\"k\":1,\"id\":-690276911},{\"s\":\"hazmatsuit\",\"n\":\"Hazmat Suit\",\"c\":\"Attire\",\"k\":1,\"id\":1266491000},{\"s\":\"twitch.headset\",\"n\":\"Headset\",\"c\":\"Attire\",\"k\":1,\"id\":-1569700847},{\"s\":\"frankensteins.monster.03.head\",\"n\":\"Heavy Frankenstein Head\",\"c\":\"Attire\",\"k\":1,\"id\":-297099594},{\"s\":\"frankensteins.monster.03.legs\",\"n\":\"Heavy Frankenstein Legs\",\"c\":\"Attire\",\"k\":1,\"id\":-2024549027},{\"s\":\"frankensteins.monster.03.torso\",\"n\":\"Heavy Frankenstein Torso\",\"c\":\"Attire\",\"k\":1,\"id\":1614528785},{\"s\":\"heavy.plate.helmet\",\"n\":\"Heavy Plate Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":1181207482},{\"s\":\"heavy.plate.jacket\",\"n\":\"Heavy Plate Jacket\",\"c\":\"Attire\",\"k\":1,\"id\":-1102429027},{\"s\":\"heavy.plate.pants\",\"n\":\"Heavy Plate Pants\",\"c\":\"Attire\",\"k\":1,\"id\":-1778159885},{\"s\":\"scientistsuit_heavy\",\"n\":\"Heavy Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-1772746857},{\"s\":\"attire.hide.boots\",\"n\":\"Hide Boots\",\"c\":\"Attire\",\"k\":1,\"id\":794356786},{\"s\":\"attire.hide.helterneck\",\"n\":\"Hide Halterneck\",\"c\":\"Attire\",\"k\":1,\"id\":3222790},{\"s\":\"attire.hide.pants\",\"n\":\"Hide Pants\",\"c\":\"Attire\",\"k\":1,\"id\":1722154847},{\"s\":\"attire.hide.poncho\",\"n\":\"Hide Poncho\",\"c\":\"Attire\",\"k\":1,\"id\":980333378},{\"s\":\"attire.hide.skirt\",\"n\":\"Hide Skirt\",\"c\":\"Attire\",\"k\":1,\"id\":-1773144852},{\"s\":\"attire.hide.vest\",\"n\":\"Hide Vest\",\"c\":\"Attire\",\"k\":1,\"id\":196700171},{\"s\":\"horse.shoes.advanced\",\"n\":\"High Quality Horse Shoes\",\"c\":\"Attire\",\"k\":1,\"id\":1989785143},{\"s\":\"metal.facemask.hockey\",\"n\":\"Hockey Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-1334569149},{\"s\":\"hoodie\",\"n\":\"Hoodie\",\"c\":\"Attire\",\"k\":1,\"id\":1751045826},{\"s\":\"horse.costume\",\"n\":\"Horse Costume\",\"c\":\"Attire\",\"k\":1,\"id\":1420547167},{\"s\":\"hat.horsemask\",\"n\":\"Horse Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-418359052},{\"s\":\"horse.saddle\",\"n\":\"Horse Saddle\",\"c\":\"Attire\",\"k\":1,\"id\":-1997543660},{\"s\":\"hab.armor\",\"n\":\"Hot Air Balloon Armor\",\"c\":\"Attire\",\"k\":1,\"id\":-1989600732},{\"s\":\"metal.plate.torso.icevest\",\"n\":\"Ice Metal Chest Plate\",\"c\":\"Attire\",\"k\":1,\"id\":-1478855279},{\"s\":\"metal.facemask.icemask\",\"n\":\"Ice Metal Facemask\",\"c\":\"Attire\",\"k\":1,\"id\":110116923},{\"s\":\"mask.balaclava\",\"n\":\"Improvised Balaclava\",\"c\":\"Attire\",\"k\":1,\"id\":-2012470695},{\"s\":\"improvised.shield\",\"n\":\"Improvised Shield\",\"c\":\"Attire\",\"k\":1,\"id\":196784377},{\"s\":\"jacket\",\"n\":\"Jacket\",\"c\":\"Attire\",\"k\":1,\"id\":-1163532624},{\"s\":\"jumpsuit.suit\",\"n\":\"Jumpsuit\",\"c\":\"Attire\",\"k\":1,\"id\":-97459906},{\"s\":\"hazmatsuit.kick\",\"n\":\"KICK Hazmat\",\"c\":\"Attire\",\"k\":1,\"id\":972302244},{\"s\":\"knighttorso.armour\",\"n\":\"Knights armour cuirass\",\"c\":\"Attire\",\"k\":1,\"id\":547862680},{\"s\":\"knightsarmour.helmet\",\"n\":\"Knights armour helmet\",\"c\":\"Attire\",\"k\":1,\"id\":-427072335},{\"s\":\"knightsarmour.skirt\",\"n\":\"Knights armour skirt plates\",\"c\":\"Attire\",\"k\":1,\"id\":-945708533},{\"s\":\"hazmat.krieg\",\"n\":\"Krieg Hazmat\",\"c\":\"Attire\",\"k\":1,\"id\":-902423513},{\"s\":\"kriegbackpack\",\"n\":\"Krieg Large Backpack\",\"c\":\"Attire\",\"k\":1,\"id\":-874650016},{\"s\":\"largebackpack\",\"n\":\"Large Backpack\",\"c\":\"Attire\",\"k\":1,\"id\":-907422733},{\"s\":\"burlap.gloves\",\"n\":\"Leather Gloves\",\"c\":\"Attire\",\"k\":1,\"id\":1366282552},{\"s\":\"frankensteins.monster.01.head\",\"n\":\"Light Frankenstein Head\",\"c\":\"Attire\",\"k\":1,\"id\":-134959124},{\"s\":\"frankensteins.monster.01.legs\",\"n\":\"Light Frankenstein Legs\",\"c\":\"Attire\",\"k\":1,\"id\":106959911},{\"s\":\"frankensteins.monster.01.torso\",\"n\":\"Light Frankenstein Torso\",\"c\":\"Attire\",\"k\":1,\"id\":-1624770297},{\"s\":\"tshirt.long\",\"n\":\"Longsleeve T-Shirt\",\"c\":\"Attire\",\"k\":1,\"id\":935692442},{\"s\":\"lumberjack hoodie\",\"n\":\"Lumberjack Hoodie\",\"c\":\"Attire\",\"k\":1,\"id\":-763071910},{\"s\":\"hazmatsuit.lumberjack\",\"n\":\"Lumberjack Suit\",\"c\":\"Attire\",\"k\":1,\"id\":861513346},{\"s\":\"horse.armor.lny26\",\"n\":\"Lunar New Year Horse Armor\",\"c\":\"Attire\",\"k\":1,\"id\":-2068194497},{\"s\":\"frankensteins.monster.02.head\",\"n\":\"Medium Frankenstein Head\",\"c\":\"Attire\",\"k\":1,\"id\":-1732475823},{\"s\":\"frankensteins.monster.02.legs\",\"n\":\"Medium Frankenstein Legs\",\"c\":\"Attire\",\"k\":1,\"id\":835042040},{\"s\":\"frankensteins.monster.02.torso\",\"n\":\"Medium Frankenstein Torso\",\"c\":\"Attire\",\"k\":1,\"id\":1491753484},{\"s\":\"metal.plate.torso\",\"n\":\"Metal Chest Plate\",\"c\":\"Attire\",\"k\":1,\"id\":1110385766},{\"s\":\"metal.facemask\",\"n\":\"Metal Facemask\",\"c\":\"Attire\",\"k\":1,\"id\":-194953424},{\"s\":\"metal.shield\",\"n\":\"Metal Shield\",\"c\":\"Attire\",\"k\":1,\"id\":625599716},{\"s\":\"hat.miner\",\"n\":\"Miners Hat\",\"c\":\"Attire\",\"k\":1,\"id\":-1539025626},{\"s\":\"minigunammopack\",\"n\":\"Minigun Ammo Pack\",\"c\":\"Attire\",\"k\":1,\"id\":355877490},{\"s\":\"movembermoustache\",\"n\":\"Movember Moustache\",\"c\":\"Attire\",\"k\":1,\"id\":-2047081330},{\"s\":\"mummymask\",\"n\":\"Mummy Mask\",\"c\":\"Attire\",\"k\":1,\"id\":809689733},{\"s\":\"halloween.mummysuit\",\"n\":\"Mummy Suit\",\"c\":\"Attire\",\"k\":1,\"id\":277730763},{\"s\":\"hazmatsuit_scientist_naval\",\"n\":\"Naval Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-1937799374},{\"s\":\"attire.nesthat\",\"n\":\"Nest Hat\",\"c\":\"Attire\",\"k\":1,\"id\":1081315464},{\"s\":\"nightvisiongoggles\",\"n\":\"Night Vision Goggles\",\"c\":\"Attire\",\"k\":1,\"id\":-1518883088},{\"s\":\"attire.ninja.suit\",\"n\":\"Ninja Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-1506417026},{\"s\":\"hazmatsuit.nomadsuit\",\"n\":\"Nomad Suit\",\"c\":\"Attire\",\"k\":1,\"id\":491263800},{\"s\":\"hazmatsuit_scientist_nvgm\",\"n\":\"NVGM Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":86840834},{\"s\":\"oubreak_scientist\",\"n\":\"Outbreak Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-2133781216},{\"s\":\"hat.oxmask\",\"n\":\"Ox Mask\",\"c\":\"Attire\",\"k\":1,\"id\":1315082560},{\"s\":\"paintballoveralls.suit\",\"n\":\"Paintball Overalls\",\"c\":\"Attire\",\"k\":1,\"id\":-1014934560},{\"s\":\"pants\",\"n\":\"Pants\",\"c\":\"Attire\",\"k\":1,\"id\":237239288},{\"s\":\"parachute\",\"n\":\"Parachute\",\"c\":\"Attire\",\"k\":1,\"id\":602628465},{\"s\":\"parachute.deployed\",\"n\":\"Parachute (Deployed)\",\"c\":\"Attire\",\"k\":1,\"id\":1784005657},{\"s\":\"partyhat\",\"n\":\"Party Hat\",\"c\":\"Attire\",\"k\":1,\"id\":-575744869},{\"s\":\"hazmatsuit.pilot\",\"n\":\"Pilot Hazmat\",\"c\":\"Attire\",\"k\":1,\"id\":1065594600},{\"s\":\"prisonerhood\",\"n\":\"Prisoner Hood\",\"c\":\"Attire\",\"k\":1,\"id\":-892718768},{\"s\":\"twitchsunglasses\",\"n\":\"Purple Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":20489901},{\"s\":\"hat.rabbitmask\",\"n\":\"Rabbit Mask\",\"c\":\"Attire\",\"k\":1,\"id\":-986782031},{\"s\":\"hat.ratmask\",\"n\":\"Rat Mask\",\"c\":\"Attire\",\"k\":1,\"id\":271048478},{\"s\":\"attire.reindeer.headband\",\"n\":\"Reindeer Antlers\",\"c\":\"Attire\",\"k\":1,\"id\":-324675402},{\"s\":\"reinforced.wooden.shield\",\"n\":\"Reinforced Wooden Shield\",\"c\":\"Attire\",\"k\":1,\"id\":969768382},{\"s\":\"riot.helmet\",\"n\":\"Riot Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":671063303},{\"s\":\"roadsign.gloves\",\"n\":\"Road Sign Gloves\",\"c\":\"Attire\",\"k\":1,\"id\":-699558439},{\"s\":\"roadsign.jacket\",\"n\":\"Road Sign Jacket\",\"c\":\"Attire\",\"k\":1,\"id\":-2002277461},{\"s\":\"roadsign.kilt\",\"n\":\"Road Sign Kilt\",\"c\":\"Attire\",\"k\":1,\"id\":1850456855},{\"s\":\"horse.armor.roadsign\",\"n\":\"Roadsign Horse Armor\",\"c\":\"Attire\",\"k\":1,\"id\":60528587},{\"s\":\"horse.saddlebag\",\"n\":\"Saddle bag\",\"c\":\"Attire\",\"k\":1,\"id\":1400460850},{\"s\":\"santabeard\",\"n\":\"Santa Beard\",\"c\":\"Attire\",\"k\":1,\"id\":2126889441},{\"s\":\"santahat\",\"n\":\"Santa Hat\",\"c\":\"Attire\",\"k\":1,\"id\":-575483084},{\"s\":\"scarecrow.suit\",\"n\":\"Scarecrow Suit\",\"c\":\"Attire\",\"k\":1,\"id\":273951840},{\"s\":\"scarecrowhead\",\"n\":\"Scarecrow Wrap\",\"c\":\"Attire\",\"k\":1,\"id\":809942731},{\"s\":\"hazmatsuit_scientist\",\"n\":\"Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-253079493},{\"s\":\"hazmatsuit_scientist_peacekeeper\",\"n\":\"Scientist Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-1958316066},{\"s\":\"shirt.collared\",\"n\":\"Shirt\",\"c\":\"Attire\",\"k\":1,\"id\":-2025184684},{\"s\":\"pants.shorts\",\"n\":\"Shorts\",\"c\":\"Attire\",\"k\":1,\"id\":-1695367501},{\"s\":\"silly.horse.mask\",\"n\":\"Silly Horse Mask\",\"c\":\"Attire\",\"k\":1,\"id\":1849409072},{\"s\":\"horse.saddle.single\",\"n\":\"Single Horse Saddle\",\"c\":\"Attire\",\"k\":1,\"id\":1559915778},{\"s\":\"smallbackpack\",\"n\":\"Small Backpack\",\"c\":\"Attire\",\"k\":1,\"id\":2068884361},{\"s\":\"hat.snakemask\",\"n\":\"Snake mask\",\"c\":\"Attire\",\"k\":1,\"id\":-1314079879},{\"s\":\"jacket.snow\",\"n\":\"Snow Jacket\",\"c\":\"Attire\",\"k\":1,\"id\":-48090175},{\"s\":\"attire.snowman.helmet\",\"n\":\"Snowman Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":-842267147},{\"s\":\"hazmatsuit.spacesuit\",\"n\":\"Space Suit\",\"c\":\"Attire\",\"k\":1,\"id\":-560304835},{\"s\":\"sunglasses\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":352321488},{\"s\":\"sunglasses02black\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":1258768145},{\"s\":\"sunglasses02camo\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":-2103694546},{\"s\":\"sunglasses02red\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":1557173737},{\"s\":\"sunglasses03black\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":-176608084},{\"s\":\"sunglasses03chrome\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":-1997698639},{\"s\":\"sunglasses03gold\",\"n\":\"Sunglasses\",\"c\":\"Attire\",\"k\":1,\"id\":-1408336705},{\"s\":\"halloween.surgeonsuit\",\"n\":\"Surgeon Scrubs\",\"c\":\"Attire\",\"k\":1,\"id\":-1785231475},{\"s\":\"tshirt\",\"n\":\"T-Shirt\",\"c\":\"Attire\",\"k\":1,\"id\":223891266},{\"s\":\"tactical.gloves\",\"n\":\"Tactical Gloves\",\"c\":\"Attire\",\"k\":1,\"id\":-1108136649},{\"s\":\"shirt.tanktop\",\"n\":\"Tank Top\",\"c\":\"Attire\",\"k\":1,\"id\":1608640313},{\"s\":\"hat.tigermask\",\"n\":\"Tiger Mask\",\"c\":\"Attire\",\"k\":1,\"id\":709206314},{\"s\":\"twitchrivalsflag\",\"n\":\"Twitch Rivals Flag\",\"c\":\"Attire\",\"k\":1,\"id\":-739993590},{\"s\":\"hazmatsuittwitch\",\"n\":\"Twitch Rivals Hazmat Suit\",\"c\":\"Attire\",\"k\":1,\"id\":468313189},{\"s\":\"jumpsuit.waterwellnpc\",\"n\":\"Waterwell NPC Jumpsuit\",\"c\":\"Attire\",\"k\":1,\"id\":-874908751},{\"s\":\"hat.wellipets\",\"n\":\"Wellipets Hat\",\"c\":\"Attire\",\"k\":1,\"id\":-507248640},{\"s\":\"diving.wetsuit\",\"n\":\"Wetsuit\",\"c\":\"Attire\",\"k\":1,\"id\":-1101924344},{\"s\":\"hat.wolf\",\"n\":\"Wolf Headdress\",\"c\":\"Attire\",\"k\":1,\"id\":-1478212975},{\"s\":\"woodarmor.gloves\",\"n\":\"Wood Armor Gloves\",\"c\":\"Attire\",\"k\":1,\"id\":-459159118},{\"s\":\"wood.armor.helmet\",\"n\":\"Wood Armor Helmet\",\"c\":\"Attire\",\"k\":1,\"id\":-2094954543},{\"s\":\"wood.armor.pants\",\"n\":\"Wood Armor Pants\",\"c\":\"Attire\",\"k\":1,\"id\":832133926},{\"s\":\"wood.armor.jacket\",\"n\":\"Wood Chestplate\",\"c\":\"Attire\",\"k\":1,\"id\":418081930},{\"s\":\"horse.armor.wood\",\"n\":\"Wooden Horse Armor\",\"c\":\"Attire\",\"k\":1,\"id\":1659447559},{\"s\":\"wooden.shield\",\"n\":\"Wooden Shield\",\"c\":\"Attire\",\"k\":1,\"id\":1604837581},{\"s\":\"workbench.upgrade.accelerated\",\"n\":\"Accelerated Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":798382300},{\"s\":\"advancedblueprintfragment\",\"n\":\"Advanced Blueprint Fragment\",\"c\":\"Component\",\"k\":100,\"id\":-1896395719},{\"s\":\"aiming.module.mlrs\",\"n\":\"Aiming Module\",\"c\":\"Component\",\"k\":1,\"id\":343045591},{\"s\":\"vehicle.1mod.cockpit.armored\",\"n\":\"Armored Cockpit Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":1874610722},{\"s\":\"vehicle.1mod.passengers.armored\",\"n\":\"Armored Passenger Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":-1615281216},{\"s\":\"basicblueprintfragment\",\"n\":\"Basic Blueprint Fragment\",\"c\":\"Component\",\"k\":100,\"id\":-143481979},{\"s\":\"bleach\",\"n\":\"Bleach\",\"c\":\"Component\",\"k\":20,\"id\":1553078977},{\"s\":\"weapon.mod.burstmodule\",\"n\":\"Burst Module\",\"c\":\"Component\",\"k\":1,\"id\":838308300},{\"s\":\"vehicle.2mod.camper\",\"n\":\"Camper Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":-1040518150},{\"s\":\"vehicle.1mod.cockpit\",\"n\":\"Cockpit Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":-1501451746},{\"s\":\"vehicle.1mod.cockpit.with.engine\",\"n\":\"Cockpit With Engine Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":170758448},{\"s\":\"workbench.upgrade.comfort\",\"n\":\"Comfort Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":-770390391},{\"s\":\"workbench.upgrade.defensive\",\"n\":\"Defensive Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":-1953279770},{\"s\":\"ducttape\",\"n\":\"Duct Tape\",\"c\":\"Component\",\"k\":20,\"id\":1401987718},{\"s\":\"workbench.upgrade.efficiency\",\"n\":\"Efficiency Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":1215602244},{\"s\":\"fuse\",\"n\":\"Electric Fuse\",\"c\":\"Component\",\"k\":10,\"id\":-629028935},{\"s\":\"propanetank\",\"n\":\"Empty Propane Tank\",\"c\":\"Component\",\"k\":20,\"id\":-1673693549},{\"s\":\"vehicle.1mod.engine\",\"n\":\"Engine Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":1559779253},{\"s\":\"vehicle.1mod.flatbed\",\"n\":\"Flatbed Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":-1880231361},{\"s\":\"vehicle.2mod.fuel.tank\",\"n\":\"Fuel Tank Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":1186655046},{\"s\":\"gears\",\"n\":\"Gears\",\"c\":\"Component\",\"k\":20,\"id\":479143914},{\"s\":\"vehicle.chassis\",\"n\":\"Generic vehicle chassis\",\"c\":\"Component\",\"k\":1,\"id\":1770744540},{\"s\":\"vehicle.module\",\"n\":\"Generic vehicle module\",\"c\":\"Component\",\"k\":1,\"id\":878301596},{\"s\":\"glue\",\"n\":\"Glue\",\"c\":\"Component\",\"k\":10,\"id\":-1899491405},{\"s\":\"fuse.highgrade\",\"n\":\"Heavy Fuse\",\"c\":\"Component\",\"k\":3,\"id\":-945548410},{\"s\":\"carburetor3\",\"n\":\"High Quality Carburetor\",\"c\":\"Component\",\"k\":5,\"id\":656371026},{\"s\":\"crankshaft3\",\"n\":\"High Quality Crankshaft\",\"c\":\"Component\",\"k\":5,\"id\":1158340332},{\"s\":\"piston3\",\"n\":\"High Quality Pistons\",\"c\":\"Component\",\"k\":10,\"id\":1883981800},{\"s\":\"sparkplug3\",\"n\":\"High Quality Spark Plugs\",\"c\":\"Component\",\"k\":20,\"id\":1072924620},{\"s\":\"valve3\",\"n\":\"High Quality Valves\",\"c\":\"Component\",\"k\":15,\"id\":-1802083073},{\"s\":\"vehicle.chassis.4mod\",\"n\":\"Large Chassis\",\"c\":\"Component\",\"k\":1,\"id\":-44066790},{\"s\":\"vehicle.2mod.flatbed\",\"n\":\"Large Flatbed Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":-1693832478},{\"s\":\"carburetor1\",\"n\":\"Low Quality Carburetor\",\"c\":\"Component\",\"k\":5,\"id\":656371028},{\"s\":\"crankshaft1\",\"n\":\"Low Quality Crankshaft\",\"c\":\"Component\",\"k\":5,\"id\":1158340334},{\"s\":\"piston1\",\"n\":\"Low Quality Pistons\",\"c\":\"Component\",\"k\":10,\"id\":1883981798},{\"s\":\"sparkplug1\",\"n\":\"Low Quality Spark Plugs\",\"c\":\"Component\",\"k\":20,\"id\":-89874794},{\"s\":\"valve1\",\"n\":\"Low Quality Valves\",\"c\":\"Component\",\"k\":15,\"id\":1330084809},{\"s\":\"vehicle.chassis.3mod\",\"n\":\"Medium Chassis\",\"c\":\"Component\",\"k\":1,\"id\":-44066823},{\"s\":\"carburetor2\",\"n\":\"Medium Quality Carburetor\",\"c\":\"Component\",\"k\":5,\"id\":656371027},{\"s\":\"crankshaft2\",\"n\":\"Medium Quality Crankshaft\",\"c\":\"Component\",\"k\":5,\"id\":1158340331},{\"s\":\"piston2\",\"n\":\"Medium Quality Pistons\",\"c\":\"Component\",\"k\":10,\"id\":1883981801},{\"s\":\"sparkplug2\",\"n\":\"Medium Quality Spark Plugs\",\"c\":\"Component\",\"k\":20,\"id\":-493159321},{\"s\":\"valve2\",\"n\":\"Medium Quality Valves\",\"c\":\"Component\",\"k\":15,\"id\":926800282},{\"s\":\"metalblade\",\"n\":\"Metal Blade\",\"c\":\"Component\",\"k\":20,\"id\":1882709339},{\"s\":\"metalpipe\",\"n\":\"Metal Pipe\",\"c\":\"Component\",\"k\":20,\"id\":95950017},{\"s\":\"metalspring\",\"n\":\"Metal Spring\",\"c\":\"Component\",\"k\":20,\"id\":-1021495308},{\"s\":\"vehicle.2mod.passengers\",\"n\":\"Passenger Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":895374329},{\"s\":\"workbench.upgrade.prototype\",\"n\":\"Prototype Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":-180862419},{\"s\":\"workbench.upgrade.range\",\"n\":\"Range Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":1470387662},{\"s\":\"vehicle.1mod.rear.seats\",\"n\":\"Rear Seats Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":1376065505},{\"s\":\"workbench.upgrade.recyclebin\",\"n\":\"Recycle Bin Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":-286541059},{\"s\":\"workbench.upgrade.reinforced\",\"n\":\"Reinforced Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":112268546},{\"s\":\"riflebody\",\"n\":\"Rifle Body\",\"c\":\"Component\",\"k\":10,\"id\":176787552},{\"s\":\"roadsigns\",\"n\":\"Road Signs\",\"c\":\"Component\",\"k\":20,\"id\":1199391518},{\"s\":\"rope\",\"n\":\"Rope\",\"c\":\"Component\",\"k\":50,\"id\":1414245522},{\"s\":\"workbench.upgrade.salvage\",\"n\":\"Salvage Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":-160105346},{\"s\":\"semibody\",\"n\":\"Semi Automatic Body\",\"c\":\"Component\",\"k\":10,\"id\":573926264},{\"s\":\"sewingkit\",\"n\":\"Sewing Kit\",\"c\":\"Component\",\"k\":20,\"id\":1234880403},{\"s\":\"sheetmetal\",\"n\":\"Sheet Metal\",\"c\":\"Component\",\"k\":20,\"id\":-1994909036},{\"s\":\"vehicle.chassis.2mod\",\"n\":\"Small Chassis\",\"c\":\"Component\",\"k\":1,\"id\":-44066600},{\"s\":\"smgbody\",\"n\":\"SMG Body\",\"c\":\"Component\",\"k\":10,\"id\":1230323789},{\"s\":\"sticks\",\"n\":\"Sticks\",\"c\":\"Component\",\"k\":100,\"id\":642482233},{\"s\":\"vehicle.1mod.storage\",\"n\":\"Storage Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":268565518},{\"s\":\"workbench.upgrade.surplus\",\"n\":\"Surplus Workbench Upgrade\",\"c\":\"Component\",\"k\":1,\"id\":-1536343135},{\"s\":\"tarp\",\"n\":\"Tarp\",\"c\":\"Component\",\"k\":20,\"id\":2019042823},{\"s\":\"vehicle.1mod.taxi\",\"n\":\"Taxi Vehicle Module\",\"c\":\"Component\",\"k\":1,\"id\":-626174997},{\"s\":\"techparts\",\"n\":\"Tech Trash\",\"c\":\"Component\",\"k\":50,\"id\":73681876},{\"s\":\"thruster.module\",\"n\":\"Thruster Module\",\"c\":\"Component\",\"k\":1,\"id\":1754952075},{\"s\":\"door.hinged.toptier\",\"n\":\"Armored Door\",\"c\":\"Construction\",\"k\":1,\"id\":1353298668},{\"s\":\"door.double.hinged.toptier\",\"n\":\"Armored Double Door\",\"c\":\"Construction\",\"k\":1,\"id\":1221063409},{\"s\":\"floor.ladder.hatch.toptier\",\"n\":\"Armored Ladder Hatch\",\"c\":\"Construction\",\"k\":1,\"id\":607785075},{\"s\":\"floor.triangle.ladder.hatch.toptier\",\"n\":\"Armored Triangle Ladder Hatch\",\"c\":\"Construction\",\"k\":1,\"id\":-478923685},{\"s\":\"barricade.woodwire\",\"n\":\"Barbed Wooden Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":1382263453},{\"s\":\"beehive\",\"n\":\"Beehive\",\"c\":\"Construction\",\"k\":1,\"id\":184516676},{\"s\":\"boat.planner\",\"n\":\"Boat Building Plan\",\"c\":\"Construction\",\"k\":1,\"id\":-321247698},{\"s\":\"building.planner\",\"n\":\"Building Plan\",\"c\":\"Construction\",\"k\":1,\"id\":1525520776},{\"s\":\"wall.frame.fence\",\"n\":\"Chainlink Fence\",\"c\":\"Construction\",\"k\":10,\"id\":-1117626326},{\"s\":\"wall.frame.fence.gate\",\"n\":\"Chainlink Fence Gate\",\"c\":\"Construction\",\"k\":1,\"id\":1451568081},{\"s\":\"lock.code\",\"n\":\"Code Lock\",\"c\":\"Construction\",\"k\":10,\"id\":1159991980},{\"s\":\"barricade.concrete\",\"n\":\"Concrete Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":-1950721390},{\"s\":\"door.closer\",\"n\":\"Door Closer\",\"c\":\"Construction\",\"k\":1,\"id\":1409529282},{\"s\":\"factorydoor\",\"n\":\"Factory Door\",\"c\":\"Construction\",\"k\":1,\"id\":2054391128},{\"s\":\"lock.code.a.pilot\",\"n\":\"Flight Control Codelock\",\"c\":\"Construction\",\"k\":10,\"id\":1586884551},{\"s\":\"floor.grill\",\"n\":\"Floor grill\",\"c\":\"Construction\",\"k\":10,\"id\":936496778},{\"s\":\"floor.triangle.grill\",\"n\":\"Floor triangle grill\",\"c\":\"Construction\",\"k\":10,\"id\":1983621560},{\"s\":\"wall.frame.garagedoor\",\"n\":\"Garage Door\",\"c\":\"Construction\",\"k\":1,\"id\":-148794216},{\"s\":\"gates.external.high.adobe\",\"n\":\"High External Adobe Gate\",\"c\":\"Construction\",\"k\":1,\"id\":-401905610},{\"s\":\"wall.external.high.adobe\",\"n\":\"High External Adobe Wall\",\"c\":\"Construction\",\"k\":10,\"id\":756890702},{\"s\":\"gates.external.high.legacy\",\"n\":\"High External Legacy Gate\",\"c\":\"Construction\",\"k\":1,\"id\":-1442339204},{\"s\":\"wall.external.high.legacy\",\"n\":\"High External Legacy Wall\",\"c\":\"Construction\",\"k\":10,\"id\":-1993883724},{\"s\":\"gates.external.high.stone\",\"n\":\"High External Stone Gate\",\"c\":\"Construction\",\"k\":1,\"id\":-691113464},{\"s\":\"wall.external.high.stone\",\"n\":\"High External Stone Wall\",\"c\":\"Construction\",\"k\":10,\"id\":-967648160},{\"s\":\"gates.external.high.wood\",\"n\":\"High External Wooden Gate\",\"c\":\"Construction\",\"k\":1,\"id\":-335089230},{\"s\":\"wall.external.high\",\"n\":\"High External Wooden Wall\",\"c\":\"Construction\",\"k\":10,\"id\":99588025},{\"s\":\"wall.external.high.ice\",\"n\":\"High Ice Wall\",\"c\":\"Construction\",\"k\":10,\"id\":-985781766},{\"s\":\"door.hinged.industrial.a\",\"n\":\"Industrial Door\",\"c\":\"Construction\",\"k\":1,\"id\":818733919},{\"s\":\"industrial.garagedoor\",\"n\":\"Industrial Garage Door\",\"c\":\"Construction\",\"k\":1,\"id\":346569548},{\"s\":\"lock.key\",\"n\":\"Key Lock\",\"c\":\"Construction\",\"k\":10,\"id\":-850982208},{\"s\":\"floor.ladder.hatch\",\"n\":\"Ladder Hatch\",\"c\":\"Construction\",\"k\":1,\"id\":1948067030},{\"s\":\"water.catcher.large\",\"n\":\"Large Water Catcher\",\"c\":\"Construction\",\"k\":1,\"id\":-1100168350},{\"s\":\"legacy.shelter.wood\",\"n\":\"Legacy Wood Shelter\",\"c\":\"Construction\",\"k\":1,\"id\":607400343},{\"s\":\"wall.frame.lunar2025_a\",\"n\":\"Lunar Wall Frame Inlay\",\"c\":\"Construction\",\"k\":10,\"id\":1115193056},{\"s\":\"wall.frame.lunar2025_b\",\"n\":\"Lunar Wall Frame Inlay\",\"c\":\"Construction\",\"k\":10,\"id\":-450890885},{\"s\":\"wall.frame.lunar2025_c\",\"n\":\"Lunar Wall Frame Inlay\",\"c\":\"Construction\",\"k\":10,\"id\":-2016974826},{\"s\":\"barricade.medieval\",\"n\":\"Medieval Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":-424687710},{\"s\":\"medieval.door.hinged.metal\",\"n\":\"Medieval Sheet Metal Door\",\"c\":\"Construction\",\"k\":1,\"id\":-1654401345},{\"s\":\"medieval.door.double.hinged.metal\",\"n\":\"Medieval Sheet Metal Double Door\",\"c\":\"Construction\",\"k\":1,\"id\":-380502678},{\"s\":\"barricade.metal\",\"n\":\"Metal Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":1655650836},{\"s\":\"shutter.metal.embrasure.a\",\"n\":\"Metal horizontal embrasure\",\"c\":\"Construction\",\"k\":20,\"id\":-1199897169},{\"s\":\"wall.frame.shopfront.metal\",\"n\":\"Metal Shop Front\",\"c\":\"Construction\",\"k\":1,\"id\":-148229307},{\"s\":\"shutter.metal.embrasure.b\",\"n\":\"Metal Vertical embrasure\",\"c\":\"Construction\",\"k\":20,\"id\":-1199897172},{\"s\":\"wall.window.bars.metal\",\"n\":\"Metal Window Bars\",\"c\":\"Construction\",\"k\":10,\"id\":-819720157},{\"s\":\"mining.quarry\",\"n\":\"Mining Quarry\",\"c\":\"Construction\",\"k\":1,\"id\":1052926200},{\"s\":\"mortar.deployable\",\"n\":\"Mortar\",\"c\":\"Construction\",\"k\":1,\"id\":1459828804},{\"s\":\"wall.frame.netting\",\"n\":\"Netting\",\"c\":\"Construction\",\"k\":5,\"id\":1516985844},{\"s\":\"window.paintable\",\"n\":\"Paintable Window\",\"c\":\"Construction\",\"k\":10,\"id\":738611016},{\"s\":\"wall.frame.cell.gate\",\"n\":\"Prison Cell Gate\",\"c\":\"Construction\",\"k\":1,\"id\":-956706906},{\"s\":\"wall.frame.cell\",\"n\":\"Prison Cell Wall\",\"c\":\"Construction\",\"k\":10,\"id\":-1429456799},{\"s\":\"mining.pumpjack\",\"n\":\"Pump Jack\",\"c\":\"Construction\",\"k\":1,\"id\":-1130709577},{\"s\":\"wall.window.bars.toptier\",\"n\":\"Reinforced Glass Window\",\"c\":\"Construction\",\"k\":10,\"id\":671706427},{\"s\":\"cupboard.tool.retro\",\"n\":\"Retro Tool Cupboard\",\"c\":\"Construction\",\"k\":1,\"id\":1488606552},{\"s\":\"barricade.sandbags\",\"n\":\"Sandbag Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":-559599960},{\"s\":\"door.hinged.metal\",\"n\":\"Sheet Metal Door\",\"c\":\"Construction\",\"k\":1,\"id\":-2067472972},{\"s\":\"door.double.hinged.metal\",\"n\":\"Sheet Metal Double Door\",\"c\":\"Construction\",\"k\":1,\"id\":1390353317},{\"s\":\"cupboard.tool.shockbyte\",\"n\":\"Shockbyte Tool Cupboard\",\"c\":\"Construction\",\"k\":1,\"id\":1174957864},{\"s\":\"wall.frame.shopfront\",\"n\":\"Shop Front\",\"c\":\"Construction\",\"k\":1,\"id\":-796583652},{\"s\":\"wall.ice.wall\",\"n\":\"Short Ice Wall\",\"c\":\"Construction\",\"k\":10,\"id\":1327005675},{\"s\":\"water.catcher.small\",\"n\":\"Small Water Catcher\",\"c\":\"Construction\",\"k\":1,\"id\":-132247350},{\"s\":\"barricade.stone\",\"n\":\"Stone Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":15388698},{\"s\":\"wall.window.glass.reinforced\",\"n\":\"Strengthened Glass Window\",\"c\":\"Construction\",\"k\":10,\"id\":-1614955425},{\"s\":\"cupboard.tool\",\"n\":\"Tool Cupboard\",\"c\":\"Construction\",\"k\":1,\"id\":-97956382},{\"s\":\"floor.triangle.ladder.hatch\",\"n\":\"Triangle Ladder Hatch\",\"c\":\"Construction\",\"k\":1,\"id\":2041899972},{\"s\":\"watchtower.wood\",\"n\":\"Watch Tower\",\"c\":\"Construction\",\"k\":5,\"id\":-463122489},{\"s\":\"door.double.hinged.wood\",\"n\":\"Wood Double Door\",\"c\":\"Construction\",\"k\":1,\"id\":-1336109173},{\"s\":\"shutter.wood.a\",\"n\":\"Wood Shutters\",\"c\":\"Construction\",\"k\":20,\"id\":-1023374709},{\"s\":\"barricade.wood\",\"n\":\"Wooden Barricade\",\"c\":\"Construction\",\"k\":10,\"id\":866889860},{\"s\":\"barricade.wood.cover\",\"n\":\"Wooden Barricade Cover\",\"c\":\"Construction\",\"k\":3,\"id\":1373240771},{\"s\":\"door.hinged.boat.wood\",\"n\":\"Wooden Boat Door\",\"c\":\"Construction\",\"k\":1,\"id\":-1063073030},{\"s\":\"ladder.wooden.boat\",\"n\":\"Wooden Boat Ladder\",\"c\":\"Construction\",\"k\":5,\"id\":255305250},{\"s\":\"door.hinged.wood\",\"n\":\"Wooden Door\",\"c\":\"Construction\",\"k\":1,\"id\":1729120840},{\"s\":\"door.double.hinged.bardoors\",\"n\":\"Wooden Frontier Bar Doors\",\"c\":\"Construction\",\"k\":1,\"id\":-1151332840},{\"s\":\"ladder.wooden.wall\",\"n\":\"Wooden Ladder\",\"c\":\"Construction\",\"k\":5,\"id\":-316250604},{\"s\":\"wall.window.bars.wood\",\"n\":\"Wooden Window Bars\",\"c\":\"Construction\",\"k\":10,\"id\":-1183726687},{\"s\":\"electric.andswitch\",\"n\":\"AND Switch\",\"c\":\"Electrical\",\"k\":5,\"id\":1171735914},{\"s\":\"electric.audioalarm\",\"n\":\"Audio Alarm\",\"c\":\"Electrical\",\"k\":5,\"id\":2100007442},{\"s\":\"autoturret\",\"n\":\"Auto Turret\",\"c\":\"Electrical\",\"k\":1,\"id\":-2139580305},{\"s\":\"gamesroom.minifridge\",\"n\":\"Bar Games Minifridge\",\"c\":\"Electrical\",\"k\":1,\"id\":352442426},{\"s\":\"electric.blocker\",\"n\":\"Blocker\",\"c\":\"Electrical\",\"k\":5,\"id\":-690968985},{\"s\":\"industrial.wall.light.blue\",\"n\":\"Blue Industrial Wall Light\",\"c\":\"Electrical\",\"k\":10,\"id\":920930831},{\"s\":\"electric.bulbstringlights\",\"n\":\"Bulb String Lights\",\"c\":\"Electrical\",\"k\":150,\"id\":104856514},{\"s\":\"electric.button\",\"n\":\"Button\",\"c\":\"Electrical\",\"k\":5,\"id\":-1778897469},{\"s\":\"electric.cabletunnel\",\"n\":\"Cable Tunnel\",\"c\":\"Electrical\",\"k\":1,\"id\":1835946060},{\"s\":\"electric.fluorescentlight.ceiling\",\"n\":\"Ceiling Fluorescent Light\",\"c\":\"Electrical\",\"k\":10,\"id\":640470230},{\"s\":\"ceilinglight\",\"n\":\"Ceiling Light\",\"c\":\"Electrical\",\"k\":10,\"id\":1142993169},{\"s\":\"electric.chandelier\",\"n\":\"Chandelier\",\"c\":\"Electrical\",\"k\":10,\"id\":-1510616686},{\"s\":\"command.block\",\"n\":\"Command Block\",\"c\":\"Electrical\",\"k\":64,\"id\":-1247485104},{\"s\":\"computerstation\",\"n\":\"Computer Station\",\"c\":\"Electrical\",\"k\":1,\"id\":-1588628467},{\"s\":\"electric.counter\",\"n\":\"Counter\",\"c\":\"Electrical\",\"k\":5,\"id\":-216999575},{\"s\":\"xmas.lightstring.advanced\",\"n\":\"Deluxe Christmas Lights\",\"c\":\"Electrical\",\"k\":150,\"id\":-151387974},{\"s\":\"electric.digitalclock\",\"n\":\"Digital Clock\",\"c\":\"Electrical\",\"k\":10,\"id\":1619039771},{\"s\":\"electric.doorcontroller\",\"n\":\"Door Controller\",\"c\":\"Electrical\",\"k\":5,\"id\":-502177121},{\"s\":\"electric.furnace\",\"n\":\"Electric Furnace\",\"c\":\"Electrical\",\"k\":1,\"id\":-1196547867},{\"s\":\"electric.heater\",\"n\":\"Electric Heater\",\"c\":\"Electrical\",\"k\":5,\"id\":-784870360},{\"s\":\"electric.tablelight\",\"n\":\"Electric Table Lamp\",\"c\":\"Electrical\",\"k\":10,\"id\":1717250161},{\"s\":\"electrical.branch\",\"n\":\"Electrical Branch\",\"c\":\"Electrical\",\"k\":5,\"id\":-1448252298},{\"s\":\"elevator\",\"n\":\"Elevator\",\"c\":\"Electrical\",\"k\":5,\"id\":1177596584},{\"s\":\"electric.fairylights\",\"n\":\"Fairy Lights\",\"c\":\"Electrical\",\"k\":150,\"id\":54436981},{\"s\":\"electric.flasherlight\",\"n\":\"Flasher Light\",\"c\":\"Electrical\",\"k\":5,\"id\":-939424778},{\"s\":\"fluid.combiner\",\"n\":\"Fluid Combiner\",\"c\":\"Electrical\",\"k\":5,\"id\":-265292885},{\"s\":\"fluid.splitter\",\"n\":\"Fluid Splitter\",\"c\":\"Electrical\",\"k\":5,\"id\":-1166712463},{\"s\":\"fluid.switch\",\"n\":\"Fluid Switch & Pump\",\"c\":\"Electrical\",\"k\":5,\"id\":443432036},{\"s\":\"electric.fluorescentlight\",\"n\":\"Fluorescent Light\",\"c\":\"Electrical\",\"k\":10,\"id\":1892536031},{\"s\":\"fridge\",\"n\":\"Fridge\",\"c\":\"Electrical\",\"k\":1,\"id\":1413014235},{\"s\":\"industrial.wall.light.green\",\"n\":\"Green Industrial Wall Light\",\"c\":\"Electrical\",\"k\":10,\"id\":1268178466},{\"s\":\"electric.hbhfsensor\",\"n\":\"HBHF Sensor\",\"c\":\"Electrical\",\"k\":5,\"id\":-1507239837},{\"s\":\"hopper\",\"n\":\"Hopper\",\"c\":\"Electrical\",\"k\":5,\"id\":1428574144},{\"s\":\"hosetool\",\"n\":\"Hose Tool\",\"c\":\"Electrical\",\"k\":1,\"id\":363163265},{\"s\":\"electric.igniter\",\"n\":\"Igniter\",\"c\":\"Electrical\",\"k\":3,\"id\":-44876289},{\"s\":\"industrial.autoturret\",\"n\":\"Industrial Auto Turret\",\"c\":\"Electrical\",\"k\":1,\"id\":-786398324},{\"s\":\"industrial.combiner\",\"n\":\"Industrial Combiner\",\"c\":\"Electrical\",\"k\":5,\"id\":1538126328},{\"s\":\"industrial.conveyor\",\"n\":\"Industrial Conveyor\",\"c\":\"Electrical\",\"k\":5,\"id\":610102428},{\"s\":\"industrial.crafter\",\"n\":\"Industrial Crafter\",\"c\":\"Electrical\",\"k\":5,\"id\":1430085198},{\"s\":\"industrial.electric.furnace\",\"n\":\"Industrial Electric Furnace\",\"c\":\"Electrical\",\"k\":1,\"id\":225892284},{\"s\":\"industrial.splitter\",\"n\":\"Industrial Splitter\",\"c\":\"Electrical\",\"k\":5,\"id\":742745918},{\"s\":\"industrial.wall.light\",\"n\":\"Industrial Wall Light\",\"c\":\"Electrical\",\"k\":10,\"id\":1623701499},{\"s\":\"sign.neon.xl.animated\",\"n\":\"Large Animated Neon Sign\",\"c\":\"Electrical\",\"k\":5,\"id\":1643667218},{\"s\":\"sign.neon.xl\",\"n\":\"Large Neon Sign\",\"c\":\"Electrical\",\"k\":5,\"id\":866332017},{\"s\":\"electric.battery.rechargable.large\",\"n\":\"Large Rechargeable Battery\",\"c\":\"Electrical\",\"k\":1,\"id\":553270375},{\"s\":\"electric.solarpanel.large\",\"n\":\"Large Solar Panel\",\"c\":\"Electrical\",\"k\":3,\"id\":2090395347},{\"s\":\"electric.laserdetector\",\"n\":\"Laser Detector\",\"c\":\"Electrical\",\"k\":5,\"id\":-798293154},{\"s\":\"sign.neon.125x215.animated\",\"n\":\"Medium Animated Neon Sign\",\"c\":\"Electrical\",\"k\":5,\"id\":42535890},{\"s\":\"sign.neon.125x215\",\"n\":\"Medium Neon Sign\",\"c\":\"Electrical\",\"k\":5,\"id\":-1423304443},{\"s\":\"electric.battery.rechargable.medium\",\"n\":\"Medium Rechargeable Battery\",\"c\":\"Electrical\",\"k\":1,\"id\":2023888403},{\"s\":\"electrical.memorycell\",\"n\":\"Memory Cell\",\"c\":\"Electrical\",\"k\":5,\"id\":-746647361},{\"s\":\"mini fridge\",\"n\":\"Mini Fridge\",\"c\":\"Electrical\",\"k\":1,\"id\":1174484438},{\"s\":\"modularcarlift\",\"n\":\"Modular Car Lift\",\"c\":\"Electrical\",\"k\":1,\"id\":1696050067},{\"s\":\"electric.orswitch\",\"n\":\"OR Switch\",\"c\":\"Electrical\",\"k\":5,\"id\":-1286302544},{\"s\":\"paintabletarget.reactive\",\"n\":\"Paintable Reactive Target\",\"c\":\"Electrical\",\"k\":1,\"id\":-1039234836},{\"s\":\"pipetool\",\"n\":\"Pipe Tool\",\"c\":\"Electrical\",\"k\":1,\"id\":-144513264},{\"s\":\"powered.water.purifier\",\"n\":\"Powered Water Purifier\",\"c\":\"Electrical\",\"k\":3,\"id\":-365097295},{\"s\":\"electric.pressurepad\",\"n\":\"Pressure Pad\",\"c\":\"Electrical\",\"k\":1,\"id\":-2049214035},{\"s\":\"ptz.cctv.camera\",\"n\":\"PTZ CCTV Camera\",\"c\":\"Electrical\",\"k\":5,\"id\":140006625},{\"s\":\"electric.random.switch\",\"n\":\"RAND Switch\",\"c\":\"Electrical\",\"k\":5,\"id\":492357192},{\"s\":\"target.reactive\",\"n\":\"Reactive Target\",\"c\":\"Electrical\",\"k\":1,\"id\":-1736356576},{\"s\":\"industrial.wall.light.red\",\"n\":\"Red Industrial Wall Light\",\"c\":\"Electrical\",\"k\":10,\"id\":-1160621614},{\"s\":\"electric.rf.broadcaster\",\"n\":\"RF Broadcaster\",\"c\":\"Electrical\",\"k\":1,\"id\":-1044468317},{\"s\":\"rf_pager\",\"n\":\"RF Pager\",\"c\":\"Electrical\",\"k\":1,\"id\":-566907190},{\"s\":\"electric.rf.receiver\",\"n\":\"RF Receiver\",\"c\":\"Electrical\",\"k\":1,\"id\":888415708},{\"s\":\"electrical.combiner\",\"n\":\"Root Combiner\",\"c\":\"Electrical\",\"k\":5,\"id\":-458565393},{\"s\":\"searchlight\",\"n\":\"Search Light\",\"c\":\"Electrical\",\"k\":1,\"id\":2087678962},{\"s\":\"electric.seismicsensor\",\"n\":\"Seismic Sensor\",\"c\":\"Electrical\",\"k\":10,\"id\":-948291630},{\"s\":\"electric.simplelight\",\"n\":\"Simple Light\",\"c\":\"Electrical\",\"k\":1,\"id\":-282113991},{\"s\":\"electric.sirenlight\",\"n\":\"Siren Light\",\"c\":\"Electrical\",\"k\":5,\"id\":762289806},{\"s\":\"electric.fuelgenerator.small\",\"n\":\"Small Generator\",\"c\":\"Electrical\",\"k\":1,\"id\":1849887541},{\"s\":\"sign.neon.125x125\",\"n\":\"Small Neon Sign\",\"c\":\"Electrical\",\"k\":5,\"id\":1305578813},{\"s\":\"electric.battery.rechargable.small\",\"n\":\"Small Rechargeable Battery\",\"c\":\"Electrical\",\"k\":1,\"id\":-692338819},{\"s\":\"smart.alarm\",\"n\":\"Smart Alarm\",\"c\":\"Electrical\",\"k\":5,\"id\":-695978112},{\"s\":\"smart.switch\",\"n\":\"Smart Switch\",\"c\":\"Electrical\",\"k\":5,\"id\":988652725},{\"s\":\"electric.splitter\",\"n\":\"Splitter\",\"c\":\"Electrical\",\"k\":5,\"id\":-563624462},{\"s\":\"electric.spotlight\",\"n\":\"Spot Light\",\"c\":\"Electrical\",\"k\":10,\"id\":-1258821205},{\"s\":\"electric.sprinkler\",\"n\":\"Sprinkler\",\"c\":\"Electrical\",\"k\":10,\"id\":-781014061},{\"s\":\"storageadaptor\",\"n\":\"Storage Adaptor\",\"c\":\"Electrical\",\"k\":5,\"id\":-1049172752},{\"s\":\"storage.monitor\",\"n\":\"Storage Monitor\",\"c\":\"Electrical\",\"k\":1,\"id\":1149964039},{\"s\":\"electric.switch\",\"n\":\"Switch\",\"c\":\"Electrical\",\"k\":5,\"id\":1951603367},{\"s\":\"electric.teslacoil\",\"n\":\"Tesla Coil\",\"c\":\"Electrical\",\"k\":3,\"id\":1371909803},{\"s\":\"electric.generator.small\",\"n\":\"Test Generator\",\"c\":\"Electrical\",\"k\":1,\"id\":-295829489},{\"s\":\"electric.timer\",\"n\":\"Timer\",\"c\":\"Electrical\",\"k\":5,\"id\":665332906},{\"s\":\"electric.spotlight.tripod\",\"n\":\"Tripod Spot Light\",\"c\":\"Electrical\",\"k\":10,\"id\":-2134097299},{\"s\":\"twitchrivals2023desk\",\"n\":\"Twitch Rivals Desk\",\"c\":\"Electrical\",\"k\":1,\"id\":-243540612},{\"s\":\"neonsigntr\",\"n\":\"Twitch Rivals Neon Sign\",\"c\":\"Electrical\",\"k\":1,\"id\":381595627},{\"s\":\"waterpump\",\"n\":\"Water Pump\",\"c\":\"Electrical\",\"k\":3,\"id\":-1284169891},{\"s\":\"generator.water\",\"n\":\"Water Wheel\",\"c\":\"Electrical\",\"k\":1,\"id\":-379403794},{\"s\":\"weaponrack.doublelight\",\"n\":\"Weapon Rack Double Light\",\"c\":\"Electrical\",\"k\":1,\"id\":1277159544},{\"s\":\"weaponrack.light\",\"n\":\"Weapon Rack Light\",\"c\":\"Electrical\",\"k\":1,\"id\":-1163943815},{\"s\":\"generator.wind.scrap\",\"n\":\"Wind Turbine\",\"c\":\"Electrical\",\"k\":1,\"id\":-1819763926},{\"s\":\"wiretool\",\"n\":\"Wire Tool\",\"c\":\"Electrical\",\"k\":1,\"id\":-144417939},{\"s\":\"electric.xorswitch\",\"n\":\"XOR Switch\",\"c\":\"Electrical\",\"k\":5,\"id\":1293102274},{\"s\":\"radiationresisttea.advanced\",\"n\":\"Advanced Anti-Rad Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1729415579},{\"s\":\"advancedcoolingtea\",\"n\":\"Advanced Cooling Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1498613415},{\"s\":\"advancedcraftingtea_quality\",\"n\":\"Advanced Crafting Quality Tea\",\"c\":\"Food\",\"k\":10,\"id\":-652889722},{\"s\":\"advanceharvestingtea\",\"n\":\"Advanced Harvesting Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1385721419},{\"s\":\"healingtea.advanced\",\"n\":\"Advanced Healing Tea\",\"c\":\"Food\",\"k\":10,\"id\":-2123125470},{\"s\":\"maxhealthtea.advanced\",\"n\":\"Advanced Max Health Tea\",\"c\":\"Food\",\"k\":10,\"id\":603811464},{\"s\":\"oretea.advanced\",\"n\":\"Advanced Ore Tea\",\"c\":\"Food\",\"k\":10,\"id\":2063916636},{\"s\":\"radiationremovetea.advanced\",\"n\":\"Advanced Rad. Removal Tea\",\"c\":\"Food\",\"k\":10,\"id\":2021351233},{\"s\":\"scraptea.advanced\",\"n\":\"Advanced Scrap Tea\",\"c\":\"Food\",\"k\":10,\"id\":524678627},{\"s\":\"advancedwarmingtea\",\"n\":\"Advanced Warming Tea\",\"c\":\"Food\",\"k\":10,\"id\":-334418777},{\"s\":\"woodtea.advanced\",\"n\":\"Advanced Wood Tea\",\"c\":\"Food\",\"k\":10,\"id\":-541206665},{\"s\":\"fish.anchovy\",\"n\":\"Anchovy\",\"c\":\"Food\",\"k\":10,\"id\":342438846},{\"s\":\"apple\",\"n\":\"Apple\",\"c\":\"Food\",\"k\":10,\"id\":1548091822},{\"s\":\"pie.apple\",\"n\":\"Apple Pie\",\"c\":\"Food\",\"k\":3,\"id\":4384538},{\"s\":\"radiationresisttea\",\"n\":\"Basic Anti-Rad Tea\",\"c\":\"Food\",\"k\":10,\"id\":-487356515},{\"s\":\"coolingtea\",\"n\":\"Basic Cooling Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1260229965},{\"s\":\"craftingtea_quality\",\"n\":\"Basic Crafting Quality Tea\",\"c\":\"Food\",\"k\":10,\"id\":368008432},{\"s\":\"harvestingtea\",\"n\":\"Basic Harvesting Tea\",\"c\":\"Food\",\"k\":10,\"id\":1516531815},{\"s\":\"healingtea\",\"n\":\"Basic Healing Tea\",\"c\":\"Food\",\"k\":10,\"id\":-929092070},{\"s\":\"maxhealthtea\",\"n\":\"Basic Max Health Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1184406448},{\"s\":\"oretea\",\"n\":\"Basic Ore Tea\",\"c\":\"Food\",\"k\":10,\"id\":1480022580},{\"s\":\"scraptea\",\"n\":\"Basic Scrap Tea\",\"c\":\"Food\",\"k\":10,\"id\":263834859},{\"s\":\"warmingtea\",\"n\":\"Basic Warming Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1142222427},{\"s\":\"woodtea\",\"n\":\"Basic Wood Tea\",\"c\":\"Food\",\"k\":10,\"id\":-649128577},{\"s\":\"pie.bear\",\"n\":\"Bear Pie\",\"c\":\"Food\",\"k\":3,\"id\":2039177180},{\"s\":\"pie.bigcat\",\"n\":\"Big Cat Pie\",\"c\":\"Food\",\"k\":3,\"id\":309017792},{\"s\":\"black.berry\",\"n\":\"Black Berry\",\"c\":\"Food\",\"k\":20,\"id\":1771755747},{\"s\":\"clone.black.berry\",\"n\":\"Black Berry Clone\",\"c\":\"Food\",\"k\":50,\"id\":122783240},{\"s\":\"seed.black.berry\",\"n\":\"Black Berry Seed\",\"c\":\"Food\",\"k\":50,\"id\":1911552868},{\"s\":\"black.raspberries\",\"n\":\"Black Raspberries\",\"c\":\"Food\",\"k\":20,\"id\":1931713481},{\"s\":\"blue.berry\",\"n\":\"Blue Berry\",\"c\":\"Food\",\"k\":20,\"id\":1112162468},{\"s\":\"clone.blue.berry\",\"n\":\"Blue Berry Clone\",\"c\":\"Food\",\"k\":50,\"id\":838831151},{\"s\":\"seed.blue.berry\",\"n\":\"Blue Berry Seed\",\"c\":\"Food\",\"k\":50,\"id\":803954639},{\"s\":\"blueberries\",\"n\":\"Blueberries\",\"c\":\"Food\",\"k\":20,\"id\":-586342290},{\"s\":\"bread.loaf\",\"n\":\"Bread Loaf\",\"c\":\"Food\",\"k\":10,\"id\":281099360},{\"s\":\"bearmeat.burned\",\"n\":\"Burnt Bear Meat\",\"c\":\"Food\",\"k\":20,\"id\":-989755543},{\"s\":\"chicken.burned\",\"n\":\"Burnt Chicken\",\"c\":\"Food\",\"k\":20,\"id\":1973684065},{\"s\":\"deermeat.burned\",\"n\":\"Burnt Deer Meat\",\"c\":\"Food\",\"k\":20,\"id\":-78533081},{\"s\":\"horsemeat.burned\",\"n\":\"Burnt Horse Meat\",\"c\":\"Food\",\"k\":20,\"id\":1917703890},{\"s\":\"humanmeat.burned\",\"n\":\"Burnt Human Meat\",\"c\":\"Food\",\"k\":20,\"id\":-682687162},{\"s\":\"meat.pork.burned\",\"n\":\"Burnt Pork\",\"c\":\"Food\",\"k\":20,\"id\":1391703481},{\"s\":\"wolfmeat.burned\",\"n\":\"Burnt Wolf Meat\",\"c\":\"Food\",\"k\":20,\"id\":1827479659},{\"s\":\"cactusflesh\",\"n\":\"Cactus Flesh\",\"c\":\"Food\",\"k\":10,\"id\":1783512007},{\"s\":\"can.beans\",\"n\":\"Can of Beans\",\"c\":\"Food\",\"k\":10,\"id\":-700591459},{\"s\":\"can.tuna\",\"n\":\"Can of Tuna\",\"c\":\"Food\",\"k\":10,\"id\":-1941646328},{\"s\":\"candycane\",\"n\":\"Candy Cane\",\"c\":\"Food\",\"k\":1,\"id\":1121925526},{\"s\":\"fish.catfish\",\"n\":\"Catfish\",\"c\":\"Food\",\"k\":5,\"id\":-587989372},{\"s\":\"pie.chicken\",\"n\":\"Chicken Pie\",\"c\":\"Food\",\"k\":3,\"id\":120820987},{\"s\":\"chocolate\",\"n\":\"Chocolate Bar\",\"c\":\"Food\",\"k\":10,\"id\":-965336208},{\"s\":\"coconut\",\"n\":\"Coconut\",\"c\":\"Food\",\"k\":20,\"id\":-24571537},{\"s\":\"bearmeat.cooked\",\"n\":\"Cooked Bear Meat\",\"c\":\"Food\",\"k\":20,\"id\":1873897110},{\"s\":\"bigcatmeat.cooked\",\"n\":\"Cooked Big Cat Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1318837358},{\"s\":\"chicken.cooked\",\"n\":\"Cooked Chicken\",\"c\":\"Food\",\"k\":20,\"id\":-1848736516},{\"s\":\"crocodilemeat.cooked\",\"n\":\"Cooked Crocodile Meat\",\"c\":\"Food\",\"k\":20,\"id\":392828520},{\"s\":\"deermeat.cooked\",\"n\":\"Cooked Deer Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1509851560},{\"s\":\"fish.cooked\",\"n\":\"Cooked Fish\",\"c\":\"Food\",\"k\":20,\"id\":1668129151},{\"s\":\"horsemeat.cooked\",\"n\":\"Cooked Horse Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1162759543},{\"s\":\"humanmeat.cooked\",\"n\":\"Cooked Human Meat\",\"c\":\"Food\",\"k\":20,\"id\":1536610005},{\"s\":\"meat.pork.cooked\",\"n\":\"Cooked Pork\",\"c\":\"Food\",\"k\":20,\"id\":-242084766},{\"s\":\"snakemeat.cooked\",\"n\":\"Cooked Snake Meat\",\"c\":\"Food\",\"k\":20,\"id\":-170436364},{\"s\":\"wolfmeat.cooked\",\"n\":\"Cooked Wolf Meat\",\"c\":\"Food\",\"k\":20,\"id\":813023040},{\"s\":\"corn\",\"n\":\"Corn\",\"c\":\"Food\",\"k\":20,\"id\":1367190888},{\"s\":\"clone.corn\",\"n\":\"Corn Clone\",\"c\":\"Food\",\"k\":50,\"id\":-778875547},{\"s\":\"seed.corn\",\"n\":\"Corn Seed\",\"c\":\"Food\",\"k\":50,\"id\":998894949},{\"s\":\"pie.crocodile\",\"n\":\"Crocodile Pie\",\"c\":\"Food\",\"k\":3,\"id\":54265286},{\"s\":\"egg\",\"n\":\"Egg\",\"c\":\"Food\",\"k\":20,\"id\":1858828593},{\"s\":\"pie.fish\",\"n\":\"Fish Pie\",\"c\":\"Food\",\"k\":3,\"id\":-1785248332},{\"s\":\"granolabar\",\"n\":\"Granola Bar\",\"c\":\"Food\",\"k\":10,\"id\":-746030907},{\"s\":\"green.berry\",\"n\":\"Green Berry\",\"c\":\"Food\",\"k\":20,\"id\":858486327},{\"s\":\"clone.green.berry\",\"n\":\"Green Berry Clone\",\"c\":\"Food\",\"k\":50,\"id\":-1305326964},{\"s\":\"seed.green.berry\",\"n\":\"Green Berry Seed\",\"c\":\"Food\",\"k\":50,\"id\":-1776128552},{\"s\":\"grub\",\"n\":\"Grub\",\"c\":\"Food\",\"k\":25,\"id\":-568419968},{\"s\":\"clone.hemp\",\"n\":\"Hemp Clone\",\"c\":\"Food\",\"k\":50,\"id\":-886280491},{\"s\":\"seed.hemp\",\"n\":\"Hemp Seed\",\"c\":\"Food\",\"k\":50,\"id\":-237809779},{\"s\":\"fish.herring\",\"n\":\"Herring\",\"c\":\"Food\",\"k\":10,\"id\":-1698937385},{\"s\":\"honeycomb\",\"n\":\"Honeycomb\",\"c\":\"Food\",\"k\":20,\"id\":-1513203236},{\"s\":\"pie.hunters\",\"n\":\"Hunters Pie\",\"c\":\"Food\",\"k\":3,\"id\":320438357},{\"s\":\"honey\",\"n\":\"Jar of Honey\",\"c\":\"Food\",\"k\":20,\"id\":1601800933},{\"s\":\"fish.minnows\",\"n\":\"Minnows\",\"c\":\"Food\",\"k\":10,\"id\":-542577259},{\"s\":\"mrspice.can\",\"n\":\"Mr Spice Can\",\"c\":\"Food\",\"k\":1,\"id\":-648077743},{\"s\":\"mushroom\",\"n\":\"Mushroom\",\"c\":\"Food\",\"k\":10,\"id\":-1962971928},{\"s\":\"fish.orangeroughy\",\"n\":\"Orange Roughy\",\"c\":\"Food\",\"k\":5,\"id\":-1904821376},{\"s\":\"orchid\",\"n\":\"Orchid\",\"c\":\"Food\",\"k\":20,\"id\":734320711},{\"s\":\"clone.orchid\",\"n\":\"Orchid Clone\",\"c\":\"Food\",\"k\":50,\"id\":-798662404},{\"s\":\"seed.orchid\",\"n\":\"Orchid Seed\",\"c\":\"Food\",\"k\":50,\"id\":1004843240},{\"s\":\"jar.pickle\",\"n\":\"Pickles\",\"c\":\"Food\",\"k\":10,\"id\":286193827},{\"s\":\"pie.pork\",\"n\":\"Pork Pie\",\"c\":\"Food\",\"k\":3,\"id\":1467878256},{\"s\":\"potato\",\"n\":\"Potato\",\"c\":\"Food\",\"k\":20,\"id\":-2086926071},{\"s\":\"clone.potato\",\"n\":\"Potato Clone\",\"c\":\"Food\",\"k\":50,\"id\":1512054436},{\"s\":\"seed.potato\",\"n\":\"Potato Seed\",\"c\":\"Food\",\"k\":50,\"id\":-2084071424},{\"s\":\"pumpkin\",\"n\":\"Pumpkin\",\"c\":\"Food\",\"k\":20,\"id\":-567909622},{\"s\":\"pie.pumpkin\",\"n\":\"Pumpkin Pie\",\"c\":\"Food\",\"k\":3,\"id\":-1488408786},{\"s\":\"clone.pumpkin\",\"n\":\"Pumpkin Plant Clone\",\"c\":\"Food\",\"k\":50,\"id\":1898094925},{\"s\":\"seed.pumpkin\",\"n\":\"Pumpkin Seed\",\"c\":\"Food\",\"k\":50,\"id\":-1511285251},{\"s\":\"radiationresisttea.pure\",\"n\":\"Pure Anti-Rad Tea\",\"c\":\"Food\",\"k\":10,\"id\":-33009419},{\"s\":\"purecoolingtea\",\"n\":\"Pure Cooling Tea\",\"c\":\"Food\",\"k\":10,\"id\":1121416193},{\"s\":\"purecraftingtea_quality\",\"n\":\"Pure Crafting Quality Tea\",\"c\":\"Food\",\"k\":10,\"id\":97903330},{\"s\":\"pureharvestingtea\",\"n\":\"Pure Harvesting Tea\",\"c\":\"Food\",\"k\":10,\"id\":377750553},{\"s\":\"healingtea.pure\",\"n\":\"Pure Healing Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1677315902},{\"s\":\"maxhealthtea.pure\",\"n\":\"Pure Max Health Tea\",\"c\":\"Food\",\"k\":10,\"id\":1712261904},{\"s\":\"oretea.pure\",\"n\":\"Pure Ore Tea\",\"c\":\"Food\",\"k\":10,\"id\":1729374708},{\"s\":\"radiationremovetea.pure\",\"n\":\"Pure Rad. Removal Tea\",\"c\":\"Food\",\"k\":10,\"id\":1905387657},{\"s\":\"scraptea.pure\",\"n\":\"Pure Scrap Tea\",\"c\":\"Food\",\"k\":10,\"id\":2024467711},{\"s\":\"purewarmingtea\",\"n\":\"Pure Warming Tea\",\"c\":\"Food\",\"k\":10,\"id\":-1476814093},{\"s\":\"woodtea.pure\",\"n\":\"Pure Wood Tea\",\"c\":\"Food\",\"k\":10,\"id\":-557539629},{\"s\":\"radiationremovetea\",\"n\":\"Rad. Removal Tea\",\"c\":\"Food\",\"k\":10,\"id\":-496584751},{\"s\":\"bearmeat\",\"n\":\"Raw Bear Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1520560807},{\"s\":\"bigcatmeat\",\"n\":\"Raw Big Cat Meat\",\"c\":\"Food\",\"k\":20,\"id\":-2095813057},{\"s\":\"chicken.raw\",\"n\":\"Raw Chicken Breast\",\"c\":\"Food\",\"k\":20,\"id\":-1440987069},{\"s\":\"crocodilemeat\",\"n\":\"Raw Crocodile Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1081599445},{\"s\":\"deermeat.raw\",\"n\":\"Raw Deer Meat\",\"c\":\"Food\",\"k\":20,\"id\":1422530437},{\"s\":\"fish.raw\",\"n\":\"Raw Fish\",\"c\":\"Food\",\"k\":20,\"id\":989925924},{\"s\":\"horsemeat.raw\",\"n\":\"Raw Horse Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1130350864},{\"s\":\"humanmeat.raw\",\"n\":\"Raw Human Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1709878924},{\"s\":\"meat.boar\",\"n\":\"Raw Pork\",\"c\":\"Food\",\"k\":20,\"id\":621915341},{\"s\":\"snakemeat\",\"n\":\"Raw Snake Meat\",\"c\":\"Food\",\"k\":20,\"id\":-2100458529},{\"s\":\"wolfmeat.raw\",\"n\":\"Raw Wolf Meat\",\"c\":\"Food\",\"k\":20,\"id\":-395377963},{\"s\":\"red.berry\",\"n\":\"Red Berry\",\"c\":\"Food\",\"k\":20,\"id\":1272194103},{\"s\":\"clone.red.berry\",\"n\":\"Red Berry Clone\",\"c\":\"Food\",\"k\":50,\"id\":2133269020},{\"s\":\"seed.red.berry\",\"n\":\"Red Berry Seed\",\"c\":\"Food\",\"k\":50,\"id\":830839496},{\"s\":\"rose\",\"n\":\"Rose\",\"c\":\"Food\",\"k\":20,\"id\":1414245519},{\"s\":\"clone.rose\",\"n\":\"Rose Clone\",\"c\":\"Food\",\"k\":50,\"id\":-19360132},{\"s\":\"seed.rose\",\"n\":\"Rose Seed\",\"c\":\"Food\",\"k\":50,\"id\":-1037472336},{\"s\":\"apple.spoiled\",\"n\":\"Rotten Apple\",\"c\":\"Food\",\"k\":1,\"id\":352130972},{\"s\":\"fish.salmon\",\"n\":\"Salmon\",\"c\":\"Food\",\"k\":10,\"id\":-851988960},{\"s\":\"fish.sardine\",\"n\":\"Sardine\",\"c\":\"Food\",\"k\":10,\"id\":-1654233406},{\"s\":\"fish.smallshark\",\"n\":\"Small Shark\",\"c\":\"Food\",\"k\":5,\"id\":-1768880890},{\"s\":\"fish.troutsmall\",\"n\":\"Small Trout\",\"c\":\"Food\",\"k\":10,\"id\":-1878764039},{\"s\":\"smallwaterbottle\",\"n\":\"Small Water Bottle\",\"c\":\"Food\",\"k\":1,\"id\":-1039528932},{\"s\":\"bearmeat.spoiled\",\"n\":\"Spoiled Bear Meat\",\"c\":\"Food\",\"k\":20,\"id\":1348294923},{\"s\":\"bigcatmeat.spoiled\",\"n\":\"Spoiled Big Cat Meat\",\"c\":\"Food\",\"k\":20,\"id\":248643189},{\"s\":\"chicken.spoiled\",\"n\":\"Spoiled Chicken\",\"c\":\"Food\",\"k\":20,\"id\":-751151717},{\"s\":\"crocodilemeat.spoiled\",\"n\":\"Spoiled Crocodile Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1796837031},{\"s\":\"deermeat.spoiled\",\"n\":\"Spoiled Deer Meat\",\"c\":\"Food\",\"k\":20,\"id\":-2035449523},{\"s\":\"fish.spoiled\",\"n\":\"Spoiled Fish Meat\",\"c\":\"Food\",\"k\":20,\"id\":1130729138},{\"s\":\"horsemeat.spoiled\",\"n\":\"Spoiled Horse Meat\",\"c\":\"Food\",\"k\":20,\"id\":-724146494},{\"s\":\"humanmeat.spoiled\",\"n\":\"Spoiled Human Meat\",\"c\":\"Food\",\"k\":20,\"id\":1272768630},{\"s\":\"porkmeat.spoiled\",\"n\":\"Spoiled Pork Meat\",\"c\":\"Food\",\"k\":20,\"id\":1925646349},{\"s\":\"spoiled.produce\",\"n\":\"Spoiled Produce\",\"c\":\"Food\",\"k\":20,\"id\":1184215560},{\"s\":\"snakemeat.spoiled\",\"n\":\"Spoiled Snake Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1616704051},{\"s\":\"wolfmeat.spoiled\",\"n\":\"Spoiled Wolf Meat\",\"c\":\"Food\",\"k\":20,\"id\":-1167031859},{\"s\":\"sunflower\",\"n\":\"Sunflower\",\"c\":\"Food\",\"k\":20,\"id\":-611118083},{\"s\":\"clone.sunflower\",\"n\":\"Sunflower Clone\",\"c\":\"Food\",\"k\":50,\"id\":912235912},{\"s\":\"seed.sunflower\",\"n\":\"Sunflower Seed\",\"c\":\"Food\",\"k\":50,\"id\":1412103380},{\"s\":\"supertea\",\"n\":\"Super Serum\",\"c\":\"Food\",\"k\":1,\"id\":-1003665711},{\"s\":\"pie.survivors\",\"n\":\"Survivor's Pie\",\"c\":\"Food\",\"k\":3,\"id\":-963820355},{\"s\":\"bottle.vodka\",\"n\":\"Vodka Bottle\",\"c\":\"Food\",\"k\":1,\"id\":755224797},{\"s\":\"waterjug\",\"n\":\"Water Jug\",\"c\":\"Food\",\"k\":1,\"id\":-119235651},{\"s\":\"wheat\",\"n\":\"Wheat\",\"c\":\"Food\",\"k\":20,\"id\":1178325727},{\"s\":\"clone.wheat\",\"n\":\"Wheat Clone\",\"c\":\"Food\",\"k\":50,\"id\":924598634},{\"s\":\"seed.wheat\",\"n\":\"Wheat Seed\",\"c\":\"Food\",\"k\":50,\"id\":-1790885730},{\"s\":\"white.berry\",\"n\":\"White Berry\",\"c\":\"Food\",\"k\":20,\"id\":854447607},{\"s\":\"clone.white.berry\",\"n\":\"White Berry Clone\",\"c\":\"Food\",\"k\":50,\"id\":1533551194},{\"s\":\"seed.white.berry\",\"n\":\"White Berry Seed\",\"c\":\"Food\",\"k\":50,\"id\":-992286106},{\"s\":\"worm\",\"n\":\"Worm\",\"c\":\"Food\",\"k\":25,\"id\":1770475779},{\"s\":\"yellow.berry\",\"n\":\"Yellow Berry\",\"c\":\"Food\",\"k\":20,\"id\":1660145984},{\"s\":\"clone.yellow.berry\",\"n\":\"Yellow Berry Clone\",\"c\":\"Food\",\"k\":50,\"id\":390728933},{\"s\":\"seed.yellow.berry\",\"n\":\"Yellow Berry Seed\",\"c\":\"Food\",\"k\":50,\"id\":-520133715},{\"s\":\"fish.yellowperch\",\"n\":\"Yellow Perch\",\"c\":\"Food\",\"k\":10,\"id\":680234026},{\"s\":\"abovegroundpool\",\"n\":\"Above Ground Pool\",\"c\":\"Fun\",\"k\":1,\"id\":1840570710},{\"s\":\"fun.guitar\",\"n\":\"Acoustic Guitar\",\"c\":\"Fun\",\"k\":1,\"id\":-2124352573},{\"s\":\"beachchair\",\"n\":\"Beach Chair\",\"c\":\"Fun\",\"k\":1,\"id\":-321431890},{\"s\":\"beachparasol\",\"n\":\"Beach Parasol\",\"c\":\"Fun\",\"k\":1,\"id\":-1621539785},{\"s\":\"beachtable\",\"n\":\"Beach Table\",\"c\":\"Fun\",\"k\":1,\"id\":657352755},{\"s\":\"beachtowel\",\"n\":\"Beach Towel\",\"c\":\"Fun\",\"k\":1,\"id\":-8312704},{\"s\":\"firework.boomer.blue\",\"n\":\"Blue Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":1744298439},{\"s\":\"firework.romancandle.blue\",\"n\":\"Blue Roman Candle\",\"c\":\"Fun\",\"k\":20,\"id\":-515830359},{\"s\":\"boogieboard\",\"n\":\"Boogie Board\",\"c\":\"Fun\",\"k\":1,\"id\":-1478094705},{\"s\":\"boombox\",\"n\":\"Boom Box\",\"c\":\"Fun\",\"k\":1,\"id\":-1113501606},{\"s\":\"fun.tambourine\",\"n\":\"Canbourine\",\"c\":\"Fun\",\"k\":1,\"id\":-1379036069},{\"s\":\"vehicle.car_radio\",\"n\":\"Car Radio\",\"c\":\"Fun\",\"k\":1,\"id\":721798950},{\"s\":\"cassette\",\"n\":\"Cassette - Long\",\"c\":\"Fun\",\"k\":1,\"id\":476066818},{\"s\":\"cassette.medium\",\"n\":\"Cassette - Medium\",\"c\":\"Fun\",\"k\":1,\"id\":-912398867},{\"s\":\"cassette.short\",\"n\":\"Cassette - Short\",\"c\":\"Fun\",\"k\":1,\"id\":1523403414},{\"s\":\"fun.casetterecorder\",\"n\":\"Cassette Recorder\",\"c\":\"Fun\",\"k\":1,\"id\":-1530414568},{\"s\":\"firework.boomer.champagne\",\"n\":\"Champagne Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":1324203999},{\"s\":\"confetticannon\",\"n\":\"Confetti Cannon\",\"c\":\"Fun\",\"k\":1,\"id\":1603174987},{\"s\":\"connected.speaker\",\"n\":\"Connected Speaker\",\"c\":\"Fun\",\"k\":5,\"id\":968421290},{\"s\":\"fun.cowbell\",\"n\":\"Cowbell\",\"c\":\"Fun\",\"k\":1,\"id\":-1049881973},{\"s\":\"dartboard\",\"n\":\"Dart Board\",\"c\":\"Fun\",\"k\":1,\"id\":-872679147},{\"s\":\"discoball\",\"n\":\"Disco Ball\",\"c\":\"Fun\",\"k\":5,\"id\":1895235349},{\"s\":\"discofloor\",\"n\":\"Disco Floor\",\"c\":\"Fun\",\"k\":5,\"id\":286648290},{\"s\":\"discofloor.largetiles\",\"n\":\"Disco Floor\",\"c\":\"Fun\",\"k\":5,\"id\":1735402444},{\"s\":\"lunar.firecrackers\",\"n\":\"Firecracker String\",\"c\":\"Fun\",\"k\":5,\"id\":-1961560162},{\"s\":\"firework.boomer.green\",\"n\":\"Green Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":-656349006},{\"s\":\"firework.romancandle.green\",\"n\":\"Green Roman Candle\",\"c\":\"Fun\",\"k\":20,\"id\":-1306288356},{\"s\":\"innertube.horse\",\"n\":\"Inner Tube\",\"c\":\"Fun\",\"k\":1,\"id\":185586769},{\"s\":\"innertube\",\"n\":\"Inner Tube\",\"c\":\"Fun\",\"k\":1,\"id\":-697981032},{\"s\":\"innertube.unicorn\",\"n\":\"Inner Tube\",\"c\":\"Fun\",\"k\":1,\"id\":2052270186},{\"s\":\"fun.jerrycanguitar\",\"n\":\"Jerry Can Guitar\",\"c\":\"Fun\",\"k\":1,\"id\":-979951147},{\"s\":\"jukebox\",\"n\":\"Jukebox\",\"c\":\"Fun\",\"k\":1,\"id\":-1018085504},{\"s\":\"drumkit\",\"n\":\"Junkyard Drum Kit\",\"c\":\"Fun\",\"k\":1,\"id\":-1330640246},{\"s\":\"laserlight\",\"n\":\"Laser Light\",\"c\":\"Fun\",\"k\":5,\"id\":853471967},{\"s\":\"megaphone\",\"n\":\"Megaphone\",\"c\":\"Fun\",\"k\":1,\"id\":-583379016},{\"s\":\"microphonestand\",\"n\":\"Microphone Stand\",\"c\":\"Fun\",\"k\":5,\"id\":39600618},{\"s\":\"mobilephone\",\"n\":\"Mobile Phone\",\"c\":\"Fun\",\"k\":1,\"id\":-20045316},{\"s\":\"newyeargong\",\"n\":\"New Year Gong\",\"c\":\"Fun\",\"k\":1,\"id\":-961457160},{\"s\":\"firework.boomer.orange\",\"n\":\"Orange Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":-7270019},{\"s\":\"paddlingpool\",\"n\":\"Paddling Pool\",\"c\":\"Fun\",\"k\":1,\"id\":-733625651},{\"s\":\"fun.flute\",\"n\":\"Pan Flute\",\"c\":\"Fun\",\"k\":1,\"id\":-2040817543},{\"s\":\"firework.boomer.pattern\",\"n\":\"Pattern Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":-379734527},{\"s\":\"pinata\",\"n\":\"Pinata\",\"c\":\"Fun\",\"k\":5,\"id\":-1442496789},{\"s\":\"fun.trumpet\",\"n\":\"Plumber's Trumpet\",\"c\":\"Fun\",\"k\":1,\"id\":273172220},{\"s\":\"pooltable\",\"n\":\"Pool Table\",\"c\":\"Fun\",\"k\":1,\"id\":-1748166144},{\"s\":\"fun.boomboxportable\",\"n\":\"Portable Boom Box\",\"c\":\"Fun\",\"k\":1,\"id\":576509618},{\"s\":\"firework.boomer.red\",\"n\":\"Red Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":-1553999294},{\"s\":\"firework.romancandle.red\",\"n\":\"Red Roman Candle\",\"c\":\"Fun\",\"k\":20,\"id\":-1486461488},{\"s\":\"firework.volcano.red\",\"n\":\"Red Volcano Firework\",\"c\":\"Fun\",\"k\":20,\"id\":-454370658},{\"s\":\"fun.bass\",\"n\":\"Shovel Bass\",\"c\":\"Fun\",\"k\":1,\"id\":-2107018088},{\"s\":\"skullspikes.candles\",\"n\":\"Skull Spikes\",\"c\":\"Fun\",\"k\":1,\"id\":-25740268},{\"s\":\"skullspikes\",\"n\":\"Skull Spikes\",\"c\":\"Fun\",\"k\":1,\"id\":-1073015016},{\"s\":\"skullspikes.pumpkin\",\"n\":\"Skull Spikes\",\"c\":\"Fun\",\"k\":1,\"id\":-1078639462},{\"s\":\"skull.trophy.jar\",\"n\":\"Skull Trophy\",\"c\":\"Fun\",\"k\":1,\"id\":971362526},{\"s\":\"skull.trophy.jar2\",\"n\":\"Skull Trophy\",\"c\":\"Fun\",\"k\":1,\"id\":-924959988},{\"s\":\"skull.trophy\",\"n\":\"Skull Trophy\",\"c\":\"Fun\",\"k\":1,\"id\":-769647921},{\"s\":\"skull.trophy.table\",\"n\":\"Skull Trophy\",\"c\":\"Fun\",\"k\":1,\"id\":-156748077},{\"s\":\"skylantern\",\"n\":\"Sky Lantern\",\"c\":\"Fun\",\"k\":20,\"id\":1819863051},{\"s\":\"skylantern.skylantern.green\",\"n\":\"Sky Lantern - Green\",\"c\":\"Fun\",\"k\":20,\"id\":-1770889433},{\"s\":\"skylantern.skylantern.orange\",\"n\":\"Sky Lantern - Orange\",\"c\":\"Fun\",\"k\":20,\"id\":-1824770114},{\"s\":\"skylantern.skylantern.purple\",\"n\":\"Sky Lantern - Purple\",\"c\":\"Fun\",\"k\":20,\"id\":831955134},{\"s\":\"skylantern.skylantern.red\",\"n\":\"Sky Lantern - Red\",\"c\":\"Fun\",\"k\":20,\"id\":-1433390281},{\"s\":\"sled\",\"n\":\"Sled\",\"c\":\"Fun\",\"k\":1,\"id\":-333406828},{\"s\":\"sled.xmas\",\"n\":\"Sled\",\"c\":\"Fun\",\"k\":1,\"id\":-135252633},{\"s\":\"soundlight\",\"n\":\"Sound Light\",\"c\":\"Fun\",\"k\":5,\"id\":-343857907},{\"s\":\"fun.tuba\",\"n\":\"Sousaphone\",\"c\":\"Fun\",\"k\":1,\"id\":1784406797},{\"s\":\"telephone\",\"n\":\"Telephone\",\"c\":\"Fun\",\"k\":1,\"id\":1234878710},{\"s\":\"firework.boomer.violet\",\"n\":\"Violet Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":-280223496},{\"s\":\"firework.romancandle.violet\",\"n\":\"Violet Roman Candle\",\"c\":\"Fun\",\"k\":20,\"id\":-99886070},{\"s\":\"firework.volcano.violet\",\"n\":\"Violet Volcano Firework\",\"c\":\"Fun\",\"k\":20,\"id\":-1538109120},{\"s\":\"piano\",\"n\":\"Wheelbarrow Piano\",\"c\":\"Fun\",\"k\":1,\"id\":1272430949},{\"s\":\"firework.boomer.white\",\"n\":\"White Boomer\",\"c\":\"Fun\",\"k\":20,\"id\":-18034684},{\"s\":\"firework.volcano\",\"n\":\"White Volcano Firework\",\"c\":\"Fun\",\"k\":20,\"id\":261913429},{\"s\":\"wrappedgift\",\"n\":\"Wrapped Gift\",\"c\":\"Fun\",\"k\":1,\"id\":204970153},{\"s\":\"wrappingpaper\",\"n\":\"Wrapping Paper\",\"c\":\"Fun\",\"k\":1,\"id\":1094293920},{\"s\":\"xylophone\",\"n\":\"Xylobone\",\"c\":\"Fun\",\"k\":1,\"id\":-211235948},{\"s\":\"abyss.barrel.horizontal\",\"n\":\"Abyss Horizontal Storage Tank\",\"c\":\"Items\",\"k\":1,\"id\":-880494890},{\"s\":\"abyss.barrel.vertical\",\"n\":\"Abyss Vertical Storage Tank\",\"c\":\"Items\",\"k\":1,\"id\":-919882824},{\"s\":\"xmas.advent\",\"n\":\"Advent Calendar\",\"c\":\"Items\",\"k\":1,\"id\":-2027793839},{\"s\":\"component.box.ammo.large\",\"n\":\"Ammo Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-1593678393},{\"s\":\"anchor\",\"n\":\"Anchor\",\"c\":\"Items\",\"k\":1,\"id\":829641693},{\"s\":\"component.box.armor.large\",\"n\":\"Armor Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":1254295946},{\"s\":\"sign.artistcanvas.m\",\"n\":\"Artist Canvas Large\",\"c\":\"Items\",\"k\":5,\"id\":-946599113},{\"s\":\"sign.artistcanvas.s\",\"n\":\"Artist Canvas Medium\",\"c\":\"Items\",\"k\":5,\"id\":-946599131},{\"s\":\"sign.artistcanvas.xs\",\"n\":\"Artist Canvas Small\",\"c\":\"Items\",\"k\":5,\"id\":1609921845},{\"s\":\"sign.artistcanvas.l\",\"n\":\"Artist Canvas Standing\",\"c\":\"Items\",\"k\":5,\"id\":-946599114},{\"s\":\"sign.artistcanvas.xl\",\"n\":\"Artist Canvas XL\",\"c\":\"Items\",\"k\":5,\"id\":1562867678},{\"s\":\"sign.artistcanvas.xxl\",\"n\":\"Artist Canvas XXL\",\"c\":\"Items\",\"k\":5,\"id\":-816769770},{\"s\":\"clothing.mod.armorinsert_asbestos\",\"n\":\"Asbestos Armor Insert\",\"c\":\"Items\",\"k\":1,\"id\":-903796529},{\"s\":\"bamboo.barrel\",\"n\":\"Bamboo Barrel\",\"c\":\"Items\",\"k\":1,\"id\":-1652561344},{\"s\":\"salvaged.bamboo.shelves\",\"n\":\"Bamboo Salvaged Shelves\",\"c\":\"Items\",\"k\":10,\"id\":-2110553371},{\"s\":\"single.shallow.wall.shelves\",\"n\":\"Bamboo Wall Shelves\",\"c\":\"Items\",\"k\":10,\"id\":-193519904},{\"s\":\"bbq\",\"n\":\"Barbeque\",\"c\":\"Items\",\"k\":1,\"id\":1099314009},{\"s\":\"base.half.shelves\",\"n\":\"Base half shelves\",\"c\":\"Items\",\"k\":1,\"id\":-1024954624},{\"s\":\"base.horizontal.barrel\",\"n\":\"Base horizontal storage barrel\",\"c\":\"Items\",\"k\":1,\"id\":655356057},{\"s\":\"base.single.shelves\",\"n\":\"Base single shelves\",\"c\":\"Items\",\"k\":1,\"id\":-1695149731},{\"s\":\"base.vertical.barrel\",\"n\":\"Base vertical storage barrel\",\"c\":\"Items\",\"k\":1,\"id\":2045583965},{\"s\":\"bathtub.planter\",\"n\":\"Bath Tub Planter\",\"c\":\"Items\",\"k\":10,\"id\":-1274093662},{\"s\":\"rug.bear\",\"n\":\"Bear Skin Rug\",\"c\":\"Items\",\"k\":1,\"id\":-1104881824},{\"s\":\"bed\",\"n\":\"Bed\",\"c\":\"Items\",\"k\":1,\"id\":-1273339005},{\"s\":\"boatbuildingstation\",\"n\":\"Boat Building Station\",\"c\":\"Items\",\"k\":1,\"id\":1993693904},{\"s\":\"botabag\",\"n\":\"Bota Bag\",\"c\":\"Items\",\"k\":1,\"id\":613961768},{\"s\":\"campfire\",\"n\":\"Camp Fire\",\"c\":\"Items\",\"k\":1,\"id\":1946219319},{\"s\":\"charity.plushy.04\",\"n\":\"Cancer Research UK 2026 Plushie\",\"c\":\"Items\",\"k\":1,\"id\":2130820927},{\"s\":\"charity.plushy.01\",\"n\":\"Cancer Research UK Plushie\",\"c\":\"Items\",\"k\":1,\"id\":2130820932},{\"s\":\"cannon\",\"n\":\"Cannon\",\"c\":\"Items\",\"k\":1,\"id\":-34498533},{\"s\":\"cardtable\",\"n\":\"Card Table\",\"c\":\"Items\",\"k\":1,\"id\":1081921512},{\"s\":\"carvable.pumpkin\",\"n\":\"Carvable Pumpkin\",\"c\":\"Items\",\"k\":1,\"id\":1524980732},{\"s\":\"chair\",\"n\":\"Chair\",\"c\":\"Items\",\"k\":5,\"id\":1534542921},{\"s\":\"component.box.charcoal.large\",\"n\":\"Charcoal Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":1884461210},{\"s\":\"chickencoop\",\"n\":\"Chicken Coop\",\"c\":\"Items\",\"k\":1,\"id\":-2018158920},{\"s\":\"chineselantern\",\"n\":\"Chinese Lantern\",\"c\":\"Items\",\"k\":1,\"id\":-1916473915},{\"s\":\"chineselanternwhite\",\"n\":\"Chinese Lantern White\",\"c\":\"Items\",\"k\":1,\"id\":-770304148},{\"s\":\"arcade.machine.chippy\",\"n\":\"Chippy Arcade Game\",\"c\":\"Items\",\"k\":1,\"id\":359723196},{\"s\":\"xmasdoorwreath\",\"n\":\"Christmas Door Wreath\",\"c\":\"Items\",\"k\":1,\"id\":2009734114},{\"s\":\"xmas.lightstring\",\"n\":\"Christmas Lights\",\"c\":\"Items\",\"k\":20,\"id\":1058261682},{\"s\":\"xmas.tree\",\"n\":\"Christmas Tree\",\"c\":\"Items\",\"k\":1,\"id\":794443127},{\"s\":\"circleballoon2025\",\"n\":\"Circle Balloon\",\"c\":\"Items\",\"k\":1,\"id\":-105343718},{\"s\":\"clantable\",\"n\":\"Clan Table\",\"c\":\"Items\",\"k\":1,\"id\":486661382},{\"s\":\"mannequin\",\"n\":\"Clothing Mannequin\",\"c\":\"Items\",\"k\":1,\"id\":-1035206446},{\"s\":\"component.box.clothing.large\",\"n\":\"Clothing Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":1736620421},{\"s\":\"latexclumpballoon2025\",\"n\":\"Clump of Latex Balloons\",\"c\":\"Items\",\"k\":1,\"id\":-1440443161},{\"s\":\"mixedclumpballoon2025\",\"n\":\"Clump of Mixed Balloons\",\"c\":\"Items\",\"k\":1,\"id\":571949408},{\"s\":\"composter\",\"n\":\"Composter\",\"c\":\"Items\",\"k\":1,\"id\":-1488398114},{\"s\":\"component.box.comps.large\",\"n\":\"Comps Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-413663149},{\"s\":\"cookingworkbench\",\"n\":\"Cooking Workbench\",\"c\":\"Items\",\"k\":1,\"id\":1456143403},{\"s\":\"discord.trophy\",\"n\":\"Discord Trophy\",\"c\":\"Items\",\"k\":1,\"id\":1494014226},{\"s\":\"skidoo\",\"n\":\"Diver propulsion vehicle\",\"c\":\"Items\",\"k\":1,\"id\":-1056824343},{\"s\":\"sign.post.double\",\"n\":\"Double Sign Post\",\"c\":\"Items\",\"k\":5,\"id\":1521286012},{\"s\":\"dragondoorknocker\",\"n\":\"Dragon Door Knocker\",\"c\":\"Items\",\"k\":1,\"id\":-854270928},{\"s\":\"drone\",\"n\":\"Drone\",\"c\":\"Items\",\"k\":1,\"id\":1588492232},{\"s\":\"dropbox\",\"n\":\"Drop Box\",\"c\":\"Items\",\"k\":5,\"id\":-1519126340},{\"s\":\"easterdoorwreath\",\"n\":\"Easter Door Wreath\",\"c\":\"Items\",\"k\":1,\"id\":-979302481},{\"s\":\"iotable\",\"n\":\"Engineering Workbench\",\"c\":\"Items\",\"k\":1,\"id\":210787554},{\"s\":\"component.box.explosives.large\",\"n\":\"Explosives Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-1998423571},{\"s\":\"beanbagseatfabric\",\"n\":\"Fabric Beanbag Seat\",\"c\":\"Items\",\"k\":5,\"id\":-576866254},{\"s\":\"xmas.door.garland\",\"n\":\"Festive Doorway Garland\",\"c\":\"Items\",\"k\":10,\"id\":674734128},{\"s\":\"xmas.double.door.garland\",\"n\":\"Festive Double Doorway Garland\",\"c\":\"Items\",\"k\":10,\"id\":-1230433643},{\"s\":\"xmas.window.garland\",\"n\":\"Festive Window Garland\",\"c\":\"Items\",\"k\":10,\"id\":-1379835144},{\"s\":\"fishtrophy\",\"n\":\"Fish Trophy\",\"c\":\"Items\",\"k\":1,\"id\":-1913996738},{\"s\":\"pilot.hazmat.box.wooden\",\"n\":\"Flight Recorder Box\",\"c\":\"Items\",\"k\":1,\"id\":537946062},{\"s\":\"wallpaper.flooring\",\"n\":\"Flooring\",\"c\":\"Items\",\"k\":10,\"id\":-551431036},{\"s\":\"component.box.food.large\",\"n\":\"Food Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":1023919015},{\"s\":\"frankensteintable\",\"n\":\"Frankenstein Table\",\"c\":\"Items\",\"k\":1,\"id\":1575635062},{\"s\":\"gunrack.single.1.horizontal\",\"n\":\"Frontier Bolts Single Item Rack\",\"c\":\"Items\",\"k\":10,\"id\":1973949960},{\"s\":\"gunrack.single.3.horizontal\",\"n\":\"Frontier Horns Single Item Rack\",\"c\":\"Items\",\"k\":10,\"id\":-52398594},{\"s\":\"gunrack.single.2.horizontal\",\"n\":\"Frontier Horseshoe Single Item Rack\",\"c\":\"Items\",\"k\":10,\"id\":-849373693},{\"s\":\"frontiermirror.large\",\"n\":\"Frontier Mirror Large\",\"c\":\"Items\",\"k\":1,\"id\":242933621},{\"s\":\"frontiermirror.medium\",\"n\":\"Frontier Mirror Medium\",\"c\":\"Items\",\"k\":1,\"id\":2055695285},{\"s\":\"frontiermirror.small\",\"n\":\"Frontier Mirror Small\",\"c\":\"Items\",\"k\":1,\"id\":340210699},{\"s\":\"frontiermirror.standing\",\"n\":\"Frontier Mirror Standing\",\"c\":\"Items\",\"k\":1,\"id\":1787198294},{\"s\":\"furnace\",\"n\":\"Furnace\",\"c\":\"Items\",\"k\":1,\"id\":-1999722522},{\"s\":\"goldmirror.large\",\"n\":\"Gold Mirror large\",\"c\":\"Items\",\"k\":1,\"id\":1365234594},{\"s\":\"goldmirror.medium\",\"n\":\"Gold Mirror Medium\",\"c\":\"Items\",\"k\":1,\"id\":-1804515496},{\"s\":\"goldmirror.small\",\"n\":\"Gold Mirror Small\",\"c\":\"Items\",\"k\":1,\"id\":-1444650226},{\"s\":\"goldmirror.standing\",\"n\":\"Gold Mirror Standing\",\"c\":\"Items\",\"k\":1,\"id\":2120241887},{\"s\":\"rockingchair.rockingchair3\",\"n\":\"Green\",\"c\":\"Items\",\"k\":5,\"id\":192249897},{\"s\":\"component.box.guns.large\",\"n\":\"Guns Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-544295594},{\"s\":\"half.bamboo.shelves\",\"n\":\"Half Height Bamboo Shelves\",\"c\":\"Items\",\"k\":10,\"id\":-1923843855},{\"s\":\"halfheight.industrial.shelves\",\"n\":\"Half Height Industrial Shelves\",\"c\":\"Items\",\"k\":10,\"id\":786458957},{\"s\":\"hazmat.plushy\",\"n\":\"Hazmat Plushy\",\"c\":\"Items\",\"k\":1,\"id\":1578317134},{\"s\":\"hazmatyoutooz\",\"n\":\"Hazmat Youtooz\",\"c\":\"Items\",\"k\":1,\"id\":-1696379844},{\"s\":\"heartballoon2025\",\"n\":\"Heart Balloon\",\"c\":\"Items\",\"k\":1,\"id\":362863314},{\"s\":\"heavy.scientist.plushie\",\"n\":\"Heavy Scientist Plushie\",\"c\":\"Items\",\"k\":1,\"id\":146221721},{\"s\":\"heavyscientistyoutooz\",\"n\":\"Heavy Scientist Youtooz\",\"c\":\"Items\",\"k\":1,\"id\":-722629980},{\"s\":\"hitchtroughcombo\",\"n\":\"Hitch & Trough\",\"c\":\"Items\",\"k\":1,\"id\":1160881421},{\"s\":\"hobobarrel\",\"n\":\"Hobo Barrel\",\"c\":\"Items\",\"k\":1,\"id\":-1442559428},{\"s\":\"gunrack.horizontal\",\"n\":\"Horizontal Weapon Rack\",\"c\":\"Items\",\"k\":10,\"id\":-246672609},{\"s\":\"sign.wooden.huge\",\"n\":\"Huge Wooden Sign\",\"c\":\"Items\",\"k\":1,\"id\":-143132326},{\"s\":\"charity.plushie.05\",\"n\":\"Humane World Charity 2026 Plushie\",\"c\":\"Items\",\"k\":1,\"id\":374496151},{\"s\":\"sculpture.ice\",\"n\":\"Ice Sculpture\",\"c\":\"Items\",\"k\":1,\"id\":504109620},{\"s\":\"chair.icethrone\",\"n\":\"Ice Throne\",\"c\":\"Items\",\"k\":5,\"id\":-1944704288},{\"s\":\"industrial.storage.horizontal\",\"n\":\"Industrial Storage Horizontal Barrel\",\"c\":\"Items\",\"k\":1,\"id\":-1019111952},{\"s\":\"industrial.storage.vertical\",\"n\":\"Industrial Storage Vertical Barrel\",\"c\":\"Items\",\"k\":1,\"id\":-883975138},{\"s\":\"wall.shallow.industrial.shelves\",\"n\":\"Industrial Wall Shelves\",\"c\":\"Items\",\"k\":10,\"id\":-265202949},{\"s\":\"jackolantern.angry\",\"n\":\"Jack O Lantern Angry\",\"c\":\"Items\",\"k\":1,\"id\":1242482355},{\"s\":\"jackolantern.happy\",\"n\":\"Jack O Lantern Happy\",\"c\":\"Items\",\"k\":1,\"id\":-1824943010},{\"s\":\"kayak\",\"n\":\"Kayak\",\"c\":\"Items\",\"k\":1,\"id\":190184021},{\"s\":\"krieg.storage.vertical\",\"n\":\"Krieg Storage Barrel\",\"c\":\"Items\",\"k\":1,\"id\":1305765685},{\"s\":\"krieg.storage.horizontal\",\"n\":\"Krieg Storage Crates\",\"c\":\"Items\",\"k\":1,\"id\":652793345},{\"s\":\"photoframe.landscape\",\"n\":\"Landscape Photo Frame\",\"c\":\"Items\",\"k\":1,\"id\":1697996440},{\"s\":\"sign.pictureframe.landscape\",\"n\":\"Landscape Picture Frame\",\"c\":\"Items\",\"k\":5,\"id\":-845557339},{\"s\":\"lantern\",\"n\":\"Lantern\",\"c\":\"Items\",\"k\":1,\"id\":1658229558},{\"s\":\"sign.hanging.banner.large\",\"n\":\"Large Banner Hanging\",\"c\":\"Items\",\"k\":5,\"id\":23352662},{\"s\":\"sign.pole.banner.large\",\"n\":\"Large Banner on pole\",\"c\":\"Items\",\"k\":5,\"id\":2070189026},{\"s\":\"furnace.large\",\"n\":\"Large Furnace\",\"c\":\"Items\",\"k\":1,\"id\":-1992717673},{\"s\":\"huntingtrophylarge\",\"n\":\"Large Hunting Trophy\",\"c\":\"Items\",\"k\":1,\"id\":960673498},{\"s\":\"industrial.furnace.large\",\"n\":\"Large Industrial Furnace\",\"c\":\"Items\",\"k\":1,\"id\":1868984394},{\"s\":\"photoframe.large\",\"n\":\"Large Photo Frame\",\"c\":\"Items\",\"k\":1,\"id\":1205084994},{\"s\":\"planter.large\",\"n\":\"Large Planter Box\",\"c\":\"Items\",\"k\":10,\"id\":1581210395},{\"s\":\"box.wooden.large\",\"n\":\"Large Wood Box\",\"c\":\"Items\",\"k\":1,\"id\":833533164},{\"s\":\"sign.wooden.large\",\"n\":\"Large Wooden Sign\",\"c\":\"Items\",\"k\":1,\"id\":1153652756},{\"s\":\"latexballoon2025\",\"n\":\"Latex Balloon\",\"c\":\"Items\",\"k\":1,\"id\":1295301598},{\"s\":\"clothing.mod.armorinsert_lead\",\"n\":\"Lead Armor Insert\",\"c\":\"Items\",\"k\":1,\"id\":2047789913},{\"s\":\"beanbagseatleather\",\"n\":\"Leather Beanbag Seat\",\"c\":\"Items\",\"k\":5,\"id\":-1220928936},{\"s\":\"legacyfurnace\",\"n\":\"Legacy Furnace\",\"c\":\"Items\",\"k\":1,\"id\":-1310391395},{\"s\":\"lightup.large\",\"n\":\"Light-Up Frame Large\",\"c\":\"Items\",\"k\":5,\"id\":242421166},{\"s\":\"lightupframe.medium\",\"n\":\"Light-Up Frame Medium\",\"c\":\"Items\",\"k\":5,\"id\":-1294739579},{\"s\":\"lightupframe.small\",\"n\":\"Light-Up Frame Small\",\"c\":\"Items\",\"k\":5,\"id\":1691223771},{\"s\":\"lightupframe.standing\",\"n\":\"Light-Up Frame Standing\",\"c\":\"Items\",\"k\":5,\"id\":1950013766},{\"s\":\"lightup.xl\",\"n\":\"Light-Up Frame XL\",\"c\":\"Items\",\"k\":5,\"id\":1801656689},{\"s\":\"lightup.xxl\",\"n\":\"Light-Up Frame XXL\",\"c\":\"Items\",\"k\":5,\"id\":1447138977},{\"s\":\"lightupmirror.large\",\"n\":\"Light-Up Mirror Large\",\"c\":\"Items\",\"k\":1,\"id\":450531685},{\"s\":\"lightupmirror.medium\",\"n\":\"Light-Up Mirror Medium\",\"c\":\"Items\",\"k\":1,\"id\":1028889957},{\"s\":\"lightupmirror.small\",\"n\":\"Light-Up Mirror Small\",\"c\":\"Items\",\"k\":1,\"id\":-389796733},{\"s\":\"lightupmirror.standing\",\"n\":\"Light-Up Mirror Standing\",\"c\":\"Items\",\"k\":1,\"id\":1916016738},{\"s\":\"locker\",\"n\":\"Locker\",\"c\":\"Items\",\"k\":1,\"id\":-110921842},{\"s\":\"mailbox\",\"n\":\"Mail Box\",\"c\":\"Items\",\"k\":1,\"id\":-586784898},{\"s\":\"medieval.box.wooden.large\",\"n\":\"Medieval Large Wood Box\",\"c\":\"Items\",\"k\":1,\"id\":814297925},{\"s\":\"sign.wooden.medium\",\"n\":\"Medium Wooden Sign\",\"c\":\"Items\",\"k\":1,\"id\":-1819233322},{\"s\":\"component.box.meds.large\",\"n\":\"Meds Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-800824218},{\"s\":\"clothing.mod.armorinsert_metal\",\"n\":\"Metal Armor Insert\",\"c\":\"Items\",\"k\":1,\"id\":1099611828},{\"s\":\"bar.stool.metal\",\"n\":\"Metal Bar Stool\",\"c\":\"Items\",\"k\":5,\"id\":-1639742441},{\"s\":\"component.box.metal.large\",\"n\":\"Metal Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":1465782238},{\"s\":\"minecart.planter\",\"n\":\"Minecart Planter\",\"c\":\"Items\",\"k\":10,\"id\":1361520181},{\"s\":\"mixingtable\",\"n\":\"Mixing Table\",\"c\":\"Items\",\"k\":1,\"id\":1259919256},{\"s\":\"sign.post.town\",\"n\":\"One Sided Town Sign Post\",\"c\":\"Items\",\"k\":5,\"id\":-1832422579},{\"s\":\"component.box.ore.large\",\"n\":\"Ore Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":992944937},{\"s\":\"goldframe.large\",\"n\":\"Ornate Frame large\",\"c\":\"Items\",\"k\":5,\"id\":-996235148},{\"s\":\"goldframe.medium\",\"n\":\"Ornate Frame Medium\",\"c\":\"Items\",\"k\":5,\"id\":-1901993050},{\"s\":\"goldframe.small\",\"n\":\"Ornate Frame Small\",\"c\":\"Items\",\"k\":5,\"id\":-1836526520},{\"s\":\"goldframe.standing\",\"n\":\"Ornate Frame Standing\",\"c\":\"Items\",\"k\":5,\"id\":-1528767189},{\"s\":\"goldframe.xl\",\"n\":\"Ornate Frame XL\",\"c\":\"Items\",\"k\":5,\"id\":-1430299277},{\"s\":\"goldframe.xxl\",\"n\":\"Ornate Frame XXL\",\"c\":\"Items\",\"k\":5,\"id\":-1322332389},{\"s\":\"map\",\"n\":\"Paper Map\",\"c\":\"Items\",\"k\":1,\"id\":696029452},{\"s\":\"plank\",\"n\":\"Plank\",\"c\":\"Items\",\"k\":1,\"id\":-952411326},{\"s\":\"pookie.bear\",\"n\":\"Pookie Bear\",\"c\":\"Items\",\"k\":1,\"id\":-1651220691},{\"s\":\"easel\",\"n\":\"Portable Easel\",\"c\":\"Items\",\"k\":1,\"id\":-1779203452},{\"s\":\"photoframe.portrait\",\"n\":\"Portrait Photo Frame\",\"c\":\"Items\",\"k\":1,\"id\":1729712564},{\"s\":\"sign.pictureframe.portrait\",\"n\":\"Portrait Picture Frame\",\"c\":\"Items\",\"k\":5,\"id\":-1370759135},{\"s\":\"ptboat\",\"n\":\"PT Boat\",\"c\":\"Items\",\"k\":1,\"id\":1933140008},{\"s\":\"rail.road.planter\",\"n\":\"Rail Road Planter\",\"c\":\"Items\",\"k\":10,\"id\":615112838},{\"s\":\"box.repair.bench\",\"n\":\"Repair Bench\",\"c\":\"Items\",\"k\":1,\"id\":803222026},{\"s\":\"research.table\",\"n\":\"Research Table\",\"c\":\"Items\",\"k\":1,\"id\":-1861522751},{\"s\":\"rhib\",\"n\":\"RHIB\",\"c\":\"Items\",\"k\":1,\"id\":1394042569},{\"s\":\"rockingchair\",\"n\":\"Rocking Chair\",\"c\":\"Items\",\"k\":5,\"id\":-1863063690},{\"s\":\"charity.plushy.03\",\"n\":\"Ronald McDonald House UK 2026 Plushie\",\"c\":\"Items\",\"k\":1,\"id\":2130820934},{\"s\":\"charity.plushy.02\",\"n\":\"Ronald McDonald House UK Plushie\",\"c\":\"Items\",\"k\":1,\"id\":2130820933},{\"s\":\"rowboat\",\"n\":\"Rowboat\",\"c\":\"Items\",\"k\":1,\"id\":1878053256},{\"s\":\"rug\",\"n\":\"Rug\",\"c\":\"Items\",\"k\":1,\"id\":-1985799200},{\"s\":\"sail\",\"n\":\"Sail\",\"c\":\"Items\",\"k\":1,\"id\":405905095},{\"s\":\"chair.ejector.seat\",\"n\":\"Salvaged Ejector Seat\",\"c\":\"Items\",\"k\":5,\"id\":-463012608},{\"s\":\"salvaged.industrial.shelves\",\"n\":\"Salvaged Industrial Shelves\",\"c\":\"Items\",\"k\":10,\"id\":-1018026008},{\"s\":\"shelves\",\"n\":\"Salvaged Shelves\",\"c\":\"Items\",\"k\":10,\"id\":1950721418},{\"s\":\"scarecrow\",\"n\":\"Scarecrow\",\"c\":\"Items\",\"k\":5,\"id\":177226991},{\"s\":\"scientist.plushie\",\"n\":\"Scientist Plushie\",\"c\":\"Items\",\"k\":1,\"id\":445662288},{\"s\":\"scrapmirror.large\",\"n\":\"Scrap Mirror Large\",\"c\":\"Items\",\"k\":1,\"id\":-82758111},{\"s\":\"scrapmirror.medium\",\"n\":\"Scrap Mirror Medium\",\"c\":\"Items\",\"k\":1,\"id\":839738457},{\"s\":\"scrapmirror.small\",\"n\":\"Scrap Mirror Small\",\"c\":\"Items\",\"k\":1,\"id\":-1050697733},{\"s\":\"scrapmirror.standing\",\"n\":\"Scrap Mirror Standing\",\"c\":\"Items\",\"k\":1,\"id\":-1380144986},{\"s\":\"component.box.scrap.large\",\"n\":\"Scrap Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":574701440},{\"s\":\"secretlabchair\",\"n\":\"Secretlab Chair\",\"c\":\"Items\",\"k\":5,\"id\":567871954},{\"s\":\"scrapframe.large\",\"n\":\"Shutter Frame large\",\"c\":\"Items\",\"k\":5,\"id\":-1094453063},{\"s\":\"scrapframe.medium\",\"n\":\"Shutter Frame Medium\",\"c\":\"Items\",\"k\":5,\"id\":-1060567807},{\"s\":\"scrapframe.small\",\"n\":\"Shutter Frame Small\",\"c\":\"Items\",\"k\":5,\"id\":-498301781},{\"s\":\"scrapframe.standing\",\"n\":\"Shutter Frame Standing\",\"c\":\"Items\",\"k\":5,\"id\":-1774190142},{\"s\":\"scrapframe.xl\",\"n\":\"Shutter Frame XL\",\"c\":\"Items\",\"k\":5,\"id\":-1244287686},{\"s\":\"scrapframe.xxl\",\"n\":\"Shutter Frame XXL\",\"c\":\"Items\",\"k\":5,\"id\":-1211801774},{\"s\":\"plantpot.single\",\"n\":\"Single Plant Pot\",\"c\":\"Items\",\"k\":5,\"id\":-430416124},{\"s\":\"sign.post.single\",\"n\":\"Single Sign Post\",\"c\":\"Items\",\"k\":5,\"id\":1542290441},{\"s\":\"skulldoorknocker\",\"n\":\"Skull Door Knocker\",\"c\":\"Items\",\"k\":1,\"id\":-216116642},{\"s\":\"skull_fire_pit\",\"n\":\"Skull Fire Pit\",\"c\":\"Items\",\"k\":1,\"id\":553887414},{\"s\":\"sleepingbag\",\"n\":\"Sleeping Bag\",\"c\":\"Items\",\"k\":1,\"id\":-1754948969},{\"s\":\"smallengine\",\"n\":\"Small Boat Engine\",\"c\":\"Items\",\"k\":1,\"id\":-2115299615},{\"s\":\"huntingtrophysmall\",\"n\":\"Small Hunting Trophy\",\"c\":\"Items\",\"k\":1,\"id\":-869598982},{\"s\":\"small.oil.refinery\",\"n\":\"Small Oil Refinery\",\"c\":\"Items\",\"k\":1,\"id\":-1293296287},{\"s\":\"planter.small\",\"n\":\"Small Planter Box\",\"c\":\"Items\",\"k\":10,\"id\":1903654061},{\"s\":\"small_ramp\",\"n\":\"Small Ramp\",\"c\":\"Items\",\"k\":1,\"id\":-158718378},{\"s\":\"stash.small\",\"n\":\"Small Stash\",\"c\":\"Items\",\"k\":5,\"id\":-369760990},{\"s\":\"stocking.small\",\"n\":\"Small Stocking\",\"c\":\"Items\",\"k\":5,\"id\":1668858301},{\"s\":\"sign.wooden.small\",\"n\":\"Small Wooden Sign\",\"c\":\"Items\",\"k\":1,\"id\":-1138208076},{\"s\":\"venom.snake\",\"n\":\"Snake Venom\",\"c\":\"Items\",\"k\":10,\"id\":-870140677},{\"s\":\"snowman\",\"n\":\"Snowman\",\"c\":\"Items\",\"k\":5,\"id\":1629293099},{\"s\":\"sofa\",\"n\":\"Sofa\",\"c\":\"Items\",\"k\":2,\"id\":-555122905},{\"s\":\"sofa.pattern\",\"n\":\"Sofa - Pattern\",\"c\":\"Items\",\"k\":2,\"id\":782422285},{\"s\":\"speechbubbleballoon2025\",\"n\":\"Speech Bubble Balloon\",\"c\":\"Items\",\"k\":1,\"id\":963400638},{\"s\":\"spinner.wheel\",\"n\":\"Spinning Wheel\",\"c\":\"Items\",\"k\":1,\"id\":-1100422738},{\"s\":\"starballoon2025\",\"n\":\"Star Balloon\",\"c\":\"Items\",\"k\":1,\"id\":-1782127806},{\"s\":\"steeringwheel.boat\",\"n\":\"Steering Wheel\",\"c\":\"Items\",\"k\":1,\"id\":-1866909924},{\"s\":\"fireplace.stone\",\"n\":\"Stone Fireplace\",\"c\":\"Items\",\"k\":1,\"id\":-1535621066},{\"s\":\"sculpture.rock\",\"n\":\"Stone Sculpture\",\"c\":\"Items\",\"k\":1,\"id\":1852905808},{\"s\":\"component.box.stone.large\",\"n\":\"Stone Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":94971664},{\"s\":\"storage_barrel_c\",\"n\":\"Storage Barrel Horizontal\",\"c\":\"Items\",\"k\":1,\"id\":-1421257350},{\"s\":\"storage_barrel_b\",\"n\":\"Storage Barrel Vertical\",\"c\":\"Items\",\"k\":1,\"id\":1307626005},{\"s\":\"component.box.sulfur.large\",\"n\":\"Sulfur Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-10594280},{\"s\":\"stocking.large\",\"n\":\"SUPER Stocking\",\"c\":\"Items\",\"k\":1,\"id\":-465682601},{\"s\":\"fishtrap.small\",\"n\":\"Survival Fish Trap\",\"c\":\"Items\",\"k\":5,\"id\":559147458},{\"s\":\"table\",\"n\":\"Table\",\"c\":\"Items\",\"k\":1,\"id\":593465182},{\"s\":\"sign.pictureframe.tall\",\"n\":\"Tall Picture Frame\",\"c\":\"Items\",\"k\":5,\"id\":121049755},{\"s\":\"gunrack_tall.horizontal\",\"n\":\"Tall Weapon Rack\",\"c\":\"Items\",\"k\":10,\"id\":240752557},{\"s\":\"rockingchair.rockingchair2\",\"n\":\"Teal\",\"c\":\"Items\",\"k\":5,\"id\":1758333838},{\"s\":\"component.box.tools.large\",\"n\":\"Tools Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":679690962},{\"s\":\"torchholder\",\"n\":\"Torch Holder\",\"c\":\"Items\",\"k\":1,\"id\":446206234},{\"s\":\"planter.triangle\",\"n\":\"Triangle Planter Box\",\"c\":\"Items\",\"k\":10,\"id\":-280812482},{\"s\":\"triangle.rail.road.planter\",\"n\":\"Triangle Rail Road Planter\",\"c\":\"Items\",\"k\":10,\"id\":647240052},{\"s\":\"tugboat\",\"n\":\"Tugboat\",\"c\":\"Items\",\"k\":1,\"id\":-561148628},{\"s\":\"tunalight\",\"n\":\"Tuna Can Lamp\",\"c\":\"Items\",\"k\":1,\"id\":-1478445584},{\"s\":\"twitchrivals2025sofa\",\"n\":\"Twitch Rivals 2025 Sofa\",\"c\":\"Items\",\"k\":2,\"id\":1604092540},{\"s\":\"trophy\",\"n\":\"Twitch Rivals Trophy\",\"c\":\"Items\",\"k\":1,\"id\":975983052},{\"s\":\"trophy2023\",\"n\":\"Twitch Rivals Trophy 2023\",\"c\":\"Items\",\"k\":1,\"id\":-901370585},{\"s\":\"sign.hanging\",\"n\":\"Two Sided Hanging Sign\",\"c\":\"Items\",\"k\":5,\"id\":1205607945},{\"s\":\"sign.hanging.ornate\",\"n\":\"Two Sided Ornate Hanging Sign\",\"c\":\"Items\",\"k\":5,\"id\":-1647846966},{\"s\":\"sign.post.town.roof\",\"n\":\"Two Sided Town Sign Post\",\"c\":\"Items\",\"k\":5,\"id\":826309791},{\"s\":\"storage_barrel_a\",\"n\":\"Unused Storage Barrel Vertical\",\"c\":\"Items\",\"k\":1,\"id\":-258457936},{\"s\":\"vending.machine\",\"n\":\"Vending Machine\",\"c\":\"Items\",\"k\":1,\"id\":198438816},{\"s\":\"walkietalkie\",\"n\":\"Walkie Talkie\",\"c\":\"Items\",\"k\":1,\"id\":-1416322465},{\"s\":\"electric.wallcabinet\",\"n\":\"Wall Cabinet\",\"c\":\"Items\",\"k\":1,\"id\":656829501},{\"s\":\"wallpaper.ceiling\",\"n\":\"Wallpaper Ceiling\",\"c\":\"Items\",\"k\":10,\"id\":1730664641},{\"s\":\"wantedposter\",\"n\":\"Wanted Poster\",\"c\":\"Items\",\"k\":1,\"id\":-1344017968},{\"s\":\"wantedposter.wantedposter2\",\"n\":\"Wanted Poster 2\",\"c\":\"Items\",\"k\":1,\"id\":301063058},{\"s\":\"wantedposter.wantedposter3\",\"n\":\"Wanted Poster 3\",\"c\":\"Items\",\"k\":1,\"id\":-1265020883},{\"s\":\"wantedposter.wantedposter4\",\"n\":\"Wanted Poster 4\",\"c\":\"Items\",\"k\":1,\"id\":1463862472},{\"s\":\"water.barrel\",\"n\":\"Water Barrel\",\"c\":\"Items\",\"k\":1,\"id\":-1863559151},{\"s\":\"water.purifier\",\"n\":\"Water Purifier\",\"c\":\"Items\",\"k\":1,\"id\":2114754781},{\"s\":\"gunrack_stand\",\"n\":\"Weapon Rack Stand\",\"c\":\"Items\",\"k\":10,\"id\":1132603396},{\"s\":\"wicker.barrel\",\"n\":\"Wicker Barrel\",\"c\":\"Items\",\"k\":1,\"id\":-526026171},{\"s\":\"gunrack_wide.horizontal\",\"n\":\"Wide Weapon Rack\",\"c\":\"Items\",\"k\":10,\"id\":-96256997},{\"s\":\"woodframe.large\",\"n\":\"Wood Frame Large\",\"c\":\"Items\",\"k\":5,\"id\":-635951327},{\"s\":\"woodframe.medium\",\"n\":\"Wood Frame Medium\",\"c\":\"Items\",\"k\":5,\"id\":-1541706279},{\"s\":\"woodframe.small\",\"n\":\"Wood Frame Small\",\"c\":\"Items\",\"k\":5,\"id\":-1476278729},{\"s\":\"woodframe.standing\",\"n\":\"Wood Frame Standing\",\"c\":\"Items\",\"k\":5,\"id\":1769475390},{\"s\":\"woodmirror.large\",\"n\":\"Wood Mirror Large\",\"c\":\"Items\",\"k\":1,\"id\":1312679249},{\"s\":\"woodmirror.medium\",\"n\":\"Wood Mirror Medium\",\"c\":\"Items\",\"k\":1,\"id\":756125481},{\"s\":\"woodmirror.small\",\"n\":\"Wood Mirror Small\",\"c\":\"Items\",\"k\":1,\"id\":-1497205569},{\"s\":\"woodmirror.standing\",\"n\":\"Wood Mirror Standing\",\"c\":\"Items\",\"k\":1,\"id\":723407026},{\"s\":\"box.wooden\",\"n\":\"Wood Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":-180129657},{\"s\":\"component.box.wood.large\",\"n\":\"Wood Storage Box\",\"c\":\"Items\",\"k\":1,\"id\":1044081720},{\"s\":\"clothing.mod.armorinsert_wood\",\"n\":\"Wooden Armor Insert\",\"c\":\"Items\",\"k\":1,\"id\":-593892112},{\"s\":\"bar.stool.wood\",\"n\":\"Wooden Bar Stool\",\"c\":\"Items\",\"k\":5,\"id\":-1444366079},{\"s\":\"workbench1\",\"n\":\"Workbench Level 1\",\"c\":\"Items\",\"k\":1,\"id\":1524187186},{\"s\":\"workbench2\",\"n\":\"Workbench Level 2\",\"c\":\"Items\",\"k\":1,\"id\":-41896755},{\"s\":\"workbench3\",\"n\":\"Workbench Level 3\",\"c\":\"Items\",\"k\":1,\"id\":-1607980696},{\"s\":\"discord.plushie\",\"n\":\"Wumpus Plush\",\"c\":\"Items\",\"k\":1,\"id\":-1800102806},{\"s\":\"sign.pictureframe.xl\",\"n\":\"XL Picture Frame\",\"c\":\"Items\",\"k\":5,\"id\":-996185386},{\"s\":\"sign.pictureframe.xxl\",\"n\":\"XXL Picture Frame\",\"c\":\"Items\",\"k\":5,\"id\":98508942},{\"s\":\"antiradpills\",\"n\":\"Anti-Radiation Pills\",\"c\":\"Medical\",\"k\":10,\"id\":-1432674913},{\"s\":\"bandage\",\"n\":\"Bandage\",\"c\":\"Medical\",\"k\":3,\"id\":-2072273936},{\"s\":\"blood\",\"n\":\"Blood\",\"c\":\"Medical\",\"k\":1000,\"id\":1776460938},{\"s\":\"largemedkit\",\"n\":\"Large Medkit\",\"c\":\"Medical\",\"k\":1,\"id\":254522515},{\"s\":\"medical.honey.bandage\",\"n\":\"Medical Honey Bandage\",\"c\":\"Medical\",\"k\":3,\"id\":-75264812},{\"s\":\"syringe.medical\",\"n\":\"Medical Syringe\",\"c\":\"Medical\",\"k\":2,\"id\":1079279582},{\"s\":\"2module car\",\"n\":\"2 Module Car\",\"c\":\"Misc\",\"k\":1,\"id\":-866121090},{\"s\":\"2module.car\",\"n\":\"2 Module Car\",\"c\":\"Misc\",\"k\":1,\"id\":-866121090},{\"s\":\"2module car chassis\",\"n\":\"2 Module Car Chassis\",\"c\":\"Misc\",\"k\":1,\"id\":-226151558},{\"s\":\"2module.car.chassis\",\"n\":\"2 Module Car Chassis\",\"c\":\"Misc\",\"k\":1,\"id\":-226151558},{\"s\":\"3module car\",\"n\":\"3 Module Car\",\"c\":\"Misc\",\"k\":1,\"id\":-831725027},{\"s\":\"3module.car\",\"n\":\"3 Module Car\",\"c\":\"Misc\",\"k\":1,\"id\":-831725027},{\"s\":\"3module car chassis\",\"n\":\"3 Module Car Chassis\",\"c\":\"Misc\",\"k\":1,\"id\":1482871705},{\"s\":\"3module.car.chassis\",\"n\":\"3 Module Car Chassis\",\"c\":\"Misc\",\"k\":1,\"id\":1482871705},{\"s\":\"4module car\",\"n\":\"4 Module Car\",\"c\":\"Misc\",\"k\":1,\"id\":-935322684},{\"s\":\"4module.car\",\"n\":\"4 Module Car\",\"c\":\"Misc\",\"k\":1,\"id\":-935322684},{\"s\":\"4module car chassis\",\"n\":\"4 Module Car Chassis\",\"c\":\"Misc\",\"k\":1,\"id\":385099196},{\"s\":\"4module.car.chassis\",\"n\":\"4 Module Car Chassis\",\"c\":\"Misc\",\"k\":1,\"id\":385099196},{\"s\":\"apartment.master_key\",\"n\":\"Apartment Key\",\"c\":\"Misc\",\"k\":1,\"id\":1664052604},{\"s\":\"attackhelicopter\",\"n\":\"Attack Helicopter\",\"c\":\"Misc\",\"k\":1,\"id\":1113514903},{\"s\":\"bicycle\",\"n\":\"Bicycle\",\"c\":\"Misc\",\"k\":1,\"id\":821588319},{\"s\":\"keycard_blue\",\"n\":\"Blue Keycard\",\"c\":\"Misc\",\"k\":1,\"id\":-484206264},{\"s\":\"blueprintbase\",\"n\":\"Blueprint\",\"c\":\"Misc\",\"k\":1000,\"id\":-996920608},{\"s\":\"easter.bronzeegg\",\"n\":\"Bronze Egg\",\"c\":\"Misc\",\"k\":10,\"id\":844440409},{\"s\":\"caboose\",\"n\":\"Caboose\",\"c\":\"Misc\",\"k\":1,\"id\":1732236518},{\"s\":\"captainslog\",\"n\":\"Captain's Log\",\"c\":\"Misc\",\"k\":1,\"id\":1230691307},{\"s\":\"coffin.storage\",\"n\":\"Coffin\",\"c\":\"Misc\",\"k\":1,\"id\":573676040},{\"s\":\"cursedcauldron\",\"n\":\"Cursed Cauldron\",\"c\":\"Misc\",\"k\":1,\"id\":1242522330},{\"s\":\"xmas.decoration.baubels\",\"n\":\"Decorative Baubels\",\"c\":\"Misc\",\"k\":1,\"id\":-1667224349},{\"s\":\"xmas.decoration.gingerbreadmen\",\"n\":\"Decorative Gingerbread Men\",\"c\":\"Misc\",\"k\":1,\"id\":1686524871},{\"s\":\"xmas.decoration.pinecone\",\"n\":\"Decorative Pinecones\",\"c\":\"Misc\",\"k\":1,\"id\":-129230242},{\"s\":\"xmas.decoration.candycanes\",\"n\":\"Decorative Plastic Candy Canes\",\"c\":\"Misc\",\"k\":1,\"id\":-209869746},{\"s\":\"xmas.decoration.tinsel\",\"n\":\"Decorative Tinsel\",\"c\":\"Misc\",\"k\":1,\"id\":2106561762},{\"s\":\"door.key\",\"n\":\"Door Key\",\"c\":\"Misc\",\"k\":1,\"id\":-1112793865},{\"s\":\"submarineduo\",\"n\":\"Duo Submarine\",\"c\":\"Misc\",\"k\":1,\"id\":1015352446},{\"s\":\"easterbasket\",\"n\":\"Egg Basket\",\"c\":\"Misc\",\"k\":1,\"id\":1856217390},{\"s\":\"fogmachine\",\"n\":\"Fogger-3000\",\"c\":\"Misc\",\"k\":1,\"id\":-1973785141},{\"s\":\"giantcandycanedecor\",\"n\":\"Giant Candy Decor\",\"c\":\"Misc\",\"k\":1,\"id\":-695124222},{\"s\":\"giantlollipops\",\"n\":\"Giant Lollipop Decor\",\"c\":\"Misc\",\"k\":1,\"id\":282103175},{\"s\":\"easter.goldegg\",\"n\":\"Gold Egg\",\"c\":\"Misc\",\"k\":10,\"id\":-1002156085},{\"s\":\"gravestone\",\"n\":\"Gravestone\",\"c\":\"Misc\",\"k\":1,\"id\":809199956},{\"s\":\"wall.graveyard.fence\",\"n\":\"Graveyard Fence\",\"c\":\"Misc\",\"k\":10,\"id\":-1679267738},{\"s\":\"keycard_green\",\"n\":\"Green Keycard\",\"c\":\"Misc\",\"k\":1,\"id\":37122747},{\"s\":\"halloween.candy\",\"n\":\"Halloween Candy\",\"c\":\"Misc\",\"k\":1000,\"id\":-888153050},{\"s\":\"head.bag\",\"n\":\"Head Bag\",\"c\":\"Misc\",\"k\":1,\"id\":209218760},{\"s\":\"horse\",\"n\":\"Horse\",\"c\":\"Misc\",\"k\":1,\"id\":82772055},{\"s\":\"hab\",\"n\":\"Hot Air Balloon\",\"c\":\"Misc\",\"k\":1,\"id\":696029539},{\"s\":\"largecandles\",\"n\":\"Large Candle Set\",\"c\":\"Misc\",\"k\":1,\"id\":-489848205},{\"s\":\"halloween.lootbag.large\",\"n\":\"Large Loot Bag\",\"c\":\"Misc\",\"k\":10,\"id\":479292118},{\"s\":\"xmas.present.large\",\"n\":\"Large Present\",\"c\":\"Misc\",\"k\":1,\"id\":-1622660759},{\"s\":\"locomotive\",\"n\":\"Locomotive\",\"c\":\"Misc\",\"k\":1,\"id\":-2027988285},{\"s\":\"halloween.lootbag.medium\",\"n\":\"Medium Loot Bag\",\"c\":\"Misc\",\"k\":10,\"id\":1899610628},{\"s\":\"xmas.present.medium\",\"n\":\"Medium Present\",\"c\":\"Misc\",\"k\":5,\"id\":756517185},{\"s\":\"minicopter\",\"n\":\"Minicopter\",\"c\":\"Misc\",\"k\":1,\"id\":-1334255764},{\"s\":\"minihelicopter.repair\",\"n\":\"Minicopter\",\"c\":\"Misc\",\"k\":1,\"id\":1426574435},{\"s\":\"mlrs\",\"n\":\"MLRS\",\"c\":\"Misc\",\"k\":1,\"id\":-1449152644},{\"s\":\"motorbike\",\"n\":\"Motorbike\",\"c\":\"Misc\",\"k\":1,\"id\":-1417478274},{\"s\":\"motorbike_sidecar\",\"n\":\"Motorbike With Sidecar\",\"c\":\"Misc\",\"k\":1,\"id\":1869224826},{\"s\":\"note\",\"n\":\"Note\",\"c\":\"Misc\",\"k\":1,\"id\":1414245162},{\"s\":\"easter.paintedeggs\",\"n\":\"Painted Egg\",\"c\":\"Misc\",\"k\":1000,\"id\":-126305173},{\"s\":\"photo\",\"n\":\"Photograph\",\"c\":\"Misc\",\"k\":1,\"id\":62577426},{\"s\":\"pumpkinbasket\",\"n\":\"Pumpkin Basket\",\"c\":\"Misc\",\"k\":1,\"id\":1346158228},{\"s\":\"keycard_red\",\"n\":\"Red Keycard\",\"c\":\"Misc\",\"k\":1,\"id\":-1880870149},{\"s\":\"rustige_egg_h\",\"n\":\"Rustigé Egg - Amethyst\",\"c\":\"Misc\",\"k\":1,\"id\":-173268138},{\"s\":\"rustige_egg_b\",\"n\":\"Rustigé Egg - Blue\",\"c\":\"Misc\",\"k\":1,\"id\":-173268132},{\"s\":\"rustige_egg_g\",\"n\":\"Rustigé Egg - Cerulean\",\"c\":\"Misc\",\"k\":1,\"id\":-173268127},{\"s\":\"rustige_egg_e\",\"n\":\"Rustigé Egg - Green\",\"c\":\"Misc\",\"k\":1,\"id\":-173268125},{\"s\":\"rustige_egg_d\",\"n\":\"Rustigé Egg - Ivory\",\"c\":\"Misc\",\"k\":1,\"id\":-173268126},{\"s\":\"rustige_egg_c\",\"n\":\"Rustigé Egg - Purple\",\"c\":\"Misc\",\"k\":1,\"id\":-173268131},{\"s\":\"rustige_egg_a\",\"n\":\"Rustigé Egg - Red\",\"c\":\"Misc\",\"k\":1,\"id\":-173268129},{\"s\":\"rustige_egg_f\",\"n\":\"Rustigé Egg - White\",\"c\":\"Misc\",\"k\":1,\"id\":-173268128},{\"s\":\"scraptransportheli\",\"n\":\"Scrap Transport Helicopter\",\"c\":\"Misc\",\"k\":1,\"id\":375473148},{\"s\":\"sedan\",\"n\":\"Sedan\",\"c\":\"Misc\",\"k\":1,\"id\":-374457631},{\"s\":\"sickle\",\"n\":\"Sickle\",\"c\":\"Misc\",\"k\":1,\"id\":-1368584029},{\"s\":\"easter.silveregg\",\"n\":\"Silver Egg\",\"c\":\"Misc\",\"k\":10,\"id\":1757265204},{\"s\":\"smallcandles\",\"n\":\"Small Candle Set\",\"c\":\"Misc\",\"k\":1,\"id\":-2058362263},{\"s\":\"halloween.lootbag.small\",\"n\":\"Small Loot Bag\",\"c\":\"Misc\",\"k\":10,\"id\":1319617282},{\"s\":\"xmas.present.small\",\"n\":\"Small Present\",\"c\":\"Misc\",\"k\":10,\"id\":-722241321},{\"s\":\"snowmachine\",\"n\":\"Snow Machine\",\"c\":\"Misc\",\"k\":1,\"id\":1358643074},{\"s\":\"snowmobile\",\"n\":\"Snowmobile\",\"c\":\"Misc\",\"k\":1,\"id\":-1364246987},{\"s\":\"ball\",\"n\":\"Soccer Ball\",\"c\":\"Misc\",\"k\":1,\"id\":405904531},{\"s\":\"submarinesolo\",\"n\":\"Solo Submarine\",\"c\":\"Misc\",\"k\":1,\"id\":-187031121},{\"s\":\"spiderweb\",\"n\":\"Spider Webs\",\"c\":\"Misc\",\"k\":10,\"id\":882559853},{\"s\":\"spookyspeaker\",\"n\":\"Spooky Speaker\",\"c\":\"Misc\",\"k\":1,\"id\":1885488976},{\"s\":\"xmas.decoration.star\",\"n\":\"Star Tree Topper\",\"c\":\"Misc\",\"k\":1,\"id\":-1331212963},{\"s\":\"strobelight\",\"n\":\"Strobe Light\",\"c\":\"Misc\",\"k\":1,\"id\":2104517339},{\"s\":\"snowmobiletomaha\",\"n\":\"Tomaha Snowmobile\",\"c\":\"Misc\",\"k\":1,\"id\":1768112091},{\"s\":\"xmas.decoration.lights\",\"n\":\"Tree Lights\",\"c\":\"Misc\",\"k\":1,\"id\":1723747470},{\"s\":\"trike\",\"n\":\"Trike\",\"c\":\"Misc\",\"k\":1,\"id\":1991794121},{\"s\":\"wagon\",\"n\":\"Wagon\",\"c\":\"Misc\",\"k\":1,\"id\":996757362},{\"s\":\"woodcross\",\"n\":\"Wooden Cross\",\"c\":\"Misc\",\"k\":1,\"id\":699075597},{\"s\":\"workcart\",\"n\":\"Work Cart\",\"c\":\"Misc\",\"k\":1,\"id\":-810326667},{\"s\":\"fat.animal\",\"n\":\"Animal Fat\",\"c\":\"Resources\",\"k\":1000,\"id\":-1018587433},{\"s\":\"battery.small\",\"n\":\"Battery - Small\",\"c\":\"Resources\",\"k\":1,\"id\":609049394},{\"s\":\"nucleus\",\"n\":\"Beehive Nucleus\",\"c\":\"Resources\",\"k\":1,\"id\":-1811234677},{\"s\":\"bluedogtags\",\"n\":\"Blue Dog Tags\",\"c\":\"Resources\",\"k\":5000,\"id\":1036321299},{\"s\":\"blueidtag\",\"n\":\"Blue ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":1364514421},{\"s\":\"bone.fragments\",\"n\":\"Bone Fragments\",\"c\":\"Resources\",\"k\":1000,\"id\":1719978075},{\"s\":\"cctv.camera\",\"n\":\"CCTV Camera\",\"c\":\"Resources\",\"k\":64,\"id\":634478325},{\"s\":\"charcoal\",\"n\":\"Charcoal\",\"c\":\"Resources\",\"k\":1000,\"id\":-1938052175},{\"s\":\"cloth\",\"n\":\"Cloth\",\"c\":\"Resources\",\"k\":1000,\"id\":-858312878},{\"s\":\"coal\",\"n\":\"Coal :(\",\"c\":\"Resources\",\"k\":1,\"id\":204391461},{\"s\":\"crude.oil\",\"n\":\"Crude Oil\",\"c\":\"Resources\",\"k\":500,\"id\":-321733511},{\"s\":\"diesel_barrel\",\"n\":\"Diesel Fuel\",\"c\":\"Resources\",\"k\":20,\"id\":1568388703},{\"s\":\"dogtagneutral\",\"n\":\"Dog Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":1223900335},{\"s\":\"can.beans.empty\",\"n\":\"Empty Can Of Beans\",\"c\":\"Resources\",\"k\":10,\"id\":1655979682},{\"s\":\"can.tuna.empty\",\"n\":\"Empty Tuna Can\",\"c\":\"Resources\",\"k\":10,\"id\":-1557377697},{\"s\":\"explosives\",\"n\":\"Explosives\",\"c\":\"Resources\",\"k\":100,\"id\":-592016202},{\"s\":\"fertilizer\",\"n\":\"Fertilizer\",\"c\":\"Resources\",\"k\":1000,\"id\":-930193596},{\"s\":\"kickgems\",\"n\":\"Gems\",\"c\":\"Resources\",\"k\":5000,\"id\":-1622386500},{\"s\":\"grayidtag\",\"n\":\"Gray ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":-455286320},{\"s\":\"greenidtag\",\"n\":\"Green ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":1762167092},{\"s\":\"gunpowder\",\"n\":\"Gun Powder\",\"c\":\"Resources\",\"k\":1000,\"id\":-265876753},{\"s\":\"metal.refined\",\"n\":\"High Quality Metal\",\"c\":\"Resources\",\"k\":100,\"id\":317398316},{\"s\":\"hq.metal.ore\",\"n\":\"High Quality Metal Ore\",\"c\":\"Resources\",\"k\":100,\"id\":-1982036270},{\"s\":\"horsedung\",\"n\":\"Horse Dung\",\"c\":\"Resources\",\"k\":100,\"id\":-1579932985},{\"s\":\"skull.human\",\"n\":\"Human Skull\",\"c\":\"Resources\",\"k\":1,\"id\":996293980},{\"s\":\"lavenderidtag\",\"n\":\"Lavender ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":1223729384},{\"s\":\"leather\",\"n\":\"Leather\",\"c\":\"Resources\",\"k\":1000,\"id\":1381010055},{\"s\":\"lowgradefuel\",\"n\":\"Low Grade Fuel\",\"c\":\"Resources\",\"k\":500,\"id\":-946369541},{\"s\":\"metal.fragments\",\"n\":\"Metal Fragments\",\"c\":\"Resources\",\"k\":1000,\"id\":69511070},{\"s\":\"metal.ore\",\"n\":\"Metal Ore\",\"c\":\"Resources\",\"k\":1000,\"id\":-4031221},{\"s\":\"mintidtag\",\"n\":\"Mint ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":1572152877},{\"s\":\"orangeidtag\",\"n\":\"Orange ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":-282193997},{\"s\":\"paper\",\"n\":\"Paper\",\"c\":\"Resources\",\"k\":1000,\"id\":-1779183908},{\"s\":\"pinkidtag\",\"n\":\"Pink ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":180752235},{\"s\":\"plantfiber\",\"n\":\"Plant Fiber\",\"c\":\"Resources\",\"k\":1000,\"id\":-804769727},{\"s\":\"purpleidtag\",\"n\":\"Purple ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":-1386082991},{\"s\":\"water.radioactive\",\"n\":\"Radioactive Water\",\"c\":\"Resources\",\"k\":2147483647,\"id\":1811780502},{\"s\":\"reddogtags\",\"n\":\"Red Dog Tags\",\"c\":\"Resources\",\"k\":5000,\"id\":-602717596},{\"s\":\"redidtag\",\"n\":\"Red ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":70102328},{\"s\":\"researchpaper\",\"n\":\"Research Paper\",\"c\":\"Resources\",\"k\":1000,\"id\":-544317637},{\"s\":\"water.salt\",\"n\":\"Salt Water\",\"c\":\"Resources\",\"k\":2147483647,\"id\":-277057363},{\"s\":\"scrap\",\"n\":\"Scrap\",\"c\":\"Resources\",\"k\":1000,\"id\":-932201673},{\"s\":\"stones\",\"n\":\"Stones\",\"c\":\"Resources\",\"k\":1000,\"id\":-2099697608},{\"s\":\"sulfur\",\"n\":\"Sulfur\",\"c\":\"Resources\",\"k\":1000,\"id\":-1581843485},{\"s\":\"sulfur.ore\",\"n\":\"Sulfur Ore\",\"c\":\"Resources\",\"k\":1000,\"id\":-1157596551},{\"s\":\"targeting.computer\",\"n\":\"Targeting Computer\",\"c\":\"Resources\",\"k\":64,\"id\":1523195708},{\"s\":\"water\",\"n\":\"Water\",\"c\":\"Resources\",\"k\":2147483647,\"id\":-1779180711},{\"s\":\"whiteidtag\",\"n\":\"White ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":22947882},{\"s\":\"skull.wolf\",\"n\":\"Wolf Skull\",\"c\":\"Resources\",\"k\":1,\"id\":2048317869},{\"s\":\"wood\",\"n\":\"Wood\",\"c\":\"Resources\",\"k\":1000,\"id\":-151838493},{\"s\":\"yellowidtag\",\"n\":\"Yellow ID Tag\",\"c\":\"Resources\",\"k\":5000,\"id\":81423963},{\"s\":\"diverhatchet\",\"n\":\"Abyss Metal Hatchet\",\"c\":\"Tool\",\"k\":1,\"id\":1046904719},{\"s\":\"diverpickaxe\",\"n\":\"Abyss Metal Pickaxe\",\"c\":\"Tool\",\"k\":1,\"id\":1561022037},{\"s\":\"divertorch\",\"n\":\"Abyss Torch\",\"c\":\"Tool\",\"k\":1,\"id\":1846605708},{\"s\":\"tool.binoculars\",\"n\":\"Binoculars\",\"c\":\"Tool\",\"k\":1,\"id\":-1262185308},{\"s\":\"cakefiveyear\",\"n\":\"Birthday Cake\",\"c\":\"Tool\",\"k\":1,\"id\":1973165031},{\"s\":\"tool.camera\",\"n\":\"Camera\",\"c\":\"Tool\",\"k\":1,\"id\":-1316706473},{\"s\":\"chainsaw\",\"n\":\"Chainsaw\",\"c\":\"Tool\",\"k\":1,\"id\":1104520648},{\"s\":\"compass\",\"n\":\"Compass\",\"c\":\"Tool\",\"k\":1,\"id\":594041190},{\"s\":\"concretehatchet\",\"n\":\"Concrete Hatchet\",\"c\":\"Tool\",\"k\":1,\"id\":1176355476},{\"s\":\"concretepickaxe\",\"n\":\"Concrete Pickaxe\",\"c\":\"Tool\",\"k\":1,\"id\":-1360171080},{\"s\":\"torch.torch.skull\",\"n\":\"Cultist Deer Torch\",\"c\":\"Tool\",\"k\":1,\"id\":-1175656359},{\"s\":\"documents\",\"n\":\"Documents\",\"c\":\"Tool\",\"k\":1,\"id\":-451310088},{\"s\":\"fishing.tackle\",\"n\":\"Fishing Tackle\",\"c\":\"Tool\",\"k\":1,\"id\":-1707425764},{\"s\":\"flare\",\"n\":\"Flare\",\"c\":\"Tool\",\"k\":5,\"id\":304481038},{\"s\":\"flashlight.held\",\"n\":\"Flashlight\",\"c\":\"Tool\",\"k\":1,\"id\":-196667575},{\"s\":\"frontier_hatchet\",\"n\":\"Frontier Hatchet\",\"c\":\"Tool\",\"k\":1,\"id\":1937380239},{\"s\":\"toolgun\",\"n\":\"Garry's Mod Tool Gun\",\"c\":\"Tool\",\"k\":1,\"id\":1803831286},{\"s\":\"geiger.counter\",\"n\":\"Geiger Counter\",\"c\":\"Tool\",\"k\":1,\"id\":999690781},{\"s\":\"hammer\",\"n\":\"Hammer\",\"c\":\"Tool\",\"k\":1,\"id\":200773292},{\"s\":\"handcuffs\",\"n\":\"Handcuffs\",\"c\":\"Tool\",\"k\":1,\"id\":-839576748},{\"s\":\"fishingrod.handmade\",\"n\":\"Handmade Fishing Rod\",\"c\":\"Tool\",\"k\":1,\"id\":1569882109},{\"s\":\"hatchet\",\"n\":\"Hatchet\",\"c\":\"Tool\",\"k\":1,\"id\":-1252059217},{\"s\":\"industrial.torch\",\"n\":\"Industrial Torch\",\"c\":\"Tool\",\"k\":1,\"id\":4474927},{\"s\":\"tool.instant_camera\",\"n\":\"Instant Camera\",\"c\":\"Tool\",\"k\":1,\"id\":-2001260025},{\"s\":\"jackhammer\",\"n\":\"Jackhammer\",\"c\":\"Tool\",\"k\":1,\"id\":1488979457},{\"s\":\"jungle.rock\",\"n\":\"Jungle Rock\",\"c\":\"Tool\",\"k\":1,\"id\":1350707894},{\"s\":\"krieg.chainsword\",\"n\":\"Krieg chainsword\",\"c\":\"Tool\",\"k\":1,\"id\":-1770281406},{\"s\":\"metal.detector\",\"n\":\"Metal Detector\",\"c\":\"Tool\",\"k\":1,\"id\":1168856825},{\"s\":\"outbreak.sprayer\",\"n\":\"Outbreak Sprayer\",\"c\":\"Tool\",\"k\":1,\"id\":1621942085},{\"s\":\"pickaxe\",\"n\":\"Pickaxe\",\"c\":\"Tool\",\"k\":1,\"id\":-1302129395},{\"s\":\"lumberjack.hatchet\",\"n\":\"Prototype Hatchet\",\"c\":\"Tool\",\"k\":1,\"id\":-399173933},{\"s\":\"lumberjack.pickaxe\",\"n\":\"Prototype Pickaxe\",\"c\":\"Tool\",\"k\":1,\"id\":236677901},{\"s\":\"rf.detonator\",\"n\":\"RF Transmitter\",\"c\":\"Tool\",\"k\":1,\"id\":596469572},{\"s\":\"rock\",\"n\":\"Rock\",\"c\":\"Tool\",\"k\":1,\"id\":963906841},{\"s\":\"axe.salvaged\",\"n\":\"Salvaged Axe\",\"c\":\"Tool\",\"k\":1,\"id\":-262590403},{\"s\":\"hammer.salvaged\",\"n\":\"Salvaged Hammer\",\"c\":\"Tool\",\"k\":1,\"id\":-1506397857},{\"s\":\"icepick.salvaged\",\"n\":\"Salvaged Icepick\",\"c\":\"Tool\",\"k\":1,\"id\":-1780802565},{\"s\":\"explosive.satchel\",\"n\":\"Satchel Charge\",\"c\":\"Tool\",\"k\":10,\"id\":-1878475007},{\"s\":\"shovel\",\"n\":\"Shovel\",\"c\":\"Tool\",\"k\":1,\"id\":-1536855921},{\"s\":\"skull\",\"n\":\"Skull\",\"c\":\"Tool\",\"k\":1,\"id\":1312843609},{\"s\":\"grenade.smoke\",\"n\":\"Smoke Grenade\",\"c\":\"Tool\",\"k\":3,\"id\":1263920163},{\"s\":\"spraycan\",\"n\":\"Spray Can\",\"c\":\"Tool\",\"k\":1,\"id\":-596876839},{\"s\":\"spraycandecal\",\"n\":\"Spray Can Decal\",\"c\":\"Tool\",\"k\":10,\"id\":-1366326648},{\"s\":\"stonehatchet\",\"n\":\"Stone Hatchet\",\"c\":\"Tool\",\"k\":1,\"id\":-1583967946},{\"s\":\"stone.pickaxe\",\"n\":\"Stone Pickaxe\",\"c\":\"Tool\",\"k\":1,\"id\":171931394},{\"s\":\"supply.signal\",\"n\":\"Supply Signal\",\"c\":\"Tool\",\"k\":1,\"id\":1397052267},{\"s\":\"surveycharge\",\"n\":\"Survey Charge\",\"c\":\"Tool\",\"k\":10,\"id\":1975934948},{\"s\":\"explosive.timed\",\"n\":\"Timed Explosive Charge\",\"c\":\"Tool\",\"k\":10,\"id\":1248356124},{\"s\":\"torch\",\"n\":\"Torch\",\"c\":\"Tool\",\"k\":1,\"id\":795236088},{\"s\":\"wallpaper.wall\",\"n\":\"Wallpaper\",\"c\":\"Tool\",\"k\":1,\"id\":553967074},{\"s\":\"wallpaper.tool\",\"n\":\"Wallpaper Tool\",\"c\":\"Tool\",\"k\":1,\"id\":1629564540},{\"s\":\"bucket.water\",\"n\":\"Water Bucket\",\"c\":\"Tool\",\"k\":1,\"id\":1424075905},{\"s\":\"gamesroom.shotgun.trap\",\"n\":\"Bar Games Shotgun Trap\",\"c\":\"Traps\",\"k\":1,\"id\":399522257},{\"s\":\"flameturret\",\"n\":\"Flame Turret\",\"c\":\"Traps\",\"k\":1,\"id\":528668503},{\"s\":\"trap.landmine\",\"n\":\"Homemade Landmine\",\"c\":\"Traps\",\"k\":5,\"id\":-1663759755},{\"s\":\"samsite\",\"n\":\"SAM Site\",\"c\":\"Traps\",\"k\":1,\"id\":-1009359066},{\"s\":\"guntrap\",\"n\":\"Shotgun Trap\",\"c\":\"Traps\",\"k\":1,\"id\":352499047},{\"s\":\"spikes.trap\",\"n\":\"Small Spike Trap\",\"c\":\"Traps\",\"k\":5,\"id\":-1850297170},{\"s\":\"trap.bear\",\"n\":\"Snap Trap\",\"c\":\"Traps\",\"k\":3,\"id\":-582782051},{\"s\":\"tincan.alarm\",\"n\":\"Tin Can Alarm\",\"c\":\"Traps\",\"k\":1,\"id\":962186730},{\"s\":\"spikes.floor\",\"n\":\"Wooden Floor Spikes\",\"c\":\"Traps\",\"k\":10,\"id\":-92759291},{\"s\":\"50cal.mounted\",\"n\":\"#50cal\",\"c\":\"Weapon\",\"k\":1,\"id\":162882477},{\"s\":\"50cal.mounted.left\",\"n\":\"#50cal\",\"c\":\"Weapon\",\"k\":1,\"id\":-1467876094},{\"s\":\"50cal.mounted.right\",\"n\":\"#50cal\",\"c\":\"Weapon\",\"k\":1,\"id\":1248383659},{\"s\":\"weapon.mod.small.scope\",\"n\":\"8x Zoom Scope\",\"c\":\"Weapon\",\"k\":1,\"id\":567235583},{\"s\":\"rifle.ak.diver\",\"n\":\"Abyss Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":-139037392},{\"s\":\"rifle.ak\",\"n\":\"Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":1545779598},{\"s\":\"ballista.static\",\"n\":\"Ballista\",\"c\":\"Weapon\",\"k\":1,\"id\":1714509152},{\"s\":\"mace.baseballbat\",\"n\":\"Baseball Bat\",\"c\":\"Weapon\",\"k\":1,\"id\":-2026042603},{\"s\":\"batteringram\",\"n\":\"Battering Ram\",\"c\":\"Weapon\",\"k\":1,\"id\":-187304968},{\"s\":\"batteringram.head.repair\",\"n\":\"Battering Ram Head\",\"c\":\"Weapon\",\"k\":1,\"id\":-479314201},{\"s\":\"grenade.beancan\",\"n\":\"Beancan Grenade\",\"c\":\"Weapon\",\"k\":4,\"id\":1840822026},{\"s\":\"grenade.bee\",\"n\":\"Bee Grenade\",\"c\":\"Weapon\",\"k\":3,\"id\":1168916338},{\"s\":\"blowpipe\",\"n\":\"Blow Pipe\",\"c\":\"Weapon\",\"k\":1,\"id\":-851288382},{\"s\":\"blunderbuss\",\"n\":\"Blunderbuss\",\"c\":\"Weapon\",\"k\":1,\"id\":-880412831},{\"s\":\"rifle.bolt\",\"n\":\"Bolt Action Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":1588298435},{\"s\":\"bone.club\",\"n\":\"Bone Club\",\"c\":\"Weapon\",\"k\":1,\"id\":1711033574},{\"s\":\"knife.bone\",\"n\":\"Bone Knife\",\"c\":\"Weapon\",\"k\":1,\"id\":1814288539},{\"s\":\"boomerang\",\"n\":\"Boomerang\",\"c\":\"Weapon\",\"k\":1,\"id\":1680793490},{\"s\":\"crossbowbowless\",\"n\":\"Bowless Crossbow\",\"c\":\"Weapon\",\"k\":1,\"id\":2022157467},{\"s\":\"knife.butcher\",\"n\":\"Butcher Knife\",\"c\":\"Weapon\",\"k\":1,\"id\":-194509282},{\"s\":\"candycaneclub\",\"n\":\"Candy Cane Club\",\"c\":\"Weapon\",\"k\":1,\"id\":1789825282},{\"s\":\"catapult\",\"n\":\"Catapult\",\"c\":\"Weapon\",\"k\":1,\"id\":1145722690},{\"s\":\"knife.combat\",\"n\":\"Combat Knife\",\"c\":\"Weapon\",\"k\":1,\"id\":2040726127},{\"s\":\"bow.compound\",\"n\":\"Compound Bow\",\"c\":\"Weapon\",\"k\":1,\"id\":884424049},{\"s\":\"crossbow\",\"n\":\"Crossbow\",\"c\":\"Weapon\",\"k\":1,\"id\":1965232394},{\"s\":\"rifle.ak.glass\",\"n\":\"Crystal Assault Rifle Diamond\",\"c\":\"Weapon\",\"k\":1,\"id\":-1920964108},{\"s\":\"rifle.ak.glass.green\",\"n\":\"Crystal Assault Rifle Emerald\",\"c\":\"Weapon\",\"k\":1,\"id\":-75136407},{\"s\":\"rifle.ak.glass.pink\",\"n\":\"Crystal Assault Rifle Pink Diamond\",\"c\":\"Weapon\",\"k\":1,\"id\":-1795386514},{\"s\":\"rifle.ak.glass.red\",\"n\":\"Crystal Assault Rifle Ruby\",\"c\":\"Weapon\",\"k\":1,\"id\":-1045971123},{\"s\":\"rifle.ak.glass.blue\",\"n\":\"Crystal Assault Rifle Sapphire\",\"c\":\"Weapon\",\"k\":1,\"id\":-1156572922},{\"s\":\"smg.2\",\"n\":\"Custom SMG\",\"c\":\"Weapon\",\"k\":1,\"id\":1796682209},{\"s\":\"shotgun.double\",\"n\":\"Double Barrel Shotgun\",\"c\":\"Weapon\",\"k\":1,\"id\":-765183617},{\"s\":\"rocket.launcher.dragon\",\"n\":\"Dragon Rocket Launcher\",\"c\":\"Weapon\",\"k\":1,\"id\":-1315992997},{\"s\":\"pistol.eoka\",\"n\":\"Eoka Pistol\",\"c\":\"Weapon\",\"k\":1,\"id\":-75944661},{\"s\":\"weapon.mod.extendedmags\",\"n\":\"Extended Magazine\",\"c\":\"Weapon\",\"k\":1,\"id\":2005491391},{\"s\":\"grenade.f1\",\"n\":\"F1 Grenade\",\"c\":\"Weapon\",\"k\":3,\"id\":143803535},{\"s\":\"flamethrower\",\"n\":\"Flame Thrower\",\"c\":\"Weapon\",\"k\":1,\"id\":-1215753368},{\"s\":\"grenade.flashbang\",\"n\":\"Flashbang\",\"c\":\"Weapon\",\"k\":3,\"id\":-936921910},{\"s\":\"weapon.mod.gascompressionovedrive\",\"n\":\"Gas Compression Overdrive\",\"c\":\"Weapon\",\"k\":1,\"id\":-1767794021},{\"s\":\"t1_smg\",\"n\":\"Handmade SMG\",\"c\":\"Weapon\",\"k\":1,\"id\":2083256995},{\"s\":\"revolver.hc\",\"n\":\"High Caliber Revolver\",\"c\":\"Weapon\",\"k\":1,\"id\":-92315244},{\"s\":\"hmlmg\",\"n\":\"HMLMG\",\"c\":\"Weapon\",\"k\":1,\"id\":-1214542497},{\"s\":\"weapon.mod.holosight\",\"n\":\"Holosight\",\"c\":\"Weapon\",\"k\":1,\"id\":442289265},{\"s\":\"homingmissile.launcher\",\"n\":\"Homing Missile Launcher\",\"c\":\"Weapon\",\"k\":1,\"id\":-218009552},{\"s\":\"bow.hunting\",\"n\":\"Hunting Bow\",\"c\":\"Weapon\",\"k\":1,\"id\":1443579727},{\"s\":\"rifle.ak.ice\",\"n\":\"Ice Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":-1335497659},{\"s\":\"rifle.ak.jungle\",\"n\":\"Jungle Relic Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":2054929933},{\"s\":\"krieg.shotgun\",\"n\":\"Krieg Shotgun\",\"c\":\"Weapon\",\"k\":1,\"id\":-420889602},{\"s\":\"rifle.l96\",\"n\":\"L96 Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":-778367295},{\"s\":\"legacy bow\",\"n\":\"Legacy Bow\",\"c\":\"Weapon\",\"k\":1,\"id\":-73195037},{\"s\":\"longsword\",\"n\":\"Longsword\",\"c\":\"Weapon\",\"k\":1,\"id\":-1469578201},{\"s\":\"rifle.lr300\",\"n\":\"LR-300 Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":-1812555177},{\"s\":\"spear.cny\",\"n\":\"Lunar New Year Spear\",\"c\":\"Weapon\",\"k\":1,\"id\":695450239},{\"s\":\"pistol.semiauto.a.m15\",\"n\":\"M15 Semi-Automatic Pistol\",\"c\":\"Weapon\",\"k\":1,\"id\":1673224590},{\"s\":\"m16a2\",\"n\":\"M16A2\",\"c\":\"Weapon\",\"k\":1,\"id\":599591861},{\"s\":\"lmg.m249\",\"n\":\"M249\",\"c\":\"Weapon\",\"k\":1,\"id\":-2069578888},{\"s\":\"rifle.m39\",\"n\":\"M39 Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":28201841},{\"s\":\"shotgun.m4\",\"n\":\"M4 Shotgun\",\"c\":\"Weapon\",\"k\":1,\"id\":678698219},{\"s\":\"pistol.m92\",\"n\":\"M92 Pistol\",\"c\":\"Weapon\",\"k\":1,\"id\":-852563019},{\"s\":\"mace\",\"n\":\"Mace\",\"c\":\"Weapon\",\"k\":1,\"id\":-1966748496},{\"s\":\"machete\",\"n\":\"Machete\",\"c\":\"Weapon\",\"k\":1,\"id\":-1137865085},{\"s\":\"rifle.ak.med\",\"n\":\"Medieval Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":472505338},{\"s\":\"military flamethrower\",\"n\":\"Military Flame Thrower\",\"c\":\"Weapon\",\"k\":1,\"id\":703057617},{\"s\":\"weapon.mod.silencer\",\"n\":\"Military Silencer\",\"c\":\"Weapon\",\"k\":1,\"id\":-1850571427},{\"s\":\"minicrossbow\",\"n\":\"Mini Crossbow\",\"c\":\"Weapon\",\"k\":1,\"id\":-482348853},{\"s\":\"minigun\",\"n\":\"Minigun\",\"c\":\"Weapon\",\"k\":1,\"id\":935606207},{\"s\":\"grenade.molotov\",\"n\":\"Molotov Cocktail\",\"c\":\"Weapon\",\"k\":3,\"id\":1556365900},{\"s\":\"ballista.mounted\",\"n\":\"Mounted Ballista\",\"c\":\"Weapon\",\"k\":1,\"id\":-759279626},{\"s\":\"smg.mp5\",\"n\":\"MP5A4\",\"c\":\"Weapon\",\"k\":1,\"id\":1318558775},{\"s\":\"multiplegrenadelauncher\",\"n\":\"Multiple Grenade Launcher\",\"c\":\"Weapon\",\"k\":1,\"id\":-1123473824},{\"s\":\"weapon.mod.muzzleboost\",\"n\":\"Muzzle Boost\",\"c\":\"Weapon\",\"k\":1,\"id\":-1405508498},{\"s\":\"weapon.mod.muzzlebrake\",\"n\":\"Muzzle Brake\",\"c\":\"Weapon\",\"k\":1,\"id\":1478091698},{\"s\":\"pistol.nailgun\",\"n\":\"Nailgun\",\"c\":\"Weapon\",\"k\":1,\"id\":1953903201},{\"s\":\"knife.bone.obsidian\",\"n\":\"Obsidian Bone Knife\",\"c\":\"Weapon\",\"k\":1,\"id\":158303804},{\"s\":\"weapon.mod.oilfiltersilencer\",\"n\":\"Oil Filter Silencer\",\"c\":\"Weapon\",\"k\":1,\"id\":-781866273},{\"s\":\"paddle\",\"n\":\"Paddle\",\"c\":\"Weapon\",\"k\":1,\"id\":1491189398},{\"s\":\"paintballgun\",\"n\":\"Paintball Gun\",\"c\":\"Weapon\",\"k\":1,\"id\":-707792719},{\"s\":\"pitchfork\",\"n\":\"Pitchfork\",\"c\":\"Weapon\",\"k\":1,\"id\":1090916276},{\"s\":\"pistol.prototype17\",\"n\":\"Prototype 17\",\"c\":\"Weapon\",\"k\":1,\"id\":1914691295},{\"s\":\"shotgun.pump\",\"n\":\"Pump Shotgun\",\"c\":\"Weapon\",\"k\":1,\"id\":795371088},{\"s\":\"pistol.python\",\"n\":\"Python Revolver\",\"c\":\"Weapon\",\"k\":1,\"id\":1373971859},{\"s\":\"pistol.revolver\",\"n\":\"Revolver\",\"c\":\"Weapon\",\"k\":1,\"id\":649912614},{\"s\":\"rocket.launcher\",\"n\":\"Rocket Launcher\",\"c\":\"Weapon\",\"k\":1,\"id\":442886268},{\"s\":\"rocket.launcher.rpg7\",\"n\":\"RPG Launcher\",\"c\":\"Weapon\",\"k\":1,\"id\":494161326},{\"s\":\"salvaged.cleaver\",\"n\":\"Salvaged Cleaver\",\"c\":\"Weapon\",\"k\":1,\"id\":-1978999529},{\"s\":\"salvaged.sword\",\"n\":\"Salvaged Sword\",\"c\":\"Weapon\",\"k\":1,\"id\":1326180354},{\"s\":\"pistol.semiauto\",\"n\":\"Semi-Automatic Pistol\",\"c\":\"Weapon\",\"k\":1,\"id\":818877484},{\"s\":\"rifle.semiauto\",\"n\":\"Semi-Automatic Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":-904863145},{\"s\":\"siegetower\",\"n\":\"Siege Tower\",\"c\":\"Weapon\",\"k\":1,\"id\":-1290278434},{\"s\":\"weapon.mod.simplesight\",\"n\":\"Simple Handmade Sight\",\"c\":\"Weapon\",\"k\":1,\"id\":-855748505},{\"s\":\"knife.skinning\",\"n\":\"Skinning Knife\",\"c\":\"Weapon\",\"k\":1,\"id\":-2073432256},{\"s\":\"rifle.sks\",\"n\":\"SKS\",\"c\":\"Weapon\",\"k\":1,\"id\":-348232115},{\"s\":\"snowball\",\"n\":\"Snowball\",\"c\":\"Weapon\",\"k\":1,\"id\":-363689972},{\"s\":\"snowballgun\",\"n\":\"Snowball Gun\",\"c\":\"Weapon\",\"k\":1,\"id\":1103488722},{\"s\":\"weapon.mod.sodacansilencer\",\"n\":\"Soda Can Silencer\",\"c\":\"Weapon\",\"k\":1,\"id\":-1659598760},{\"s\":\"rifle.lr300.space\",\"n\":\"Space LR-300 Assault Rifle\",\"c\":\"Weapon\",\"k\":1,\"id\":533993281},{\"s\":\"shotgun.spas12\",\"n\":\"Spas-12 Shotgun\",\"c\":\"Weapon\",\"k\":1,\"id\":-41440462},{\"s\":\"speargun\",\"n\":\"Speargun\",\"c\":\"Weapon\",\"k\":1,\"id\":-1517740219},{\"s\":\"spear.stone\",\"n\":\"Stone Spear\",\"c\":\"Weapon\",\"k\":1,\"id\":1602646136},{\"s\":\"sunken.knife\",\"n\":\"Sunken Combat Knife\",\"c\":\"Weapon\",\"k\":1,\"id\":789333045},{\"s\":\"weapon.mod.targetingattachment\",\"n\":\"Targeting Attachment\",\"c\":\"Weapon\",\"k\":1,\"id\":1719587208},{\"s\":\"smg.thompson\",\"n\":\"Thompson\",\"c\":\"Weapon\",\"k\":1,\"id\":-1758372725},{\"s\":\"vampire.stake\",\"n\":\"Vampire Stake\",\"c\":\"Weapon\",\"k\":1,\"id\":-885833256},{\"s\":\"weapon.mod.8x.scope\",\"n\":\"Variable Zoom Scope\",\"c\":\"Weapon\",\"k\":1,\"id\":174866732},{\"s\":\"gun.water\",\"n\":\"Water Gun\",\"c\":\"Weapon\",\"k\":1,\"id\":722955039},{\"s\":\"pistol.water\",\"n\":\"Water Pistol\",\"c\":\"Weapon\",\"k\":1,\"id\":-1815301988},{\"s\":\"shotgun.waterpipe\",\"n\":\"Waterpipe Shotgun\",\"c\":\"Weapon\",\"k\":1,\"id\":-1367281941},{\"s\":\"weapon.mod.flashlight\",\"n\":\"Weapon flashlight\",\"c\":\"Weapon\",\"k\":1,\"id\":952603248},{\"s\":\"weapon.mod.lasersight\",\"n\":\"Weapon Lasersight\",\"c\":\"Weapon\",\"k\":1,\"id\":-132516482},{\"s\":\"spear.wooden\",\"n\":\"Wooden Spear\",\"c\":\"Weapon\",\"k\":1,\"id\":1540934679}]");
var KEYS = {
	dropInv: "Drop inventory on death instead of random loot",
	dropMurder: "Drop default murderer loot on death instead of random loot",
	alpha: "Drop one of the specified AlphaLoot profiles as loot",
	table: "Random loot table",
	min: "Minimum amount of items to spawn",
	max: "Maximum amount of items to spawn",
	list: "List",
	blacklist: "Dropped inventory item blacklist (shortnames)"
};
var SKIN_PREVIEWS = {
	3205195553: "https://images.steamusercontent.com/ugc/2506889599733075752/C686568A187E8FA504911825951F88D1E9A78884/",
	3241601264: "https://images.steamusercontent.com/ugc/2471989872562944227/F0E9792B79326AC00FE9DE6722C9F3E2D13A01A6/",
	3242051288: "https://images.steamusercontent.com/ugc/2471990508178575145/5836ED98F561E8D22F757ED906AB3F29776337FA/",
	3242051538: "https://images.steamusercontent.com/ugc/2471990508166995052/66E5EC179F7271547E43D7BC33DC36DAD1C6B84D/",
	3242051715: "https://images.steamusercontent.com/ugc/2471990508166996481/6E8A70B4E83FD29E756053B3D1C7F46F86D581AC/",
	3242051845: "https://images.steamusercontent.com/ugc/2471990508166997686/AFFE99114B61B501B9791A72FBFF3B240C78483D/",
	3242052032: "https://images.steamusercontent.com/ugc/2471990508166998884/26370EA79F3B8D9C8AC15D0C67895EACB9B5D84C/",
	3242052177: "https://images.steamusercontent.com/ugc/2471990508167000031/1A9D23276F80DF1C36497A3000A0FB0A9D260E54/",
	3242053234: "https://images.steamusercontent.com/ugc/2471990508167007929/E017B84D7C403BAEBED17CFA38E0CDA59349D706/",
	3242054597: "https://images.steamusercontent.com/ugc/2471990508167019217/4E8AD8659B6249A26EF637DE5A9B0D7DEB2849E4/",
	3242055401: "https://images.steamusercontent.com/ugc/2471990508167025888/29DE4D2EF6C7663D07F84DA9B3BAD4E225242DAC/",
	3255499539: "https://images.steamusercontent.com/ugc/2450599769593402675/589C9C28B17CD6FCFAA2263E2887484848088EBF/"
};
var CATALOG = items_default;
var catalogMap = new Map(CATALOG.map((it) => [it.s, it]));
var CATEGORIES = ["all", ...Array.from(new Set(CATALOG.map((x) => x.c))).sort((a, b) => a.localeCompare(b))];
function itemIcon(shortname) {
	return `https://wiki.rustclash.com/img/items180/${encodeURIComponent(shortname)}.png`;
}
function catalogHit(shortname) {
	return catalogMap.get(shortname);
}
function displayName(it) {
	if (it.ItemName) return it.ItemName;
	return catalogHit(it.Shortname)?.n ?? it.Shortname;
}
function blankItem() {
	return {
		Shortname: "scrap",
		ItemName: "",
		Minimum: 1,
		Maximum: 1,
		SkinID: 0,
		"Spawn as blueprint": false,
		"Probability (0.0 - 1.0)": .25,
		"Minimum condition (0.0 - 1.0)": 1,
		"Maximum condition (0.0 - 1.0)": 1,
		"Spawn with": null
	};
}
function clone(o) {
	return JSON.parse(JSON.stringify(o));
}
function num(v, d = 0) {
	const n = Number(v);
	return Number.isFinite(n) ? n : d;
}
function clamp(n, a, b) {
	if (!Number.isFinite(n)) return a;
	return Math.min(b, Math.max(a, n));
}
function normalizeLoaded(cfg) {
	if (!cfg || !cfg["Loot Table"]) throw new Error("Not a ZombieHorde config — missing Loot Table");
	const L = cfg["Loot Table"];
	L[KEYS.table] = L[KEYS.table] || {
		[KEYS.min]: 1,
		[KEYS.max]: 1,
		[KEYS.list]: []
	};
	L[KEYS.table][KEYS.list] = L[KEYS.table][KEYS.list] || [];
	L[KEYS.alpha] = L[KEYS.alpha] || [];
	L[KEYS.blacklist] = L[KEYS.blacklist] || [];
	L[KEYS.dropInv] = !!L[KEYS.dropInv];
	L[KEYS.dropMurder] = !!L[KEYS.dropMurder];
	for (const it of L[KEYS.table][KEYS.list]) {
		if (it.ItemName == null) it.ItemName = "";
		if (it.SkinID == null) it.SkinID = 0;
		if (it["Probability (0.0 - 1.0)"] == null) it["Probability (0.0 - 1.0)"] = 1;
		if (it.Minimum == null) it.Minimum = 1;
		if (it.Maximum == null) it.Maximum = 1;
		if (it["Minimum condition (0.0 - 1.0)"] == null) it["Minimum condition (0.0 - 1.0)"] = 1;
		if (it["Maximum condition (0.0 - 1.0)"] == null) it["Maximum condition (0.0 - 1.0)"] = 1;
		if (it["Spawn as blueprint"] == null) it["Spawn as blueprint"] = false;
		if (it["Spawn with"] == null) it["Spawn with"] = null;
	}
	return cfg;
}
function bundledConfig() {
	return normalizeLoaded(clone(default_config_default));
}
function rowsOf(cfg) {
	return cfg["Loot Table"][KEYS.table][KEYS.list];
}
function tableOf(cfg) {
	return cfg["Loot Table"][KEYS.table];
}
var STORAGE_CFG = "zh-editor-config";
var STORAGE_SKINS = "zh-skin-previews";
function ItemArt({ shortname, skinId, skinUrl }) {
	const [broken, setBroken] = (0, import_react.useState)(false);
	const sid = Number(skinId) || 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-11 w-11 shrink-0",
		children: [
			broken ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-11 w-11 place-items-center rounded-lg bg-bg text-xs text-faint",
				children: "?"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: itemIcon(shortname),
				alt: "",
				className: "h-11 w-11 rounded-lg bg-bg object-contain",
				onError: () => setBroken(true)
			}),
			sid > 0 && skinUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: skinUrl,
				alt: "",
				className: "absolute -right-1 -bottom-1 h-6 w-6 rounded border border-line object-cover",
				title: `Workshop ${sid}`
			}) : null,
			sid > 0 && !skinUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -right-1 -bottom-1 rounded bg-raised px-1 text-[10px] font-semibold text-accent",
				children: "SK"
			}) : null
		]
	});
}
function chanceTone(p) {
	if (p >= .5) return "bg-accent text-accent-ink";
	if (p >= .15) return "bg-raised text-fg";
	return "bg-bg text-muted";
}
function LootEditor() {
	const [config, setConfig] = (0, import_react.useState)(() => bundledConfig());
	const [dirty, setDirty] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("chance-desc");
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [toast, setToast] = (0, import_react.useState)("");
	const [hotDrop, setHotDrop] = (0, import_react.useState)(false);
	const [pickerOpen, setPickerOpen] = (0, import_react.useState)(false);
	const [pickerQ, setPickerQ] = (0, import_react.useState)("");
	const [pickerCat, setPickerCat] = (0, import_react.useState)("all");
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [bulkOpen, setBulkOpen] = (0, import_react.useState)(false);
	const [bulkRaw, setBulkRaw] = (0, import_react.useState)("0.25");
	const [quickOpen, setQuickOpen] = (0, import_react.useState)(false);
	const [quickShort, setQuickShort] = (0, import_react.useState)("");
	const [blInput, setBlInput] = (0, import_react.useState)("");
	const [skins, setSkins] = (0, import_react.useState)({});
	const [lookupBusy, setLookupBusy] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const toastTimer = (0, import_react.useRef)(null);
	const hydrated = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		try {
			const saved = localStorage.getItem(STORAGE_CFG);
			if (saved) setConfig(normalizeLoaded(JSON.parse(saved)));
			const extra = localStorage.getItem(STORAGE_SKINS);
			if (extra) setSkins(JSON.parse(extra));
		} catch {}
		hydrated.current = true;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated.current || !dirty) return;
		localStorage.setItem(STORAGE_CFG, JSON.stringify(config));
	}, [config, dirty]);
	function ping(msg) {
		setToast(msg);
		if (toastTimer.current) window.clearTimeout(toastTimer.current);
		toastTimer.current = window.setTimeout(() => setToast(""), 2200);
	}
	function commit(next, mark = true) {
		setConfig(next);
		setDirty(mark);
	}
	function skinUrl(id) {
		const n = Number(id) || 0;
		if (!n) return "";
		return skins[String(n)] || SKIN_PREVIEWS[n] || "";
	}
	const list = rowsOf(config);
	const table = tableOf(config);
	const loot = config["Loot Table"];
	const filtered = (0, import_react.useMemo)(() => {
		const q = filter.trim().toLowerCase();
		let rows = list.map((it, i) => ({
			it,
			i
		}));
		if (category !== "all") rows = rows.filter(({ it }) => (catalogHit(it.Shortname)?.c || "Misc") === category);
		if (q) rows = rows.filter(({ it }) => `${it.Shortname} ${it.ItemName || ""} ${displayName(it)} ${it.SkinID}`.toLowerCase().includes(q));
		const [key, dir] = sort.split("-");
		rows.sort((a, b) => {
			let av;
			let bv;
			if (key === "chance") {
				av = Number(a.it["Probability (0.0 - 1.0)"]) || 0;
				bv = Number(b.it["Probability (0.0 - 1.0)"]) || 0;
			} else if (key === "name") {
				av = displayName(a.it).toLowerCase();
				bv = displayName(b.it).toLowerCase();
			} else if (key === "short") {
				av = a.it.Shortname;
				bv = b.it.Shortname;
			} else if (key === "skin") {
				av = Number(a.it.SkinID) || 0;
				bv = Number(b.it.SkinID) || 0;
			} else {
				av = a.i;
				bv = b.i;
			}
			if (av < bv) return dir === "asc" ? -1 : 1;
			if (av > bv) return dir === "asc" ? 1 : -1;
			return 0;
		});
		return rows;
	}, [
		list,
		filter,
		category,
		sort
	]);
	const expected = list.reduce((s, it) => s + (Number(it["Probability (0.0 - 1.0)"]) || 0), 0);
	const skinCount = list.filter((x) => Number(x.SkinID) > 0).length;
	const named = list.filter((x) => x.ItemName).length;
	function patchRow(i, patch) {
		const next = clone(config);
		Object.assign(rowsOf(next)[i], patch);
		commit(next);
	}
	function addItem(partial) {
		const next = clone(config);
		const it = Object.assign(blankItem(), partial);
		rowsOf(next).push(it);
		commit(next);
		ping(`Added ${it.Shortname}`);
	}
	function download() {
		const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "ZombieHorde.json";
		a.click();
		URL.revokeObjectURL(a.href);
		setDirty(false);
		ping("Downloaded ZombieHorde.json");
	}
	async function copyLoot() {
		try {
			await navigator.clipboard.writeText(JSON.stringify(config["Loot Table"], null, 2));
			ping("Loot Table JSON copied");
		} catch {
			ping("Clipboard blocked");
		}
	}
	function loadFile(file) {
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const parsed = normalizeLoaded(JSON.parse(String(reader.result)));
				setSelected(/* @__PURE__ */ new Set());
				commit(parsed, false);
				localStorage.setItem(STORAGE_CFG, JSON.stringify(parsed));
				ping(`Loaded ${file.name} — ${rowsOf(parsed).length} loot rows`);
			} catch (err) {
				ping(err instanceof Error ? err.message : "Could not parse JSON");
			}
		};
		reader.readAsText(file);
	}
	function openEditor(i) {
		setEditIndex(i);
		setDraft(clone(list[i]));
	}
	function saveEditor() {
		if (editIndex == null || !draft) return;
		const next = clone(config);
		const it = draft;
		it.Shortname = it.Shortname.trim();
		it.ItemName = (it.ItemName || "").trim();
		it.Minimum = num(it.Minimum, 1);
		it.Maximum = num(it.Maximum, it.Minimum);
		it.SkinID = num(it.SkinID, 0);
		it["Probability (0.0 - 1.0)"] = clamp(Number(it["Probability (0.0 - 1.0)"]), 0, 1);
		it["Minimum condition (0.0 - 1.0)"] = clamp(Number(it["Minimum condition (0.0 - 1.0)"]), 0, 1);
		it["Maximum condition (0.0 - 1.0)"] = clamp(Number(it["Maximum condition (0.0 - 1.0)"]), 0, 1);
		if (it["Spawn with"] && !it["Spawn with"].Shortname.trim()) it["Spawn with"] = null;
		rowsOf(next)[editIndex] = it;
		commit(next);
		setEditIndex(null);
		setDraft(null);
	}
	async function lookupSkin() {
		if (!draft) return;
		const id = num(draft.SkinID, 0);
		if (!id) return ping("Enter a workshop SkinID first");
		setLookupBusy(true);
		try {
			const page = `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`;
			const proxies = [`https://api.allorigins.win/raw?url=${encodeURIComponent(page)}`, `https://corsproxy.io/?${encodeURIComponent(page)}`];
			let html = "";
			for (const url of proxies) try {
				const res = await fetch(url);
				if (res.ok) {
					html = await res.text();
					if (html.includes("og:image")) break;
				}
			} catch {}
			const m = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
			if (m?.[1]) {
				const nextSkins = {
					...skins,
					[String(id)]: m[1]
				};
				setSkins(nextSkins);
				localStorage.setItem(STORAGE_SKINS, JSON.stringify(nextSkins));
				ping("Skin preview saved in this browser");
			} else {
				ping("Could not fetch preview — workshop link still works");
				window.open(page, "_blank", "noopener");
			}
		} finally {
			setLookupBusy(false);
		}
	}
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.ctrlKey || e.metaKey) && e.key === "s") {
				e.preventDefault();
				download();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [config]);
	const pickerList = (0, import_react.useMemo)(() => {
		const q = pickerQ.trim().toLowerCase();
		let items = CATALOG;
		if (pickerCat !== "all") items = items.filter((x) => x.c === pickerCat);
		if (q) items = items.filter((x) => `${x.s} ${x.n}`.toLowerCase().includes(q));
		return items.slice(0, 120);
	}, [pickerQ, pickerCat]);
	const alphaText = (loot[KEYS.alpha] || []).join("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[1480px] px-4 pt-5 pb-24 sm:px-5",
		onDragOver: (e) => {
			e.preventDefault();
			setHotDrop(true);
		},
		onDragLeave: () => setHotDrop(false),
		onDrop: (e) => {
			e.preventDefault();
			setHotDrop(false);
			const f = e.dataTransfer.files[0];
			if (f && f.name.endsWith(".json")) loadFile(f);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-4 flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent font-display text-lg font-bold text-accent-ink",
						children: "ZH"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-none font-bold tracking-wide",
						children: "Zombie Horde Loot Editor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `mt-1 text-sm ${dirty ? "text-accent" : "text-muted"}`,
						children: ["FAFO · ZombieHorde.json · random loot table", dirty ? " · unsaved edits" : ""]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn",
							onClick: () => fileRef.current?.click(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "h-4 w-4" }), " Load JSON"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn",
							onClick: () => {
								if (window.confirm("Reload the bundled FAFO ZombieHorde.json and discard edits?")) {
									const next = bundledConfig();
									setSelected(/* @__PURE__ */ new Set());
									setConfig(next);
									setDirty(false);
									localStorage.removeItem(STORAGE_CFG);
									ping(`Loaded bundled config — ${rowsOf(next).length} loot rows`);
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Reload bundled"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn",
							onClick: () => void copyLoot(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), " Copy loot JSON"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-primary",
							onClick: download,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download ZombieHorde.json"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							accept: ".json,application/json",
							hidden: true,
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) loadFile(f);
								e.target.value = "";
							}
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(list.length),
						label: "Loot rows"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `${table[KEYS.min]}–${table[KEYS.max]}`,
						label: "Items rolled per corpse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: expected.toFixed(2),
						label: "Sum of probabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(skinCount),
						label: "Rows with a skin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(named),
						label: "Custom display names"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-[300px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "panel-title",
						children: "Loot settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Drop inventory instead of table",
								checked: !!loot[KEYS.dropInv],
								onChange: (v) => {
									const next = clone(config);
									next["Loot Table"][KEYS.dropInv] = v;
									commit(next);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Drop default murderer loot",
								checked: !!loot[KEYS.dropMurder],
								onChange: (v) => {
									const next = clone(config);
									next["Loot Table"][KEYS.dropMurder] = v;
									commit(next);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted",
								children: "Keep both off to use the random table. That is how this config is set now."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs text-muted",
								children: ["Min items per corpse", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input mt-1",
									type: "number",
									min: 0,
									value: table[KEYS.min],
									onChange: (e) => {
										const next = clone(config);
										tableOf(next)[KEYS.min] = num(e.target.value, 1);
										commit(next);
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs text-muted",
								children: ["Max items per corpse", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input mt-1",
									type: "number",
									min: 0,
									value: table[KEYS.max],
									onChange: (e) => {
										const next = clone(config);
										const mn = tableOf(next)[KEYS.min];
										tableOf(next)[KEYS.max] = Math.max(mn, num(e.target.value, 1));
										commit(next);
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs text-muted",
								children: ["AlphaLoot profiles (one per line)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "field-input mt-1 min-h-16",
									value: alphaText,
									placeholder: "leave empty if unused",
									onChange: (e) => {
										const next = clone(config);
										next["Loot Table"][KEYS.alpha] = e.target.value.split(/\n+/).map((s) => s.trim()).filter(Boolean);
										commit(next);
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-1 text-xs text-muted",
									children: ["Inventory drop blacklist ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-faint",
										children: [loot[KEYS.blacklist].length, " entries"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field-input",
										value: blInput,
										placeholder: "shortname",
										onChange: (e) => setBlInput(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												const s = blInput.trim();
												if (!s) return;
												const next = clone(config);
												if (!next["Loot Table"][KEYS.blacklist].includes(s)) next["Loot Table"][KEYS.blacklist].push(s);
												commit(next);
												setBlInput("");
											}
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "btn shrink-0",
										onClick: () => {
											const s = blInput.trim();
											if (!s) return;
											const next = clone(config);
											if (!next["Loot Table"][KEYS.blacklist].includes(s)) next["Loot Table"][KEYS.blacklist].push(s);
											commit(next);
											setBlInput("");
										},
										children: "Add"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex max-h-40 flex-wrap gap-1 overflow-auto",
									children: loot[KEYS.blacklist].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-full border border-line bg-bg px-2 py-1 text-xs text-muted",
										title: "Remove",
										onClick: () => {
											const next = clone(config);
											next["Loot Table"][KEYS.blacklist] = next["Loot Table"][KEYS.blacklist].filter((x) => x !== s);
											commit(next);
										},
										children: s
									}, s))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `rounded-xl border border-dashed px-3 py-4 text-center text-xs text-muted ${hotDrop ? "border-accent text-accent" : "border-line"}`,
								children: "Drop a ZombieHorde.json here to replace the working copy."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted",
								children: "The plugin rolls 0–1 per row and keeps items whose probability is at least that roll. Higher % is more common. Row min/max is stack size, not how many slots."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 border-b border-line p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-44 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-2.5 left-2.5 h-4 w-4 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input pl-8",
									type: "search",
									placeholder: "Search name, shortname, skin id…",
									value: filter,
									onChange: (e) => setFilter(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field-input w-auto",
								value: category,
								onChange: (e) => setCategory(e.target.value),
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c,
									children: c === "all" ? "All categories" : c
								}, c))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "field-input w-auto",
								value: sort,
								onChange: (e) => setSort(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "chance-desc",
										children: "Chance high → low"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "chance-asc",
										children: "Chance low → high"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "name-asc",
										children: "Name A–Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "short-asc",
										children: "Shortname A–Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "skin-desc",
										children: "Skinned first"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "index-asc",
										children: "File order"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [filtered.length, " shown"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn",
								onClick: () => setSelected(new Set(filtered.map(({ i }) => i))),
								children: "Select shown"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn",
								onClick: () => setSelected(/* @__PURE__ */ new Set()),
								children: "Clear"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn",
								onClick: () => selected.size ? setBulkOpen(true) : ping("Select rows first"),
								children: "Set %"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn text-danger-soft",
								onClick: () => {
									if (!selected.size) return ping("Select rows first");
									if (!window.confirm(`Delete ${selected.size} rows?`)) return;
									const next = clone(config);
									tableOf(next)[KEYS.list] = rowsOf(next).filter((_, i) => !selected.has(i));
									setSelected(/* @__PURE__ */ new Set());
									commit(next);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete selected"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn-primary",
								onClick: () => setPickerOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add from catalog"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn",
								onClick: () => setQuickOpen(true),
								children: "Add shortname"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[760px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-line",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-10 px-3 py-2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2",
											children: "Item / skin"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2",
											children: "Chance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2",
											children: "Stack"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2",
											children: "SkinID"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-2" })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 6,
								className: "px-4 py-10 text-center text-muted",
								children: "No items match this filter."
							}) }) : filtered.map(({ it, i }) => {
								const p = Number(it["Probability (0.0 - 1.0)"]) || 0;
								const on = selected.has(i);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: `border-b border-line/70 ${on ? "bg-bg-2" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												className: "h-4 w-4",
												checked: on,
												onChange: (e) => {
													const next = new Set(selected);
													if (e.target.checked) next.add(i);
													else next.delete(i);
													setSelected(next);
												}
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemArt, {
													shortname: it.Shortname,
													skinId: it.SkinID,
													skinUrl: skinUrl(it.SkinID)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "truncate font-semibold",
															children: displayName(it)
														}),
														it.ItemName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "truncate text-xs text-accent",
															children: catalogHit(it.Shortname)?.n
														}) : null,
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
															className: "text-xs text-faint",
															children: [it.Shortname, it["Spawn as blueprint"] ? " · BP" : ""]
														})
													]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: 0,
													max: 1,
													step: .01,
													value: p,
													className: "w-28 accent-accent",
													onChange: (e) => patchRow(i, { "Probability (0.0 - 1.0)": clamp(Number(e.target.value), 0, 1) })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `rounded-full px-2 py-0.5 text-xs font-semibold ${chanceTone(p)}`,
													children: [Math.round(p * 100), "%"]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2 whitespace-nowrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field-input inline w-16",
													type: "number",
													min: 0,
													value: it.Minimum,
													onChange: (e) => patchRow(i, { Minimum: num(e.target.value, 1) })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mx-1 text-faint",
													children: "–"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field-input inline w-16",
													type: "number",
													min: 0,
													value: it.Maximum,
													onChange: (e) => patchRow(i, { Maximum: num(e.target.value, 1) })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2 whitespace-nowrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "field-input inline w-28",
												type: "number",
												min: 0,
												value: it.SkinID || 0,
												onChange: (e) => patchRow(i, { SkinID: num(e.target.value, 0) })
											}), Number(it.SkinID) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "ml-2 text-xs text-accent underline",
												target: "_blank",
												rel: "noreferrer",
												href: `https://steamcommunity.com/sharedfiles/filedetails/?id=${it.SkinID}`,
												children: "workshop"
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2 whitespace-nowrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "btn",
													onClick: () => openEditor(i),
													children: "Edit"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "btn ml-1",
													onClick: () => {
														const next = clone(config);
														rowsOf(next).splice(i + 1, 0, clone(rowsOf(next)[i]));
														commit(next);
													},
													children: "Copy"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "btn ml-1",
													onClick: () => {
														const next = clone(config);
														rowsOf(next).splice(i, 1);
														const sel = /* @__PURE__ */ new Set();
														for (const s of selected) if (s < i) sel.add(s);
														else if (s > i) sel.add(s - 1);
														setSelected(sel);
														commit(next);
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
												})
											]
										})
									]
								}, i);
							}) })]
						})
					})]
				})]
			}),
			editIndex != null && draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Edit loot row",
				onClose: () => setEditIndex(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemArt, {
							shortname: draft.Shortname,
							skinId: draft.SkinID,
							skinUrl: skinUrl(draft.SkinID)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: catalogHit(draft.Shortname) ? `Catalog: ${catalogHit(draft.Shortname)?.n} · ${catalogHit(draft.Shortname)?.c}` : "Shortname not in catalog — still valid if Rust knows it."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Shortname",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									value: draft.Shortname,
									onChange: (e) => setDraft({
										...draft,
										Shortname: e.target.value
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Custom display name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									value: draft.ItemName,
									placeholder: "optional rename in loot",
									onChange: (e) => setDraft({
										...draft,
										ItemName: e.target.value
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Min stack",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									value: draft.Minimum,
									onChange: (e) => setDraft({
										...draft,
										Minimum: num(e.target.value, 1)
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Max stack",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									value: draft.Maximum,
									onChange: (e) => setDraft({
										...draft,
										Maximum: num(e.target.value, 1)
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Probability 0–1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									min: 0,
									max: 1,
									step: .01,
									value: draft["Probability (0.0 - 1.0)"],
									onChange: (e) => setDraft({
										...draft,
										"Probability (0.0 - 1.0)": num(e.target.value, 0)
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Workshop SkinID",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									value: draft.SkinID,
									onChange: (e) => setDraft({
										...draft,
										SkinID: num(e.target.value, 0)
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Min condition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									min: 0,
									max: 1,
									step: .05,
									value: draft["Minimum condition (0.0 - 1.0)"],
									onChange: (e) => setDraft({
										...draft,
										"Minimum condition (0.0 - 1.0)": num(e.target.value, 1)
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Max condition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									min: 0,
									max: 1,
									step: .05,
									value: draft["Maximum condition (0.0 - 1.0)"],
									onChange: (e) => setDraft({
										...draft,
										"Maximum condition (0.0 - 1.0)": num(e.target.value, 1)
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Spawn as blueprint",
							checked: !!draft["Spawn as blueprint"],
							onChange: (v) => setDraft({
								...draft,
								"Spawn as blueprint": v
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Spawn with extra item",
							checked: !!draft["Spawn with"],
							onChange: (v) => setDraft({
								...draft,
								"Spawn with": v ? {
									Shortname: draft["Spawn with"]?.Shortname || "",
									Minimum: draft["Spawn with"]?.Minimum ?? 1,
									Maximum: draft["Spawn with"]?.Maximum ?? 1,
									SkinID: draft["Spawn with"]?.SkinID ?? 0,
									"Spawn as blueprint": false,
									"Probability (0.0 - 1.0)": 1,
									"Spawn with": null
								} : null
							})
						})]
					}),
					draft["Spawn with"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Companion shortname",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									value: draft["Spawn with"].Shortname,
									onChange: (e) => setDraft({
										...draft,
										"Spawn with": {
											...draft["Spawn with"],
											Shortname: e.target.value
										}
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Companion skin",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									value: draft["Spawn with"].SkinID,
									onChange: (e) => setDraft({
										...draft,
										"Spawn with": {
											...draft["Spawn with"],
											SkinID: num(e.target.value, 0)
										}
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Companion min",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									value: draft["Spawn with"].Minimum,
									onChange: (e) => setDraft({
										...draft,
										"Spawn with": {
											...draft["Spawn with"],
											Minimum: num(e.target.value, 1)
										}
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Companion max",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field-input",
									type: "number",
									value: draft["Spawn with"].Maximum,
									onChange: (e) => setDraft({
										...draft,
										"Spawn with": {
											...draft["Spawn with"],
											Maximum: num(e.target.value, 1)
										}
									})
								})
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn",
							disabled: lookupBusy,
							onClick: () => void lookupSkin(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skull, { className: "h-4 w-4" }),
								" ",
								lookupBusy ? "Looking up…" : "Lookup skin icon"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn-primary",
							onClick: saveEditor,
							children: "Save row"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: "Custom ZHH workshop skins already in this table have preview images. New SkinIDs can be looked up here. Preview URLs stay in this browser and are not written into the plugin JSON."
					})
				]
			}) : null,
			pickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Add item from catalog",
				onClose: () => setPickerOpen(false),
				wide: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field-input min-w-40 flex-1",
							type: "search",
							placeholder: "Search 1200+ Rust items…",
							value: pickerQ,
							onChange: (e) => setPickerQ(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field-input w-auto",
							value: pickerCat,
							onChange: (e) => setPickerCat(e.target.value),
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c === "all" ? "All categories" : c
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "self-center text-xs text-muted",
							children: [
								pickerList.length,
								" shown · ",
								CATALOG.length,
								" in catalog"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid max-h-[60vh] grid-cols-1 gap-2 overflow-auto sm:grid-cols-2",
					children: pickerList.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex items-center gap-3 rounded-xl border border-line bg-bg px-3 py-2 text-left hover:border-accent",
						onClick: () => addItem({ Shortname: x.s }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemArt, { shortname: x.s }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block truncate",
								children: x.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-xs text-faint",
								children: x.s
							})]
						})]
					}, x.s))
				})]
			}) : null,
			bulkOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Set chance on selected rows",
				onClose: () => setBulkOpen(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-sm text-muted",
						children: [selected.size, " rows. Enter 0–1 or a percent like 25."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field-input",
						value: bulkRaw,
						onChange: (e) => setBulkRaw(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn-primary mt-3",
						onClick: () => {
							let p = Number(bulkRaw);
							if (p > 1) p = p / 100;
							p = clamp(p, 0, 1);
							const next = clone(config);
							for (const i of selected) rowsOf(next)[i]["Probability (0.0 - 1.0)"] = p;
							commit(next);
							setBulkOpen(false);
						},
						children: "Apply"
					})
				]
			}) : null,
			quickOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Add by shortname",
				onClose: () => setQuickOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field-input",
					placeholder: "scrap, syringe.medical",
					value: quickShort,
					onChange: (e) => setQuickShort(e.target.value)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary mt-3",
					onClick: () => {
						const short = quickShort.trim();
						if (!short) return;
						addItem({ Shortname: short });
						setQuickShort("");
						setQuickOpen(false);
					},
					children: "Add"
				})]
			}) : null,
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg shadow-lg",
				children: toast
			}) : null
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
			className: "block font-display text-2xl leading-none",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block text-xs text-muted",
			children: label
		})]
	});
}
function Toggle({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex min-h-11 items-center justify-between gap-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			className: "h-5 w-5 accent-accent",
			checked,
			onChange: (e) => onChange(e.target.checked)
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-xs text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})]
	});
}
function Modal({ title, onClose, children, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 grid place-items-end bg-black/60 p-3 sm:place-items-center",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `max-h-[92vh] w-full overflow-auto rounded-2xl border border-line bg-surface p-4 shadow-2xl ${wide ? "max-w-3xl" : "max-w-xl"}`,
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-display text-xl tracking-wide",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn",
					onClick: onClose,
					children: "Close"
				})]
			}), children]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LootEditor, {});
}
//#endregion
export { Home as component };
