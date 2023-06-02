const room = HBInit({
    roomName: 'teste',
    public: false,
    noPlayer: true,
    maxPlayers: 20,
    geo : {"lat":-22.193749, "lon":-42.389055,"code":"br"}
})
let ultimoAChutar = undefined

let listadeJogadores = []

let listaArtilheiros;



const futsalx5 = `{

	"name" : "Futsal x5 GLH ; By Latorraca#14! from HaxMaps",

	"width" : 1080,

	"height" : 532,

	"spawnDistance" : 310,

	"bg" : { "type" : "none", "width" : 950, "height" : 460, "kickOffRadius" : 6, "cornerRadius" : 0, "color" : "4A3A18" },

	"vertexes" : [
		/* 0 */ { "x" : -950, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 1 */ { "x" : -950, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 2 */ { "x" : -950, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 3 */ { "x" : -950, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 4 */ { "x" : 950, "y" : 456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 5 */ { "x" : 950, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 6 */ { "x" : 950, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 7 */ { "x" : 950, "y" : -456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 8 */ { "x" : 0, "y" : 508, "trait" : "kickOffBarrier" },
		/* 9 */ { "x" : 0, "y" : 150, "trait" : "kickOffBarrier" },
		
		/* 10 */ { "x" : 0, "y" : -150, "trait" : "line" },
		
		/* 11 */ { "x" : 0, "y" : -508, "trait" : "kickOffBarrier" },
		
		/* 12 */ { "x" : -995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		/* 13 */ { "x" : 995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		/* 14 */ { "x" : -995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		/* 15 */ { "x" : 995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		
		/* 16 */ { "x" : 951, "y" : 460, "bCoef" : 1, "trait" : "ballArea" },
		/* 17 */ { "x" : 951, "y" : -460, "bCoef" : 1, "trait" : "ballArea" },
		
		/* 18 */ { "x" : 0, "y" : 460, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		/* 19 */ { "x" : 0, "y" : -460, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		
		/* 20 */ { "x" : 0, "y" : 150, "trait" : "kickOffBarrier" },
		/* 21 */ { "x" : 0, "y" : -150, "trait" : "kickOffBarrier" },
		
		/* 22 */ { "x" : 958, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 23 */ { "x" : 958, "y" : -456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 24 */ { "x" : -958, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 25 */ { "x" : -958, "y" : -456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 26 */ { "x" : -958, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 27 */ { "x" : -958, "y" : 456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 28 */ { "x" : 958, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 29 */ { "x" : 958, "y" : 456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 30 */ { "x" : 0, "y" : -9, "trait" : "line", "curve" : -180 },
		/* 31 */ { "x" : 0, "y" : 9, "trait" : "line", "curve" : -180 },
		/* 32 */ { "x" : 0, "y" : -9, "trait" : "line", "curve" : 180 },
		/* 33 */ { "x" : 0, "y" : 9, "trait" : "line", "curve" : 180 },
		/* 34 */ { "x" : 634.21528583524, "y" : -109.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 35 */ { "x" : 634.21528583524, "y" : 114.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		/* 36 */ { "x" : 634.21528583524, "y" : 114.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 37 */ { "x" : 950, "y" : 324.62551819445, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 38 */ { "x" : 634.21528583524, "y" : -109.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90 },
		/* 39 */ { "x" : -423.82978278939, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 40 */ { "x" : -423.82978278939, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 41 */ { "x" : -222.35509186163, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 42 */ { "x" : -222.35509186163, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 43 */ { "x" : 386.06898092163, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 44 */ { "x" : 386.06898092163, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 45 */ { "x" : 184.59428999387, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 46 */ { "x" : 184.59428999387, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 47 */ { "x" : -657.56254462949, "y" : 460, "bCoef" : 0.1, "trait" : "line" },
		/* 48 */ { "x" : -657.56254462949, "y" : 473, "bCoef" : 0.1, "trait" : "line" },
		/* 49 */ { "x" : 975, "y" : 193.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 50 */ { "x" : 956, "y" : 193.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 51 */ { "x" : 975, "y" : -188.96236130943, "bCoef" : 0.1, "trait" : "line" },
		/* 52 */ { "x" : 956, "y" : -188.96236130943, "bCoef" : 0.1, "trait" : "line" },
		/* 53 */ { "x" : -667.82213435646, "y" : -460, "bCoef" : 0.1, "trait" : "line" },
		/* 54 */ { "x" : -667.82213435646, "y" : -473, "bCoef" : 0.1, "trait" : "line" },
		/* 55 */ { "x" : 621.80174276174, "y" : 460, "bCoef" : 0.1, "trait" : "line" },
		/* 56 */ { "x" : 621.80174276174, "y" : 473, "bCoef" : 0.1, "trait" : "line" },
		/* 57 */ { "x" : 644.74331148229, "y" : -460, "bCoef" : 0.1, "trait" : "line" },
		/* 58 */ { "x" : 644.74331148229, "y" : -473, "bCoef" : 0.1, "trait" : "line" },
		/* 59 */ { "x" : 634.35340467604, "y" : 4.2212921610516, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 60 */ { "x" : 634.35340467604, "y" : 1.7712285482462, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 61 */ { "x" : 634.35340467604, "y" : 6.6713557738571, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 62 */ { "x" : 634.35340467604, "y" : -0.67883506455928, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 63 */ { "x" : 634.35340467604, "y" : 0.54619674184346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 64 */ { "x" : 634.35340467604, "y" : 5.4463239674544, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 65 */ { "x" : 634.35340467604, "y" : -1.2913509677606, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 66 */ { "x" : 634.35340467604, "y" : 7.2838716770584, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 67 */ { "x" : 484.86942705432, "y" : 4.2212921610516, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 68 */ { "x" : 484.86942705432, "y" : 1.7712285482462, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 69 */ { "x" : 484.86942705432, "y" : 6.6713557738571, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 70 */ { "x" : 484.86942705432, "y" : -0.67883506455928, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 71 */ { "x" : 484.86942705432, "y" : 0.54619674184346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : 484.86942705432, "y" : 5.4463239674544, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : 484.86942705432, "y" : -1.2913509677606, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : 484.86942705432, "y" : 7.2838716770584, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -975, "y" : -191.85660774843, "bCoef" : 0.1, "trait" : "line" },
		/* 76 */ { "x" : -956, "y" : -191.96236130943, "bCoef" : 0.1, "trait" : "line" },
		/* 77 */ { "x" : -975, "y" : 190.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 78 */ { "x" : -956, "y" : 190.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 79 */ { "x" : -950, "y" : 432.90041943973, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 80 */ { "x" : -926.21802170761, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 81 */ { "x" : -950, "y" : -433.32499678239, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 82 */ { "x" : -925.43621788149, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 83 */ { "x" : 950, "y" : -433.36622514797, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 84 */ { "x" : 927.73220749769, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 85 */ { "x" : 950, "y" : 434.55334331787, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 86 */ { "x" : 925.51401132381, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 87 */ { "x" : 950, "y" : -319.66892509968, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 88 */ { "x" : -635.67083595539, "y" : 111.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 89 */ { "x" : -635.67083595539, "y" : -112.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		/* 90 */ { "x" : -950, "y" : -322.66892509968, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 91 */ { "x" : -635.82253673536, "y" : -2.314063297901, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 92 */ { "x" : -635.83851134042, "y" : 0.13595112921681, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 93 */ { "x" : -635.80656213031, "y" : -4.764077725019, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 94 */ { "x" : -635.85448594547, "y" : 2.5859655563347, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 95 */ { "x" : -635.84649864294, "y" : 1.3609583427757, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 96 */ { "x" : -635.81454943284, "y" : -3.53907051146, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 97 */ { "x" : -635.85847959673, "y" : 3.1984691631142, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 98 */ { "x" : -635.80256847905, "y" : -5.3765813317984, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : -486.3415600448, "y" : -1.3935524756233, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : -486.35753464985, "y" : 1.0564619514946, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 101 */ { "x" : -486.32558543975, "y" : -3.8435669027412, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 102 */ { "x" : -486.3735092549, "y" : 3.5064763786125, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 103 */ { "x" : -486.36552195238, "y" : 2.2814691650535, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 104 */ { "x" : -486.33357274227, "y" : -2.6185596891822, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 105 */ { "x" : -486.37750290617, "y" : 4.1189799853919, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 106 */ { "x" : -486.32159178848, "y" : -4.4560705095206, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 107 */ { "x" : -950, "y" : 321.62551819445, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 108 */ { "x" : 486.4717644406, "y" : -216.68073468914, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 109 */ { "x" : 486.26181026907, "y" : -213.90354363921, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 110 */ { "x" : 484.90815678836, "y" : 227.79125744183, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 111 */ { "x" : 484.69820261683, "y" : 230.56844849177, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 112 */ { "x" : -487.89251107699, "y" : -222.71985942166, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 113 */ { "x" : -488.10246524852, "y" : -219.94266837173, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 114 */ { "x" : -487.11070725087, "y" : 223.27169507557, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 115 */ { "x" : -487.3206614224, "y" : 226.04888612551, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 116 */ { "x" : -0.077614373673782, "y" : -2.4626457981722, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 117 */ { "x" : -0.10499941090626, "y" : 2.3835365851378, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 118 */ { "x" : -0.050229336441873, "y" : -7.3088281814824, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 119 */ { "x" : -0.13238444813857, "y" : 7.2297189684479, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 120 */ { "x" : -0.11869192952281, "y" : 4.8066277767929, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 121 */ { "x" : -0.063921855057799, "y" : -4.8857369898273, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 122 */ { "x" : -0.13923070744664, "y" : 8.4412645642754, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 123 */ { "x" : -0.043383077133171, "y" : -8.5203737773099, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 124 */ { "x" : 0.77952848346911, "y" : 1.5373542018278, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 125 */ { "x" : 2.7521434462366, "y" : 3.3835365851378, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 126 */ { "x" : 0.80691352070102, "y" : -3.3088281814824, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 127 */ { "x" : 1.7247584090043, "y" : 2.2297189684479, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 128 */ { "x" : 2.73845092762, "y" : 5.8066277767929, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 129 */ { "x" : 0.79322100208503, "y" : -0.88573698982727, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 130 */ { "x" : 1.7179121496962, "y" : 3.4412645642754, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 131 */ { "x" : 0.81375978000966, "y" : -4.5203737773099, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 132 */ { "x" : -950, "y" : -322.66892509968, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 133 */ { "x" : -950, "y" : 321.62551819445, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 134 */ { "x" : -635.67083595539, "y" : 111.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90 },
		/* 135 */ { "x" : -950, "y" : 321.62551819445, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 136 */ { "x" : -635.67083595539, "y" : -112.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 137 */ { "x" : -950, "y" : -322.66892509968, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : 0, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea", "x" : 951 },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea", "x" : 951 },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 2, "v1" : 12, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : -95 },
		{ "v0" : 6, "v1" : 13, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : -95 },
		{ "v0" : 1, "v1" : 14, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : 95 },
		{ "v0" : 5, "v1" : 15, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : 95 },
		{ "v0" : 12, "v1" : 14, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -821 },
		{ "v0" : 13, "v1" : 15, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 585 },
		
		{ "v0" : 1, "v1" : 0, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 5, "v1" : 4, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 2, "v1" : 3, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 6, "v1" : 7, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 0, "v1" : 16, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : 460 },
		{ "v0" : 3, "v1" : 17, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : -460 },
		
		{ "v0" : 18, "v1" : 19, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 10, "v1" : 9, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 21, "v1" : 20, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 2, "v1" : 1, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -950 },
		{ "v0" : 6, "v1" : 5, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 22, "v1" : 23, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 958 },
		{ "v0" : 24, "v1" : 25, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 28, "v1" : 29, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 958 },
		
		{ "v0" : 30, "v1" : 31, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "x" : 572 },
		{ "v0" : 32, "v1" : 33, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "x" : 0 },
		{ "v0" : 34, "v1" : 35, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 39, "v1" : 40, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 41, "v1" : 42, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 43, "v1" : 44, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 47, "v1" : 48, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 49, "v1" : 50, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.96814834 },
		{ "v0" : 51, "v1" : 52, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.96814834 },
		{ "v0" : 53, "v1" : 54, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 55, "v1" : 56, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 60, "v1" : 59, "curve" : 180.00000000015, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 59, "v1" : 60, "curve" : 180.00000000011, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 62, "v1" : 61, "curve" : 179.99999999999, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 61, "v1" : 62, "curve" : 180.00000000001, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 64, "v1" : 63, "curve" : 180.00000000006, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 63, "v1" : 64, "curve" : 180.00000000001, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 66, "v1" : 65, "curve" : 179.99999999999, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 65, "v1" : 66, "curve" : 179.99999999999, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 68, "v1" : 67, "curve" : 179.99999999994, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 67, "v1" : 68, "curve" : 180.00000000006, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 70, "v1" : 69, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 69, "v1" : 70, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 72, "v1" : 71, "curve" : 179.99999999998, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 71, "v1" : 72, "curve" : 179.99999999998, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 77, "v1" : 78, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.96814834 },
		{ "v0" : 80, "v1" : 79, "curve" : -91.636910923379, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 82, "v1" : 81, "curve" : 91.636910923384, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 84, "v1" : 83, "curve" : -91.636910923386, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 86, "v1" : 85, "curve" : 91.636910923367, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 38, "v1" : 87, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 92, "v1" : 91, "curve" : 180.04149903472, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 91, "v1" : 92, "curve" : 180.04149903448, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 94, "v1" : 93, "curve" : 180.04149903461, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 93, "v1" : 94, "curve" : 180.04149903457, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 96, "v1" : 95, "curve" : 180.0414990346, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 95, "v1" : 96, "curve" : 180.04149903458, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 98, "v1" : 97, "curve" : 180.04149903458, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 97, "v1" : 98, "curve" : 180.0414990346, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 100, "v1" : 99, "curve" : 180.04149903447, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180.04149903471, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180.0414990346, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 180.04149903457, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 104, "v1" : 103, "curve" : 180.04149903454, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 180.04149903457, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 106, "v1" : 105, "curve" : 180.04149903458, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 105, "v1" : 106, "curve" : 180.04149903459, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 108, "v1" : 109, "curve" : -196.43548932859, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 109, "v1" : 108, "curve" : -211.97212519444, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 110, "v1" : 111, "curve" : -196.43548932841, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 111, "v1" : 110, "curve" : -211.97212519486, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 112, "v1" : 113, "curve" : -196.43548932818, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 113, "v1" : 112, "curve" : -211.97212519503, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 114, "v1" : 115, "curve" : -196.4354893283, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 115, "v1" : 114, "curve" : -211.97212519445, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 117, "v1" : 116, "curve" : 179.83332296199, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 116, "v1" : 117, "curve" : 179.8333229623, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 119, "v1" : 118, "curve" : 179.83332296215, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 118, "v1" : 119, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 121, "v1" : 120, "curve" : 179.83332296204, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 120, "v1" : 121, "curve" : 179.83332296211, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 123, "v1" : 122, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 122, "v1" : 123, "curve" : 179.83332296208, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 125, "v1" : 124, "curve" : 179.83332296199, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 124, "v1" : 125, "curve" : 179.8333229623, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 127, "v1" : 126, "curve" : 179.83332296215, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 126, "v1" : 127, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 129, "v1" : 128, "curve" : 179.83332296204, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 128, "v1" : 129, "curve" : 179.83332296211, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 131, "v1" : 130, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 130, "v1" : 131, "curve" : 179.83332296208, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 134, "v1" : 135, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 136, "v1" : 137, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" }

	],

	"goals" : [
		{ "p0" : [-957.4,-90 ], "p1" : [-957.4,90 ], "team" : "red" },
		{ "p0" : [957.4,90 ], "p1" : [957.4,-90 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-950,90 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [-950,-90 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [950,90 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [950,-90 ], "color" : "6666CC", "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,-460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,-460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -456, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -456, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -508, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -508, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -1002, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -1002, "bCoef" : 0.2, "cMask" : ["all" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5,
		"radius" : 15,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickingDamping" : 0.96,
		"kickback" : 0

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00",
		"cMask" : [ "all"
		],
		"gravity" : [ 0, 0
		],
		"cGroup" : [ "ball"
		]

	},

	"cameraWidth" : 0,

	"cameraHeight" : 0,

	"maxViewWidth" : 0,

	"cameraFollow" : "ball",

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	],

	"canBeStored" : true,

	"kickOffReset" : "partial",

	"joints" : [
		

	]
}`
let admins = []



