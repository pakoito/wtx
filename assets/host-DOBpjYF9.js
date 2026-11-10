import{Mt as e,an as t,h as n,m as r,on as i,y as a}from"./chassis-6UkNykE2.js";import{bt as o,l as s,ot as c,t as l,xt as u,yt as d}from"./sim-PK6mKbVk.js";import{A as f,D as p,E as m,F as h,M as g,N as _,O as v,P as y,S as b,a as ee,b as x,c as te,d as S,f as ne,h as C,i as w,j as T,k as E,l as re,n as ie,o as D,p as O,r as ae,s as k,u as A}from"./match-DDEXjmzF.js";import{o as oe,t as j}from"./selection-B4jQIuNw.js";import{c as se}from"./layer-qAdz-y0z.js";import{o as M,s as N}from"./view-DWSRvHZz.js";var P=e=>{if(!Object.isFrozen(e)){Object.freeze(e);for(let t of Object.keys(e))P(e[t])}return e},F=e=>(t,n,r,i,a)=>P(e(t,n,r,i,a)),ce=e=>(t,n)=>P(e(t,n)),I={anchorMs:null,pendingMs:0},L=e=>1e3/e,le=(e,t,n,r)=>{if(!Number.isFinite(t)||e.anchorMs!==null&&t<e.anchorMs)return{clock:e,ticks:0,interrupted:!1};let i=e.anchorMs===null?0:t-e.anchorMs;if(i>=2e3)return{clock:I,ticks:0,interrupted:!0};let a=i>0&&r>0?i*r:0,o=e.pendingMs+a,s=Math.floor(o/n);if(!(n>0)||!Number.isFinite(s))return{clock:{anchorMs:t,pendingMs:0},ticks:0,interrupted:!1};let c=o-s*n;return{clock:{anchorMs:t,pendingMs:c>=0&&c<n?c:0},ticks:s,interrupted:!1}},ue=(e,t)=>({clock:I,running:t,interrupted:!1,speed:1,tickRate:e}),de=(e,t)=>({...e,running:t,interrupted:!1,clock:I}),fe=(e,t)=>({...e,speed:t}),R=e=>({...e,clock:I}),z=e=>e.running?{...e,running:!1,interrupted:!0,clock:I}:R(e),pe=(e,t,n)=>{if(!e.running)return R(e);let r=le(e.clock,t,L(e.tickRate),e.speed);if(r.interrupted)return z(e);for(let t=0;t<r.ticks;t++)if(!n())return{...e,clock:I,running:!1};return{...e,clock:r.clock}},me=e=>{let t=L(e.tickRate);if(!(t>0))return 0;let n=e.clock.pendingMs/t;return n>0?n<1?n:1:0},B={windowStartMs:null,frames:0,fps:null},he=(e,t,n)=>{if(!Number.isFinite(t))return e;if(e.windowStartMs===null)return{windowStartMs:t,frames:0,fps:e.fps};let r=e.frames+1,i=t-e.windowStartMs;return!(n>0)||!(i>=n)?{...e,frames:r}:{windowStartMs:t,frames:0,fps:r*1e3/i}},ge=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{
			"key": "stock",
			"id": 1,
			"name": "Stock",
			"mode": "sandbox",
			"placements": [
				{"piece": "herald-entourage", "cells": [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2]]},
				{"piece": "interceptor-captain-drum", "cells": [[4, 0], [5, 0], [4, 1], [5, 1]]},
				{"piece": "sapper", "cells": [[0, 2], [0, 3], [1, 3], [0, 4]]},
				{"piece": "charger-captain-fade", "cells": [[3, 2], [4, 2], [5, 2], [4, 3]]},
				{"piece": "shinobi", "cells": [[2, 3]], "point": [2, 2]},
				{"piece": "first-contact-raise", "cells": [[3, 3]], "point": [3, 2]},
				{"piece": "quagmire", "cells": [[5, 3], [5, 4]]},
				{"piece": "archer-captain-turnback", "cells": [[1, 4], [2, 4], [3, 4], [4, 4]]},
				{"piece": "palisade", "cells": [[0, 5]], "point": [0, 4]},
				{"piece": "artillery-captain-hold-fast", "cells": [[1, 5], [2, 5], [3, 5], [4, 5]]},
				{"piece": "rally", "cells": [[5, 5]]}
			],
			"formation": [
				{"piece": "charger-captain-fade", "position": [1.5, 3.5], "heading": 90},
				{"piece": "archer-captain-turnback", "position": [3.5, 3.5], "heading": 90},
				{"piece": "interceptor-captain-drum", "position": [5.5, 3.5], "heading": 90},
				{"piece": "artillery-captain-hold-fast", "position": [7.5, 3.5], "heading": 90},
				{"piece": "sapper", "position": [4.5, 2], "heading": 90},
				{"piece": "herald-entourage", "position": [2.5, 4.7], "heading": 90}
			]
		},
		{
			"key": "opponent",
			"id": 2,
			"name": "Opponent",
			"mode": "sandbox",
			"placements": [
				{"piece": "archer-captain-deep-mire", "cells": [[0, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]]},
				{"piece": "last-stand", "cells": [[1, 0]]},
				{"piece": "heavy-hand", "cells": [[2, 0]]},
				{"piece": "charger-captain", "cells": [[4, 0], [4, 1], [4, 2], [5, 2]]},
				{"piece": "regeneration", "cells": [[5, 0]]},
				{"piece": "revival-cut", "cells": [[5, 1]]},
				{"piece": "marshal", "cells": [[0, 2], [0, 3], [0, 4], [0, 5]]},
				{"piece": "contact-slow", "cells": [[1, 2]], "point": [0, 2]},
				{"piece": "fence-rebuild", "cells": [[2, 2], [3, 2]]},
				{"piece": "interceptor-captain", "cells": [[1, 3], [2, 3], [3, 3], [4, 3]]},
				{"piece": "ward", "cells": [[5, 3]], "point": [4, 3]},
				{"piece": "artillery-captain", "cells": [[1, 4], [2, 4], [2, 5], [3, 5]]},
				{"piece": "firebrand", "cells": [[3, 4], [4, 4], [5, 4]]},
				{"piece": "ambusher", "cells": [[1, 5]], "point": [0, 5]},
				{"piece": "launch-morale", "cells": [[4, 5]]},
				{"piece": "muster", "cells": [[5, 5]]}
			],
			"formation": [
				{"piece": "charger-captain", "position": [2.5, 5.75], "heading": 90},
				{"piece": "archer-captain-deep-mire", "position": [4.5, 5.75], "heading": 90},
				{"piece": "interceptor-captain", "position": [6.5, 5.75], "heading": 90},
				{"piece": "artillery-captain", "position": [0.5, 2.75], "heading": 90},
				{"piece": "marshal", "position": [8.5, 5.75], "heading": 90}
			]
		}
	]
}
`,_e=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{"key": "charger-captain", "id": 1, "name": "Charger Captain", "faction": "launch"},
		{"key": "archer-captain", "id": 2, "name": "Archer Captain", "faction": "launch"},
		{"key": "interceptor-captain", "id": 3, "name": "Interceptor Captain", "faction": "launch"},
		{"key": "artillery-captain", "id": 4, "name": "Artillery Captain", "faction": "launch"},
		{"key": "tactician", "id": 5, "name": "Tactician", "faction": "launch"},
		{"key": "standard-bearer", "id": 6, "name": "Standard Bearer", "faction": "launch"},
		{"key": "drummer", "id": 7, "name": "Drummer", "faction": "launch"},
		{"key": "sapper", "id": 8, "name": "Sapper", "faction": "launch"},
		{"key": "marshal", "id": 9, "name": "Marshal", "faction": "launch"},
		{"key": "herald", "id": 10, "name": "Herald", "faction": "launch"},
		{"key": "ward-bearer", "id": 11, "name": "Ward Bearer", "faction": "launch"},
		{"key": "palisade-builder", "id": 12, "name": "Palisade Builder", "faction": "launch"},
		{"key": "banner-guard", "id": 13, "name": "Banner Guard", "faction": "launch"},
		{"key": "quartermaster", "id": 14, "name": "Quartermaster", "faction": "launch"},
		{"key": "piper", "id": 15, "name": "Piper", "faction": "launch"},
		{"key": "stake-crew", "id": 16, "name": "Stake Crew", "faction": "launch"},
		{"key": "field-surgeon", "id": 17, "name": "Field Surgeon", "faction": "launch"},
		{"key": "rally-priest", "id": 18, "name": "Rally Priest", "faction": "launch"},
		{"key": "pike-master", "id": 19, "name": "Pike Master", "faction": "launch"},
		{"key": "duelist", "id": 20, "name": "Duelist", "faction": "launch"},
		{"key": "drill-master", "id": 21, "name": "Drill Master", "faction": "launch"},
		{"key": "muster-sergeant", "id": 22, "name": "Muster Sergeant", "faction": "launch"},
		{"key": "snare-crew", "id": 23, "name": "Snare Crew", "faction": "launch"},
		{"key": "pathfinder", "id": 24, "name": "Pathfinder", "faction": "launch"},
		{"key": "engineer", "id": 25, "name": "Engineer", "faction": "launch"},
		{"key": "last-guard", "id": 26, "name": "Last Guard", "faction": "launch"},
		{"key": "chaplain", "id": 27, "name": "Chaplain", "faction": "launch"},
		{"key": "cantor", "id": 28, "name": "Cantor", "faction": "launch"},
		{"key": "ambusher", "id": 29, "name": "Ambusher", "faction": "launch"},
		{"key": "shinobi", "id": 30, "name": "Shinobi", "faction": "launch"},
		{"key": "firebrand", "id": 31, "name": "Firebrand", "faction": "launch"},
		{"key": "rampart", "id": 32, "name": "Rampart", "faction": "launch"},
		{"key": "quagmire", "id": 33, "name": "Quagmire", "faction": "launch"}
	]
}
`,ve=`{
	"ranges": [{"author": "core", "first": 0, "last": 99}],
	"items": [
		{"key": "charger", "id": 0, "name": "charger", "action": {"kind": "charge"}},
		{"key": "interceptor", "id": 1, "name": "interceptor", "action": {"kind": "spear"}},
		{"key": "archer", "id": 2, "name": "archer", "action": {"kind": "volley"}},
		{"key": "artillery", "id": 3, "name": "artillery", "action": {"kind": "transform", "burst_shape": "circle"}}
	]
}
`,ye=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{
			"key": "fence",
			"id": 1,
			"name": "Fence",
			"shape": "fence",
			"hits": 3,
			"damage_stages": [2, 1],
			"lifetime": {"kind": "hits"}
		},
		{
			"key": "tower",
			"id": 2,
			"name": "Tower",
			"shape": "tower",
			"hits": 3,
			"damage_stages": [2, 1],
			"lifetime": {"kind": "hits"}
		},
		{
			"key": "war-drum",
			"id": 3,
			"name": "War Drum",
			"shape": "war-drum",
			"hits": 3,
			"damage_stages": [2, 1],
			"lifetime": {"kind": "timed", "ticks": 3600},
			"grant": {"components": [{"kind": "morale", "starting": 0, "ceiling": 0, "fill": 4}]},
			"radius": 1.5
		}
	]
}
`,be=`{
	"ranges": [
		{
			"author": "core",
			"first": 1,
			"last": 999
		}
	],
	"items": [
		{
			"key": "classic",
			"id": 1,
			"name": "Classic",
			"dimensions": {
				"width": 9,
				"height": 12.5
			},
			"castle_insides": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						0.625
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						11.875
					]
				}
			],
			"castle_walls": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"deployment_zones": [
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						3.125
					]
				},
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						9.375
					]
				}
			],
			"gates": [
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"siege_zones": [
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								2.1875
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								1.5625
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								1.5625
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								1.5625
							]
						},
						"multiplier": 1.5
					}
				],
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.3125
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.9375
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.9375
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.9375
							]
						},
						"multiplier": 1.5
					}
				]
			],
			"regions": [
				{
					"area": {
						"shape": "tar-patch",
						"anchor": [
							4.5,
							5.75
						]
					},
					"terrain": "tar"
				},
				{
					"area": {
						"shape": "fire-patch",
						"anchor": [
							6.75,
							4.75
						]
					},
					"terrain": "fire"
				},
				{
					"area": {
						"shape": "trees-strip",
						"anchor": [
							2,
							2.875
						]
					},
					"terrain": "trees"
				}
			],
			"entities": [
				{
					"entity": "tower",
					"anchor": [
						6.5,
						2.75
					],
					"owner": 0,
					"blocks": [
						1
					]
				},
				{
					"entity": "tower",
					"anchor": [
						2.5,
						9.75
					],
					"owner": 1,
					"blocks": [
						0
					]
				}
			]
		},
		{
			"key": "ford",
			"id": 2,
			"name": "Tar Ford",
			"dimensions": {
				"width": 9,
				"height": 12.5
			},
			"castle_insides": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						0.625
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						11.875
					]
				}
			],
			"castle_walls": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"deployment_zones": [
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						3.125
					]
				},
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						9.375
					]
				}
			],
			"gates": [
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"siege_zones": [
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								2.1875
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								1.5625
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								1.5625
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								1.5625
							]
						},
						"multiplier": 1.5
					}
				],
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.3125
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.9375
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.9375
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.9375
							]
						},
						"multiplier": 1.5
					}
				]
			],
			"regions": [
				{
					"area": {
						"shape": "tar-bank",
						"anchor": [
							1,
							6.25
						]
					},
					"terrain": "tar"
				},
				{
					"area": {
						"shape": "tar-bank",
						"anchor": [
							8,
							6.25
						]
					},
					"terrain": "tar"
				},
				{
					"area": {
						"shape": "trees-strip",
						"anchor": [
							2,
							3.5
						]
					},
					"terrain": "trees"
				},
				{
					"area": {
						"shape": "trees-strip",
						"anchor": [
							7,
							9
						]
					},
					"terrain": "trees"
				}
			],
			"entities": []
		},
		{
			"key": "embers",
			"id": 3,
			"name": "Embers",
			"dimensions": {
				"width": 9,
				"height": 12.5
			},
			"castle_insides": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						0.625
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						11.875
					]
				}
			],
			"castle_walls": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"deployment_zones": [
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						3.125
					]
				},
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						9.375
					]
				}
			],
			"gates": [
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"siege_zones": [
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								2.1875
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								1.5625
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								1.5625
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								1.5625
							]
						},
						"multiplier": 1.5
					}
				],
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.3125
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.9375
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.9375
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.9375
							]
						},
						"multiplier": 1.5
					}
				]
			],
			"regions": [
				{
					"area": {
						"shape": "fire-patch",
						"anchor": [
							2.25,
							5
						]
					},
					"terrain": "fire"
				},
				{
					"area": {
						"shape": "fire-patch",
						"anchor": [
							6.75,
							7.5
						]
					},
					"terrain": "fire"
				},
				{
					"area": {
						"shape": "tar-patch",
						"anchor": [
							4.5,
							6.25
						]
					},
					"terrain": "tar"
				}
			],
			"entities": [
				{
					"entity": "tower",
					"anchor": [
						6.5,
						2.75
					],
					"owner": 0,
					"blocks": [
						1
					]
				},
				{
					"entity": "tower",
					"anchor": [
						2.5,
						9.75
					],
					"owner": 1,
					"blocks": [
						0
					]
				}
			]
		},
		{
			"key": "bastions",
			"id": 4,
			"name": "Bastions",
			"dimensions": {
				"width": 9,
				"height": 12.5
			},
			"castle_insides": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						0.625
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						11.875
					]
				}
			],
			"castle_walls": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"deployment_zones": [
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						3.125
					]
				},
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						9.375
					]
				}
			],
			"gates": [
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"siege_zones": [
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								2.1875
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								1.5625
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								1.5625
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								1.5625
							]
						},
						"multiplier": 1.5
					}
				],
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.3125
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.9375
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.9375
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.9375
							]
						},
						"multiplier": 1.5
					}
				]
			],
			"regions": [
				{
					"area": {
						"shape": "trees-strip",
						"anchor": [
							1.25,
							6.25
						]
					},
					"terrain": "trees"
				},
				{
					"area": {
						"shape": "trees-strip",
						"anchor": [
							7.75,
							6.25
						]
					},
					"terrain": "trees"
				}
			],
			"entities": [
				{
					"entity": "tower",
					"anchor": [
						1,
						2.75
					],
					"owner": 0,
					"blocks": [
						1
					]
				},
				{
					"entity": "tower",
					"anchor": [
						8,
						2.75
					],
					"owner": 0,
					"blocks": [
						1
					]
				},
				{
					"entity": "tower",
					"anchor": [
						8,
						9.75
					],
					"owner": 1,
					"blocks": [
						0
					]
				},
				{
					"entity": "tower",
					"anchor": [
						1,
						9.75
					],
					"owner": 1,
					"blocks": [
						0
					]
				},
				{
					"entity": "fence",
					"anchor": [
						4.5,
						6.25
					],
					"blocks": [
						0,
						1
					]
				}
			]
		},
		{
			"key": "open",
			"id": 5,
			"name": "Open Field",
			"dimensions": {
				"width": 9,
				"height": 12.5
			},
			"castle_insides": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						0.625
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						11.875
					]
				}
			],
			"castle_walls": [
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "castle-band",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"deployment_zones": [
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						3.125
					]
				},
				{
					"shape": "half-field",
					"anchor": [
						4.5,
						9.375
					]
				}
			],
			"gates": [
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						1.875
					]
				},
				{
					"shape": "gate-lane",
					"anchor": [
						4.5,
						10.625
					]
				}
			],
			"siege_zones": [
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								2.1875
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								2.1875
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								1.5625
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								1.5625
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								1.5625
							]
						},
						"multiplier": 1.5
					}
				],
				[
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.3125
							]
						},
						"multiplier": 2
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.3125
							]
						},
						"multiplier": 1
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								7,
								10.9375
							]
						},
						"multiplier": 1.5
					},
					{
						"area": {
							"shape": "gate-tile",
							"anchor": [
								4.5,
								10.9375
							]
						},
						"multiplier": 3
					},
					{
						"area": {
							"shape": "flank-tile",
							"anchor": [
								2,
								10.9375
							]
						},
						"multiplier": 1.5
					}
				]
			],
			"regions": [],
			"entities": []
		}
	]
}
`,xe=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{
			"key": "sandbox",
			"id": 1,
			"grid": {"width": 6, "height": 6},
			"time_control": {"pause": true, "slow": true, "scrub": true, "scrub_resume": true},
			"overrides": {"clock length": 7200}
		}
	]
}
`,Se=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{
			"key": "charger-captain-cleave",
			"id": 1,
			"name": "Charger Captain: Cleave",
			"character": "charger-captain",
			"version": 2,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0]],
			"role": "character",
			"chassis": "charger",
			"strength": 20,
			"intelligence": 135,
			"stratagem": "cleave"
		},
		{
			"key": "archer-captain-turnback",
			"id": 2,
			"name": "Archer Captain: Turnback",
			"character": "archer-captain",
			"version": 2,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0]],
			"role": "character",
			"chassis": "archer",
			"strength": 30,
			"intelligence": 125,
			"stratagem": "turnback"
		},
		{
			"key": "charger-captain",
			"id": 3,
			"name": "Charger Captain: Scorch",
			"character": "charger-captain",
			"version": 1,
			"shape": [[0, 0], [0, 1], [0, 2], [1, 2]],
			"role": "character",
			"chassis": "charger",
			"strength": 40,
			"intelligence": 115,
			"stratagem": "scorch"
		},
		{
			"key": "archer-captain",
			"id": 4,
			"name": "Archer Captain: Mire",
			"character": "archer-captain",
			"version": 1,
			"shape": [[1, 0], [0, 1], [1, 1], [2, 1]],
			"role": "character",
			"chassis": "archer",
			"strength": 40,
			"intelligence": 115,
			"stratagem": "mire"
		},
		{
			"key": "interceptor-captain",
			"id": 5,
			"name": "Interceptor Captain: Bolster",
			"character": "interceptor-captain",
			"version": 1,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0]],
			"role": "character",
			"chassis": "interceptor",
			"strength": 20,
			"intelligence": 135,
			"stratagem": "bolster"
		},
		{
			"key": "artillery-captain-hold-fast",
			"id": 6,
			"name": "Artillery Captain: Hold Fast",
			"character": "artillery-captain",
			"version": 2,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0]],
			"role": "character",
			"chassis": "artillery",
			"strength": 20,
			"intelligence": 135,
			"stratagem": "hold-fast"
		},
		{
			"key": "artillery-captain",
			"id": 7,
			"name": "Artillery Captain: Brace",
			"character": "artillery-captain",
			"version": 1,
			"shape": [[0, 0], [1, 0], [1, 1], [2, 1]],
			"role": "character",
			"chassis": "artillery",
			"strength": 40,
			"intelligence": 115,
			"stratagem": "brace"
		},
		{
			"key": "launch-trump",
			"id": 8,
			"name": "Tactician: Launch Trump",
			"character": "tactician",
			"version": 1,
			"shape": [[0, 0], [1, 0]],
			"role": "one-shot",
			"payload": "launch-trump"
		},
		{
			"key": "launch-passive",
			"id": 9,
			"name": "Standard Bearer: Launch Passive",
			"character": "standard-bearer",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "launch-passive",
			"scope": "row"
		},
		{
			"key": "launch-morale",
			"id": 10,
			"name": "Drummer: Launch Morale",
			"character": "drummer",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "launch-morale",
			"scope": "self"
		},
		{
			"key": "sapper",
			"id": 11,
			"name": "Sapper: Stakes",
			"character": "sapper",
			"version": 1,
			"shape": [[0, 0], [0, 1], [1, 1], [0, 2]],
			"role": "character",
			"chassis": "interceptor",
			"strength": 30,
			"intelligence": 125,
			"stratagem": "stakes"
		},
		{
			"key": "marshal",
			"id": 12,
			"name": "Marshal: Vanguard",
			"character": "marshal",
			"version": 1,
			"shape": [[0, 0], [0, 1], [0, 2], [0, 3]],
			"role": "character",
			"chassis": "charger",
			"strength": 70,
			"intelligence": 85,
			"stratagem": "vanguard"
		},
		{
			"key": "herald",
			"id": 13,
			"name": "Herald: Retainer",
			"character": "herald",
			"version": 1,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0]],
			"role": "character",
			"chassis": "archer",
			"strength": 60,
			"intelligence": 95,
			"stratagem": "retainer"
		},
		{
			"key": "ward",
			"id": 14,
			"name": "Ward Bearer: Ward",
			"character": "ward-bearer",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "ward",
			"scope": "pointed"
		},
		{
			"key": "palisade",
			"id": 15,
			"name": "Palisade Builder: Palisade",
			"character": "palisade-builder",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "palisade",
			"scope": "pointed"
		},
		{
			"key": "launch-trump-tall",
			"id": 16,
			"name": "Tactician: Tall Launch Trump",
			"character": "tactician",
			"version": 2,
			"shape": [[0, 0], [0, 1]],
			"role": "one-shot",
			"payload": "launch-trump"
		},
		{
			"key": "strength-raise",
			"id": 17,
			"name": "Banner Guard: Strength Raise",
			"character": "banner-guard",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "strength-raise",
			"scope": "adjacent"
		},
		{
			"key": "max-troops-raise",
			"id": 18,
			"name": "Quartermaster: Max Troops Raise",
			"character": "quartermaster",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "max-troops-raise",
			"scope": "row"
		},
		{
			"key": "fill-raise",
			"id": 19,
			"name": "Piper: Fill Raise",
			"character": "piper",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "fill-raise",
			"scope": "row"
		},
		{
			"key": "fence-line",
			"id": 20,
			"name": "Stake Crew: Fence Line",
			"character": "stake-crew",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "fence-line",
			"scope": "row"
		},
		{
			"key": "regeneration",
			"id": 21,
			"name": "Field Surgeon: Regeneration",
			"character": "field-surgeon",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "regeneration",
			"scope": "adjacent"
		},
		{
			"key": "revival-cut",
			"id": 22,
			"name": "Rally Priest: Revival Cut",
			"character": "rally-priest",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "revival-cut",
			"scope": "army-wide"
		},
		{
			"key": "long-spear",
			"id": 23,
			"name": "Pike Master: Long Spear",
			"character": "pike-master",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "long-spear",
			"scope": "adjacent",
			"filter": "interceptor"
		},
		{
			"key": "first-contact-raise",
			"id": 24,
			"name": "Duelist: First Contact Raise",
			"character": "duelist",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "first-contact-raise",
			"scope": "pointed"
		},
		{
			"key": "heavy-hand",
			"id": 25,
			"name": "Drill Master: Heavy Hand",
			"character": "drill-master",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "heavy-hand",
			"scope": "adjacent"
		},
		{
			"key": "muster",
			"id": 26,
			"name": "Muster Sergeant: Muster",
			"character": "muster-sergeant",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "muster",
			"scope": "army-wide"
		},
		{
			"key": "contact-slow",
			"id": 27,
			"name": "Snare Crew: Contact Slow",
			"character": "snare-crew",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "contact-slow",
			"scope": "pointed"
		},
		{
			"key": "sure-footing",
			"id": 28,
			"name": "Pathfinder: Sure Footing",
			"character": "pathfinder",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "sure-footing",
			"scope": "adjacent"
		},
		{
			"key": "fence-rebuild",
			"id": 29,
			"name": "Engineer: Fence Rebuild",
			"character": "engineer",
			"version": 1,
			"shape": [[0, 0], [1, 0]],
			"role": "one-shot",
			"payload": "fence-rebuild"
		},
		{
			"key": "last-stand",
			"id": 30,
			"name": "Last Guard: Last Stand",
			"character": "last-guard",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "last-stand",
			"scope": "army-wide"
		},
		{
			"key": "rally",
			"id": 31,
			"name": "Chaplain: Rally",
			"character": "chaplain",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "rally",
			"scope": "army-wide"
		},
		{
			"key": "channel-echo",
			"id": 32,
			"name": "Cantor: Channel Echo",
			"character": "cantor",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "channel-echo",
			"scope": "army-wide"
		},
		{
			"key": "interceptor-captain-drum",
			"id": 33,
			"name": "Interceptor Captain: War Drum",
			"character": "interceptor-captain",
			"version": 2,
			"shape": [[0, 0], [1, 0], [0, 1], [1, 1]],
			"role": "character",
			"chassis": "interceptor",
			"strength": 40,
			"intelligence": 115,
			"stratagem": "war-drum"
		},
		{
			"key": "ambusher",
			"id": 34,
			"name": "Ambusher: Ambusher",
			"character": "ambusher",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "ambusher",
			"scope": "pointed"
		},
		{
			"key": "shinobi",
			"id": 35,
			"name": "Shinobi: Shinobi",
			"character": "shinobi",
			"version": 1,
			"shape": [[0, 0]],
			"role": "passive",
			"payload": "shinobi",
			"scope": "pointed"
		},
		{
			"key": "charger-captain-fade",
			"id": 36,
			"name": "Charger Captain: Fade",
			"character": "charger-captain",
			"version": 3,
			"shape": [[0, 0], [1, 0], [2, 0], [1, 1]],
			"role": "character",
			"chassis": "charger",
			"strength": 90,
			"intelligence": 65,
			"stratagem": "fade"
		},
		{
			"key": "firebrand",
			"id": 37,
			"name": "Firebrand: Firebrand",
			"character": "firebrand",
			"version": 1,
			"shape": [[0, 0], [1, 0], [2, 0]],
			"role": "one-shot",
			"payload": "firebrand"
		},
		{
			"key": "rampart",
			"id": 38,
			"name": "Rampart: Rampart",
			"character": "rampart",
			"version": 1,
			"shape": [[0, 0], [0, 1], [1, 1]],
			"role": "one-shot",
			"payload": "rampart"
		},
		{
			"key": "quagmire",
			"id": 39,
			"name": "Quagmire: Quagmire",
			"character": "quagmire",
			"version": 1,
			"shape": [[0, 0], [0, 1]],
			"role": "one-shot",
			"payload": "quagmire"
		},
		{
			"key": "charger-captain-heavy-fade",
			"id": 40,
			"name": "Charger Captain: Heavy Fade",
			"character": "charger-captain",
			"version": 4,
			"shape": [[0, 0], [1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [0, 2], [1, 2]],
			"role": "character",
			"chassis": "charger",
			"strength": 180,
			"intelligence": 90,
			"stratagem": "fade"
		},
		{
			"key": "archer-captain-deep-mire",
			"id": 41,
			"name": "Archer Captain: Deep Mire",
			"character": "archer-captain",
			"version": 3,
			"shape": [[0, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
			"role": "character",
			"chassis": "archer",
			"strength": 40,
			"intelligence": 170,
			"stratagem": "mire"
		},
		{
			"key": "interceptor-captain-shield-bolster",
			"id": 42,
			"name": "Interceptor Captain: Shield Bolster",
			"character": "interceptor-captain",
			"version": 3,
			"shape": [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
			"role": "character",
			"chassis": "interceptor",
			"strength": 100,
			"intelligence": 135,
			"stratagem": "bolster"
		},
		{
			"key": "interceptor-captain-hold-fast",
			"id": 43,
			"name": "Interceptor Captain: Hold Fast",
			"character": "interceptor-captain",
			"version": 4,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1]],
			"role": "character",
			"chassis": "interceptor",
			"strength": 150,
			"intelligence": 135,
			"stratagem": "hold-fast"
		},
		{
			"key": "artillery-captain-cleave",
			"id": 44,
			"name": "Artillery Captain: Cleave",
			"character": "artillery-captain",
			"version": 3,
			"shape": [[1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [3, 2]],
			"role": "character",
			"chassis": "artillery",
			"strength": 100,
			"intelligence": 185,
			"stratagem": "cleave"
		},
		{
			"key": "sapper-siege-stakes",
			"id": 45,
			"name": "Sapper: Siege Stakes",
			"character": "sapper",
			"version": 3,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [3, 1], [0, 2], [3, 2]],
			"role": "character",
			"chassis": "artillery",
			"strength": 100,
			"intelligence": 160,
			"stratagem": "stakes"
		},
		{
			"key": "marshal-grand-vanguard",
			"id": 46,
			"name": "Marshal: Grand Vanguard",
			"character": "marshal",
			"version": 2,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [3, 2]],
			"role": "character",
			"chassis": "charger",
			"strength": 160,
			"intelligence": 95,
			"stratagem": "vanguard"
		},
		{
			"key": "marshal-bolster",
			"id": 47,
			"name": "Marshal: Bolster",
			"character": "marshal",
			"version": 3,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2]],
			"role": "character",
			"chassis": "charger",
			"strength": 180,
			"intelligence": 100,
			"stratagem": "bolster"
		},
		{
			"key": "marshal-hold-fast",
			"id": 48,
			"name": "Marshal: Hold Fast",
			"character": "marshal",
			"version": 4,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2]],
			"role": "character",
			"chassis": "charger",
			"strength": 200,
			"intelligence": 20,
			"stratagem": "hold-fast"
		},
		{
			"key": "herald-entourage",
			"id": 49,
			"name": "Herald: Entourage",
			"character": "herald",
			"version": 2,
			"shape": [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2]],
			"role": "character",
			"chassis": "archer",
			"strength": 100,
			"intelligence": 95,
			"stratagem": "entourage"
		},
		{
			"key": "sapper-field-stakes",
			"id": 50,
			"name": "Sapper: Field Stakes",
			"character": "sapper",
			"version": 2,
			"shape": [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
			"role": "character",
			"chassis": "interceptor",
			"strength": 30,
			"intelligence": 125,
			"stratagem": "stakes"
		}
	]
}
`,Ce=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{"key": "castle-band", "id": 1, "kind": "rectangle", "width": 9, "depth": 1.25},
		{"key": "half-field", "id": 2, "kind": "rectangle", "width": 9, "depth": 6.25},
		{"key": "gate-lane", "id": 3, "kind": "rectangle", "width": 1, "depth": 1.25},
		{"key": "flank-tile", "id": 4, "kind": "rectangle", "width": 4, "depth": 0.625},
		{"key": "gate-tile", "id": 5, "kind": "rectangle", "width": 1, "depth": 0.625},
		{"key": "bolster-lobe", "id": 6, "kind": "ellipse", "half_width": 2, "half_depth": 1.5},
		{"key": "mire-box", "id": 7, "kind": "rectangle", "width": 3, "depth": 2},
		{"key": "scorch-fan", "id": 8, "kind": "cone", "base_width": 1, "top_width": 3, "radius": 3},
		{"key": "body", "id": 9, "kind": "self"},
		{"key": "hold-fast-lobe", "id": 10, "kind": "ellipse", "half_width": 3, "half_depth": 2},
		{"key": "cleave-fan", "id": 11, "kind": "cone", "base_width": 2, "top_width": 4, "radius": 4},
		{"key": "ward-ring", "id": 12, "kind": "ellipse", "half_width": 2.5, "half_depth": 2.5},
		{"key": "turnback-box", "id": 13, "kind": "rectangle", "width": 4, "depth": 3},
		{"key": "trump-burst", "id": 14, "kind": "circle", "radius": 2},
		{"key": "tar-patch", "id": 15, "kind": "rectangle", "width": 3, "depth": 1},
		{"key": "fire-patch", "id": 16, "kind": "circle", "radius": 0.75},
		{"key": "trees-strip", "id": 17, "kind": "rectangle", "width": 2, "depth": 0.75},
		{"key": "fence", "id": 18, "kind": "rectangle", "width": 2.28, "depth": 0.21},
		{"key": "tower", "id": 19, "kind": "rectangle", "width": 0.75, "depth": 0.75},
		{"key": "summon-ground", "id": 20, "kind": "circle", "radius": 0.5},
		{"key": "war-drum", "id": 21, "kind": "rectangle", "width": 1, "depth": 1},
		{"key": "contact-ring", "id": 22, "kind": "circle", "radius": 1},
		{"key": "tar-bank", "id": 23, "kind": "rectangle", "width": 2, "depth": 0.5},
		{"key": "firebrand-burst", "id": 24, "kind": "circle", "radius": 1.5},
		{"key": "rampart-ring", "id": 25, "kind": "circle", "radius": 2.5},
		{"key": "quagmire-pool", "id": 26, "kind": "circle", "radius": 1.5}
	]
}
`,we=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{
			"key": "bolster",
			"id": 1,
			"role": "stratagem",
			"tag": "buff",
			"area": {"shape": "bolster-lobe", "anchor": "caster", "offset": 1, "filter": "allies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 4, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.3}],
				"duration": {"base_ticks": 90, "int_coefficient": 0.25, "polarity": "friendly", "min_ticks": 45}
			}
		},
		{
			"key": "mire",
			"id": 2,
			"role": "stratagem",
			"tag": "hinder",
			"area": {"shape": "mire-box", "anchor": "caster", "offset": 1.5, "filter": "enemies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 3, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "speed_modifier", "multiplier": 0.6}],
				"duration": {"base_ticks": 90, "int_coefficient": 0.25, "polarity": "hostile", "min_ticks": 45}
			}
		},
		{
			"key": "scorch",
			"id": 3,
			"role": "stratagem",
			"tag": "damage",
			"area": {"shape": "scorch-fan", "anchor": "caster", "offset": 0, "filter": "enemies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 5, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "ratio_damage", "stat": "intelligence", "coefficient": 120, "fixed": 30}]
			}
		},
		{
			"key": "brace",
			"id": 4,
			"role": "stratagem",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 2, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [
					{"kind": "stat_modifier", "stat": "max troops", "add": 0, "multiplier": 1.25},
					{"kind": "heal", "amount": {"measure": "flat", "troops": 200}}
				],
				"duration": {"base_ticks": 150, "int_coefficient": 0.25, "polarity": "friendly", "min_ticks": 75}
			}
		},
		{
			"key": "hold-fast",
			"id": 5,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "hold-fast-lobe", "anchor": "caster", "offset": 2.5, "filter": "allies"},
			"activation": {"class": "channeled", "channel_ticks": 120},
			"cost": {"morale": 6, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.2}]
			}
		},
		{
			"key": "cleave",
			"id": 6,
			"role": "stratagem",
			"tag": "damage",
			"area": {"shape": "cleave-fan", "anchor": "caster", "offset": 0.5, "filter": "enemies"},
			"activation": {"class": "charged", "charge_delay_ticks": 90},
			"cost": {"morale": 6, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "ratio_damage", "stat": "intelligence", "coefficient": 200, "fixed": 60}]
			}
		},
		{
			"key": "ward",
			"id": 7,
			"role": "passive",
			"tag": "command",
			"area": {"shape": "ward-ring", "anchor": "caster", "offset": -1, "filter": "enemies"},
			"activation": {"class": "counter"},
			"cost": {"morale": 0, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {"components": []}
		},
		{
			"key": "turnback",
			"id": 8,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "turnback-box", "anchor": "caster", "offset": 1, "filter": "enemies"},
			"activation": {"class": "counter"},
			"cost": {"morale": 5, "uses_per_match": 2, "cooldown_ticks": 300},
			"effect": {"components": [{"kind": "reflect"}]}
		},
		{
			"key": "launch-trump",
			"id": 9,
			"role": "trump",
			"tag": "damage",
			"area": {"shape": "trump-burst", "anchor": "picked point", "offset": 0, "filter": "enemies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 0, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "ratio_damage", "stat": "intelligence", "coefficient": 0, "fixed": 150}]
			}
		},
		{
			"key": "launch-passive",
			"id": 10,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.1}]}
		},
		{
			"key": "launch-morale",
			"id": 11,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "morale", "starting": 0, "ceiling": 2, "fill": 5}]}
		},
		{
			"key": "palisade",
			"id": 12,
			"role": "passive",
			"tag": "command",
			"area": {"shape": "fence", "anchor": "caster", "offset": 0.61, "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "place_entity", "entity": "fence"}]}
		},
		{
			"key": "stakes",
			"id": 13,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "fence", "anchor": "caster", "offset": 0.61, "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 3, "uses_per_match": 0, "cooldown_ticks": 300},
			"effect": {"components": [{"kind": "place_entity", "entity": "fence"}]}
		},
		{
			"key": "vanguard",
			"id": 14,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "summon-ground", "anchor": "caster", "offset": 1, "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 4, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [
					{
						"kind": "summon",
						"chassis": "interceptor",
						"speed": 0.0146484375,
						"strength": 70,
						"intelligence": 40,
						"troops": 400,
						"behaviour": {"kind": "advance"},
						"count": 1
					}
				],
				"duration": {"base_ticks": 450, "int_coefficient": 3, "polarity": "friendly", "min_ticks": 300}
			}
		},
		{
			"key": "retainer",
			"id": 15,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "summon-ground", "anchor": "caster", "offset": 1, "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 3, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [
					{
						"kind": "summon",
						"chassis": "archer",
						"speed": 0.019287109375,
						"strength": 60,
						"intelligence": 40,
						"troops": 300,
						"behaviour": {"kind": "escort", "offset": 1},
						"count": 1
					}
				],
				"duration": {"base_ticks": 600, "int_coefficient": 3, "polarity": "friendly", "min_ticks": 300}
			}
		},
		{
			"key": "strength-raise",
			"id": 16,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.1}]}
		},
		{
			"key": "max-troops-raise",
			"id": 17,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "stat_modifier", "stat": "max troops", "add": 0, "multiplier": 1.1}]}
		},
		{
			"key": "fill-raise",
			"id": 18,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "standing still"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "morale", "starting": 0, "ceiling": 0, "fill": 5}]}
		},
		{
			"key": "fence-line",
			"id": 19,
			"role": "passive",
			"tag": "command",
			"area": {"shape": "fence", "anchor": "caster", "offset": 0.61, "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "place_entity", "entity": "fence"}]}
		},
		{
			"key": "regeneration",
			"id": 20,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "still and out of combat"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "periodic_heal", "amount": {"measure": "flat", "troops": 45}, "beat_ticks": 30}]}
		},
		{
			"key": "revival-cut",
			"id": 21,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "revival_cut", "ticks": 180}]}
		},
		{
			"key": "long-spear",
			"id": 22,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "chassis_modifier", "number": "spear offset", "multiplier": 1.28}]}
		},
		{
			"key": "first-contact-raise",
			"id": 23,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "trigger", "event": "first contact", "rearm": {"kind": "ticks", "ticks": 900}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.15}],
				"duration": {"base_ticks": 150, "int_coefficient": 0, "polarity": "friendly", "min_ticks": 150}
			}
		},
		{
			"key": "heavy-hand",
			"id": 24,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [
					{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.2},
					{"kind": "stat_modifier", "stat": "max troops", "add": 0, "multiplier": 0.9}
				]
			}
		},
		{
			"key": "muster",
			"id": 25,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [
					{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1},
					{
						"kind": "deck_read",
						"select": {"field": "role", "equals": "passive"},
						"measure": {"kind": "count"},
						"shape": {"kind": "step", "step": 2, "cap": 12},
						"sets": "stat add"
					}
				]
			}
		},
		{
			"key": "contact-slow",
			"id": 26,
			"role": "passive",
			"tag": "hinder",
			"area": {"shape": "contact-ring", "anchor": "caster", "offset": 0, "filter": "enemies"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "speed_modifier", "multiplier": 0.7}]}
		},
		{
			"key": "sure-footing",
			"id": 27,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "immunity", "category": "slow"}]}
		},
		{
			"key": "fence-rebuild",
			"id": 28,
			"role": "trump",
			"tag": "command",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 0, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "rebuild"}]}
		},
		{
			"key": "last-stand",
			"id": 29,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "at least routed", "count": 2}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.1}]}
		},
		{
			"key": "rally",
			"id": 30,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "revival_share", "share": 0.2}]}
		},
		{
			"key": "channel-echo",
			"id": 31,
			"role": "passive",
			"tag": "buff",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "skill active", "skill": "hold-fast"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.1}]}
		},
		{
			"key": "war-drum",
			"id": 32,
			"role": "stratagem",
			"tag": "buff",
			"area": {"shape": "war-drum", "anchor": "caster", "offset": 0, "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 2, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "place_entity", "entity": "war-drum"}]}
		},
		{
			"key": "ambusher",
			"id": 33,
			"role": "passive",
			"tag": "command",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "hide", "hide": {"kind": "ambush", "crawl": 0.00341796875, "spring_coefficient": 250, "spring_fixed": 50}}]}
		},
		{
			"key": "shinobi",
			"id": 34,
			"role": "passive",
			"tag": "command",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "condition", "condition": {"when": "always"}},
			"cost": {"morale": 0, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {"components": [{"kind": "hide", "hide": {"kind": "shinobi", "closeness": 1.5}}]}
		},
		{
			"key": "fade",
			"id": 35,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "body", "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 3, "uses_per_match": 0, "cooldown_ticks": 300},
			"effect": {"components": [{"kind": "hide", "hide": {"kind": "shinobi", "closeness": 1.5}}]}
		},
		{
			"key": "firebrand",
			"id": 36,
			"role": "trump",
			"tag": "damage",
			"area": {"shape": "firebrand-burst", "anchor": "picked point", "offset": 0, "filter": "enemies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 0, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "ratio_damage", "stat": "intelligence", "coefficient": 0, "fixed": 150}]
			}
		},
		{
			"key": "rampart",
			"id": 37,
			"role": "trump",
			"tag": "command",
			"area": {"shape": "rampart-ring", "anchor": "picked point", "offset": 0, "filter": "allies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 0, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "stat_modifier", "stat": "strength", "add": 0, "multiplier": 1.2}],
				"duration": {"base_ticks": 120, "int_coefficient": 0, "polarity": "friendly", "min_ticks": 120}
			}
		},
		{
			"key": "quagmire",
			"id": 38,
			"role": "trump",
			"tag": "hinder",
			"area": {"shape": "quagmire-pool", "anchor": "picked point", "offset": 0, "filter": "enemies"},
			"activation": {"class": "instant"},
			"cost": {"morale": 0, "uses_per_match": 1, "cooldown_ticks": 0},
			"effect": {
				"components": [{"kind": "speed_modifier", "multiplier": 0.6}],
				"duration": {"base_ticks": 90, "int_coefficient": 0.25, "polarity": "hostile", "min_ticks": 45}
			}
		},
		{
			"key": "entourage",
			"id": 39,
			"role": "stratagem",
			"tag": "command",
			"area": {"shape": "summon-ground", "anchor": "caster", "offset": 1, "filter": "self"},
			"activation": {"class": "instant"},
			"cost": {"morale": 4, "uses_per_match": 0, "cooldown_ticks": 0},
			"effect": {
				"components": [
					{
						"kind": "summon",
						"chassis": "archer",
						"speed": 0.019287109375,
						"strength": 60,
						"intelligence": 40,
						"troops": 300,
						"behaviour": {"kind": "escort", "offset": 1},
						"count": 2
					}
				],
				"duration": {"base_ticks": 600, "int_coefficient": 3, "polarity": "friendly", "min_ticks": 300}
			}
		}
	]
}
`,Te=`{
	"ranges": [{"author": "core", "first": 1, "last": 999}],
	"items": [
		{"key": "tar", "id": 1, "name": "Tar", "speed_multiplier": 0.55},
		{"key": "fire", "id": 2, "name": "Fire", "fire": {"troops_per_beat": 10, "beat": 15}},
		{"key": "trees", "id": 3, "name": "Trees", "cover": {"arrows": 0.5, "shells": 0.5}}
	]
}
`,V=e=>{if(e===null)return`null`;switch(typeof e){case`number`:if(!Number.isSafeInteger(e))throw Error(`a resolved record holds ${String(e)}`);return String(e+0);case`string`:return JSON.stringify(e);case`boolean`:return e?`true`:`false`;case`object`:{if(Array.isArray(e))return`[${e.map(V).join(`,`)}]`;let t=Object.fromEntries(Object.entries(e));return`{${Object.keys(t).toSorted().map(e=>`${JSON.stringify(e)}:${V(t[e])}`).join(`,`)}}`}}throw Error(`a resolved record holds a ${typeof e}`)},Ee=2166136261,De=16777619,Oe=e=>{let t=Ee,n=e=>{t=Math.imul(t^e,De)};for(let t of e){let e=t.codePointAt(0)??0;e<128?n(e):e<2048?(n(192|e>>6),n(128|e&63)):e<65536?(n(224|e>>12),n(128|e>>6&63),n(128|e&63)):(n(240|e>>18),n(128|e>>12&63),n(128|e>>6&63),n(128|e&63))}return t>>>0},ke=e=>Oe(V(e)),H=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t))return null;let n=e*t;if(!Number.isFinite(n))return null;let r=Math.trunc(n),i=n-r;return(i>=.5?r+1:i<=-.5?r-1:r)+0},U=Symbol(`refused`),Ae=e=>e===`bodies`||e===`bodies/second`?i:e===`multiplier`?t:1,je=t=>t.kind===`share`?e:Ae(t.unit),W=e=>typeof e==`object`&&!!e&&!Array.isArray(e),G=e=>e===void 0?`nothing`:JSON.stringify(e),K=(e,t,n,r)=>(e.refusals.push(h(e.file,t,n,r)),U),Me=(e,t,n,r,i,a)=>{let o=!0;for(let t of Object.keys(e))n.has(t)||(K(i,`${r}.${t}`,y,`'${t}' is not a field here`),o=!1);for(let[n,s]of Object.entries(t)){let t=q(e[n],s,`${r}.${n}`,i);t===U?o=!1:a[n]=t}return o},q=(e,t,n,r)=>{switch(t.t){case`int`:return typeof e!=`number`||!Number.isSafeInteger(e)?K(r,n,_,`an integer is required, found ${G(e)}`):e<t.min||e>t.max?K(r,n,m,`${String(e)} lies outside ${String(t.min)}..${String(t.max)}`):e+0;case`fixed`:{let i=typeof e==`number`?H(e,t.scale):null;return i===null?K(r,n,_,`a number is required, found ${G(e)}`):i<t.min||i>t.max?K(r,n,m,`${String(e)} lies outside ${String(t.min/t.scale)}..${String(t.max/t.scale)}`):i}case`text`:return typeof e!=`string`||e.length===0?K(r,n,_,`a non-empty string is required, found ${G(e)}`):e;case`bool`:return typeof e==`boolean`?e:K(r,n,_,`true or false is required, found ${G(e)}`);case`enum`:return typeof e!=`string`||!t.of.includes(e)?K(r,n,_,`one of ${t.of.map(e=>`'${e}'`).join(`, `)} is required, found ${G(e)}`):e;case`ref`:{if(typeof e!=`string`)return K(r,n,_,`a ${t.kind} key is required, found ${G(e)}`);let i=r.keys.get(t.kind)?.get(e);return i===void 0?K(r,n,g,`no ${t.kind} item has the key '${e}'`):i}case`opt`:return e==null?null:q(e,t.of,n,r);case`list`:{if(!Array.isArray(e))return K(r,n,_,`a list is required, found ${G(e)}`);let i=e;if(i.length<t.min||i.length>t.max)return K(r,n,m,`${String(i.length)} entries where ${String(t.min)}..${String(t.max)} are allowed`);let a=[],o=!0;for(let[e,s]of i.entries()){let i=q(s,t.of,`${n}[${String(e)}]`,r);i===U?o=!1:a.push(i)}return o?a:U}case`obj`:{if(!W(e))return K(r,n,_,`an object is required, found ${G(e)}`);let i={};return Me(e,t.fields,new Set(Object.keys(t.fields)),n,r,i)?i:U}case`variant`:{if(!W(e))return K(r,n,_,`an object is required, found ${G(e)}`);let i=e[t.tag],a=Object.keys(t.cases),o=t.cases,s=typeof i==`string`?o[i]:void 0;if(typeof i!=`string`||s===void 0)return K(r,`${n}.${t.tag}`,_,`one of ${a.map(e=>`'${e}'`).join(`, `)} is required, found ${G(i)}`);let c={[t.tag]:i},l={...t.common,...s};return Me(e,l,new Set([t.tag,...Object.keys(l)]),n,r,c)?c:U}case`overrides`:{if(!W(e))return K(r,n,_,`an object of registry rows is required, found ${G(e)}`);let t={},i=!0;for(let[a,o]of Object.entries(e)){let e=`${n}['${a}']`,s=r.rows.get(a);if(s===void 0){K(r,e,g,`no registry row has the id '${a}'`),i=!1;continue}let c=je(s),l=typeof o==`number`?H(o,c):null;if(l===null||c===1&&l!==o){K(r,e,_,`the row is counted in ${s.unit}: ${c===1?`a whole number`:`a number`} is required, found ${G(o)}`),i=!1;continue}t[a]=l}return i?t:U}}},Ne=/^[a-z0-9]+(-[a-z0-9]+)*$/,J=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Pe=e=>{try{return{value:JSON.parse(e)}}catch{return null}},Fe=(e,t,n)=>{if(!Array.isArray(e)||e.length===0)return n.push(h(t,`ranges`,T,`a file claims at least one author range`)),[];let r=[],i=e;for(let[e,a]of i.entries()){let i=`ranges[${String(e)}]`,o=J(a)?a.author:void 0,s=J(a)?a.first:void 0,c=J(a)?a.last:void 0;if(!J(a)||Object.keys(a).some(e=>e!==`author`&&e!==`first`&&e!==`last`)||typeof o!=`string`||o.length===0||typeof s!=`number`||typeof c!=`number`||!Number.isSafeInteger(s)||!Number.isSafeInteger(c)||s<0||c>u||s>c){n.push(h(t,i,T,`a range is {author, first, last}: a named author and whole ids first ≤ last`));continue}for(let e of r)s<=e.last&&e.first<=c&&n.push(h(t,i,f,`${o}'s range ${String(s)}..${String(c)} overlaps ${e.author}'s ${String(e.first)}..${String(e.last)}`));r.push({author:o,first:s,last:c})}return r},Ie=(e,t,n)=>{let r=d[e].file,i=new Map;if(t===void 0)return{items:[],index:i};let a=Pe(t);if(a===null)return n.push(h(r,``,_,`the file is not JSON`)),{items:[],index:i};let o=a.value;if(!J(o)||!Array.isArray(o.items)||Object.keys(o).some(e=>e!==`ranges`&&e!==`items`))return n.push(h(r,``,_,`a content file is {ranges, items} and nothing else`)),{items:[],index:i};let s=Fe(o.ranges,r,n),c=[],l=new Map,u=o.items;for(let[e,t]of u.entries()){let a=`items[${String(e)}]`;if(!J(t)){n.push(h(r,a,_,`an item is an object`));continue}let{key:o,id:u}=t;if(typeof o!=`string`||!Ne.test(o)){n.push(h(r,`${a}.key`,p,`a key is lowercase words joined by hyphens, found ${JSON.stringify(o)}`));continue}if(typeof u!=`number`||!Number.isSafeInteger(u)){n.push(h(r,`${o}.id`,p,`every item claims a whole id in its file`));continue}if(s.some(e=>u>=e.first&&u<=e.last)||n.push(h(r,`${o}.id`,v,`id ${String(u)} lies in no author's range`)),i.has(o)){n.push(h(r,`${o}.key`,E,`the key '${o}' is claimed twice`));continue}let d=l.get(u);if(d!==void 0){n.push(h(r,`${o}.id`,E,`id ${String(u)} is already claimed by '${d}'`));continue}l.set(u,o),i.set(o,u),c.push(t)}return{items:c,index:i}},Le=(e,t)=>e.id-t.id,Y=((e,t={})=>{let n=t.rows??c,r=[],i=new Map;for(let t of o)i.set(t,Ie(t,e[d[t].file],r));let a=new Map;for(let[e,t]of i)a.set(e,t.index);let s=new Map(n.map(e=>[e.id,e])),l=new Map;for(let e of o){let t={file:d[e].file,keys:a,rows:s,refusals:r},n=[];for(let r of i.get(e)?.items??[]){let i=q(r,d[e].item,typeof r.key==`string`?r.key:``,t);if(i!==U&&J(i)){let e=i.id;typeof e==`number`&&n.push({...i,id:e})}}n.sort(Le),l.set(e,n)}if(r.length>0)return{ok:!1,refusals:r};let u=Object.fromEntries(l),f=b(u,n);return f.length>0?{ok:!1,refusals:f}:{ok:!0,content:{set:u,hash:ke(u),rows:n}}})(Object.fromEntries(Object.entries(Object.assign({"../../../content/armies.json":ge,"../../../content/characters.json":_e,"../../../content/chassis.json":ve,"../../../content/entities.json":ye,"../../../content/maps.json":be,"../../../content/modes.json":xe,"../../../content/pieces.json":Se,"../../../content/shapes.json":Ce,"../../../content/skills.json":we,"../../../content/terrains.json":Te})).map(([e,t])=>[e.slice(e.lastIndexOf(`/`)+1),t])));if(!Y.ok)throw Error(`the bundled content is refused: ${Y.refusals.map(e=>`${e.file} ${e.path}: ${e.invariant}`).join(`; `)}`);var X=Y.content,Z=C(X,O);if(!Z.ok)throw Error(`the launch match does not compose: ${Z.reason}`);var Q=Z.match,Re=(e,t)=>n=>{let r=a(e.units,n);return r!==null&&r.side!==t&&r.hide!==null},ze=(e,t)=>{for(let n of e.units.slots)if(n!==null&&n.side!==t&&n.hide!==null)return!0;return!1},Be=(e,t)=>{if(!ze(e,t))return e;let n=Re(e,t),r=e.units.slots.map(e=>{if(e===null)return null;if(e.side!==t)return e.hide===null?e:null;let r=e.aim!==null&&n(e.aim)?null:e.aim,i=e.target!==null&&n(e.target)?null:e.target;return r===e.aim&&i===e.target?e:{...e,aim:r,target:i}}),i=e.events.flatMap(t=>{let r=(t.kind===`cast`||t.kind===`trump`)&&t.landed.some(n)?{...t,landed:t.landed.filter(e=>!n(e))}:t;return M(r).some(t=>n(t)&&!N(e,r,t))?[]:[r]});return{...e,units:{...e.units,slots:r},events:i}},Ve=(e,t)=>{let n=e.units.slots.map(e=>e===null||e.side===t?e:null),r=e.entities.slots.map(e=>e===null||e.placed===0||e.owner===t?e:null),i=e.events.filter(n=>!M(n).some(n=>{let r=a(e.units,n);return r!==null&&r.side!==t}));return{...e,units:{...e.units,slots:n},entities:{...e.entities,slots:r},events:i}},$=(e,t)=>{let i=0;for(let a of e.units.slots)a!==null&&a.side!==t&&a.hide!==null&&!n(a)&&!r(a)&&i++;return i},He=(e,t)=>{let n=new WeakMap;return{stateAt:r=>{let i=e.stateAt(r);if(i===null)return null;let a=n.get(i);if(a!==void 0)return a;let o=Be(i,t);return n.set(i,o),o},writes:e.writes}},Ue=e=>({request:e,wanted:!1,sentinel:null,settling:!1}),We=async e=>{if(!e.settling){e.settling=!0;try{for(;;)if(e.sentinel?.released===!0&&(e.sentinel=null),e.wanted&&e.sentinel===null){if(e.request===null)return;try{let t=await e.request();if(t.released)return;e.sentinel=t}catch{return}}else if(!e.wanted&&e.sentinel!==null){let t=e.sentinel;try{await t.release()}catch{if(!t.released)return}e.sentinel=null}else return}finally{e.settling=!1}}},Ge=(e,t)=>(e.wanted=t,We(e)),Ke=()=>`wakeLock`in navigator?()=>navigator.wakeLock.request(`screen`):null;x(Q),{hash:Q.contentHash,set:X,placements:Q.armies.map(e=>e.placements),stratagems:Q.stratagems,sides:Q.sides,grid:Q.grid,terrain:Q.terrain,field:Q.field}.hash,X.set.terrains.map(e=>e.id),Q.field.kinds.map(e=>e.id),X.set.pieces.filter(e=>e.role===`passive`&&e.scope===`pointed`).map(e=>e.id),X.set.pieces.filter(e=>e.role===`character`).map(e=>e.id),Q.timeControl.pause,Q.timeControl.slow,Q.timeControl.scrub,Q.timeControl.scrub_resume;var qe=500,Je=1,Ye=Object.freeze([]),Xe=e=>t=>{let n=()=>{t(e.hidden)};return e.addEventListener(`visibilitychange`,n),()=>{e.removeEventListener(`visibilitychange`,n)}},Ze=async e=>{let t=await e.hash(),n=e.dev?F(l):l,r=ie({seed:e.seed,tickRate:30,roster:e.roster,content:e.content,params:e.params,init:n,step:e.dev?ce(s):s,hash:t}),i=Ue(e.wakeLockRequest),a=ue(30,!0),o=B,c=null,u=!1,d=!1,f=!1,p=He({stateAt:e=>S(r.ring,e),writes:()=>ne(r.ring)},e.viewerSide),m=se(p,()=>c),h=()=>c===null?k(r):S(r.ring,c)??k(r),g=()=>{let t=c,n=h();e.render({tick:n.tick,checksum:t===null?ee(r):r.checksums[t]??null,running:a.running,interrupted:a.interrupted,past:t!==null,grabbed:u,replaying:d,frontier:A(r.ring),speed:a.speed,fps:o.fps,outcome:n.outcome,decided:k(r).outcome!==null,castles:n.castleGauges,castleGaugeSize:n.balance.castleGaugeSize,hidden:$(n,e.viewerSide),viewerSide:e.viewerSide,tickRate:30,clockLength:n.balance.clockLength,timeControl:e.timeControl,setup:!1,match:!0,dropped:0},t===null?{tick:A(r.ring),alpha:me(a),ring:p}:d?{tick:t+1,alpha:me(a),ring:p}:{tick:t+1,alpha:0,ring:m})},_=()=>{Ge(i,!f&&!D(r))},v=e=>{a=de(a,e)},y=e=>oe(r.ui[e+1]??j,S(r.ring,e)),b=t=>{if(t===c)return;let n=c===null;c=t,n!==(t===null)&&e.board?.setLive(t===null),e.board?.showSelection(t===null?null:y(t))},x=e.commands,C=e.ui,T=()=>{if(x===null)return w(r,Ye,C?.()??j)!==null;let e=k(r),t=x(e.tick+1,e);return w(r,t,C?.()??j)!==null},E=()=>{let e=c;if(e===null)return!1;let t=e+1;return t>=A(r.ring)?(b(null),!1):(b(t),!0)},O=()=>{d=!1},M=!1,N=t=>{if(M)return;e.requestFrame(N);let n=a.running,i=a.interrupted,s=D(r);a=pe(a,t,d?E:T),d&&!a.running&&O(),!i&&a.interrupted&&e.board?.dropGesture(),!s&&D(r)&&(e.board?.dropGesture(),_()),o=n&&a.interrupted?B:he(o,t,qe),g()};return e.watchVisibility(t=>{M||(f=t,t&&(a=z(a),e.board?.dropGesture(),o=B),_())}),v(!0),_(),g(),e.requestFrame(N),{match:r,toggleRunning:()=>{a.running&&!e.timeControl.pause||!a.running&&c!==null||v(!a.running)},setSpeed:t=>{e.timeControl.slow&&(!Number.isFinite(t)||t<=0||(a=fe(a,t>Je?Je:t)))},scrubStart:()=>{e.timeControl.scrub&&(a.running&&v(!1),u=!0,e.board?.dropGesture())},scrubTo:t=>{if(!e.timeControl.scrub||!Number.isFinite(t))return;let n=Math.round(t),i=n<0?0:n;if(i>=A(r.ring)){b(null);return}b(i)},scrubEnd:()=>{u=!1,e.timeControl.scrubResume||b(null)},playFuture:()=>{e.timeControl.scrubResume&&c!==null&&(d=!0,v(!0))},takeOver:()=>{if(!e.timeControl.scrubResume)return;let t=c;if(t===null)return;O(),a.running&&v(!1);let n=y(t);te(r,t),_(),b(null),e.board?.takeOver(n),g()},verifyReplay:()=>re(r,ae(r.header,r.content,n)),dispose:()=>{M||(M=!0,Ge(i,!1))}}};export{$ as a,F as c,Ve as i,Xe as n,He as o,Ke as r,X as s,Ze as t};