room.setCustomStadium(futsalx5)
room.setTimeLimit(5)
room.setScoreLimit(3)
room.setTeamsLock(true)

room.onPlayerJoin = (player) => {
    room.sendAnnouncement(`bem vindo a sala ${player.name}`, undefined, 0x00FF00, 'bold')
}

room.onPlayerChat = (player, message) => {
    if (message == "!admin" && !admins.includes(player.id)) {
        room.setPlayerAdmin(player.id, true)
        admins.push(player.id)
    }
    else if (message == '!radmin' && admins.includes(player.id)) {
        room.setPlayerAdmin(player.id, false)
		let indice = admins.findIndex((element) => element === player.id);
		return admins.splice(indice, 1)
    }
	else if (message == "!artilheiros") {
		let string = JSON.stringify(variavel) //a gente converte o objeto recebido em array
		room.sendAnnouncement(string, player.id,  0x00FF00, 'bold')
	}
    else if (message.includes('fodase') || message.includes('fds') || message.includes('pau no cu') || message.includes('vai tomar no cu') || message.includes('porra') || message.includes('caralho') || message.includes('burro') || message.includes('imbecil')) {
        return false
    }
}

  

let string; // Declare a variável em um escopo mais amplo

room.onPlayerBallKick = (player) => {
  ultimoAChutar = player.name;
  string = ultimoAChutar.toString(); // Converta o que foi recebido na linha 452 para string
  return string;
}

room.onTeamGoal = () => {  
  const frasesDeGol = [
    "Gol!!! O estádio vai à loucura!",
    "É do fundo da rede! Golaço!",
    "Chutaço! A bola morreu no cantinho!",
    "Gol de placa! Que pintura!",
    "Dá-lhe, dá-lhe, dá-lhe gol! A torcida vai ao delírio!",
    "Estufou as redes! É só comemorar!",
    "É do artilheiro! Ele não perdoa!",
    "A bola entra mansinha no gol! Golzinho!",
    "Gooooolaaaaço! Não tinha como defender!",
    "Eeeeeéééé gol! É a festa da equipe!"
  ];
  
  let nomeDoJogador = string; // Acesse a variável `string` declarada no escopo mais amplo
  var indiceAleatorio = Math.floor(Math.random() * frasesDeGol.length);
  let indiceJogador = listadeJogadores.findIndex((jogador) => jogador.nome == nomeDoJogador); //acha indice do jogador
  
  if (indiceJogador !== -1) {
    listadeJogadores[indiceJogador].gols += 1; //como existe dados desse player retorna um gol a mais para ele
  } else {
    listadeJogadores.push({ nome: nomeDoJogador, gols: 1 }); //aqui ele empurra para dentro já que não existe dados desse player
  }
}


  

room.onPlayerLeave = (player) => {
	let indice = admins.findIndex((element) => element == player.id) //ache o indice em que elemento seja igual a player.id
	return admins.splice(indice, 1)
}



let variavel;

room.onGameTick = () => {
	function ordenaLista() {
		listaArtilheiros =	listadeJogadores.sort((jogadorA, jogadorB) => jogadorB - jogadorA)
		return listaArtilheiros 
	}
	return variavel = ordenaLista() //atribuo o objeto a uma variavel chamada "variavel"
}




setInterval(() => {
    console.log(admins)
	console.table(variavel) //eu monitoro os artilheiros
}, 1000)