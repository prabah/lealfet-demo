import React, { Component } from 'react';
import L from 'leaflet';
import './leaflet-dvf.js';
import './flightData.js';
import './usAirports.js';
import './jquery.1.9.1.js'

var airports = [
	{
			"code": "ABE",
			"lat": "40.6514",
			"lon": "-75.4342",
			"name": "Lehigh Valley International Airport",
			"city": "Allentown",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12518581",
			"tz": "America/New_York",
			"phone": "610-266-6000",
			"type": "Airports",
			"email": "",
			"url": "http://www.lvia.org/",
			"runway_length": null,
			"elev": null,
			"icao": "KABE",
			"direct_flights": "14",
			"carriers": "11"
	},
	{
			"code": "ABI",
			"lat": "32.4164",
			"lon": "-99.6803",
			"name": "Abilene Regional Airport",
			"city": "Abilene",
			"state": "Texas",
			"country": "United States",
			"woeid": "12518518",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7199",
			"elev": "1790",
			"icao": "KABI",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "ABL",
			"lat": "67.1058",
			"lon": "-157.854",
			"name": "Ambler Airport",
			"city": "Kiana",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518600",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "289",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "ABQ",
			"lat": "35.0494",
			"lon": "-106.625",
			"name": "Albuquerque International Airport",
			"city": "Albuquerque",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12518564",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "13375",
			"elev": "5352",
			"icao": "KABQ",
			"direct_flights": "41",
			"carriers": "25"
	},
	{
			"code": "ABR",
			"lat": "45.4536",
			"lon": "-98.4189",
			"name": "Aberdeen Regional Airport",
			"city": "Aberdeen",
			"state": "South Dakota",
			"country": "United States",
			"woeid": "12518514",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6904",
			"elev": "1301",
			"icao": "KABR",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "ABY",
			"lat": "31.5328",
			"lon": "-84.1867",
			"name": "Southwest Georgia Regional Airport",
			"city": "Albany",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12521922",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6601",
			"elev": "197",
			"icao": "KABY",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "ACK",
			"lat": "41.2568",
			"lon": "-70.0649",
			"name": "Nantucket Memorial Airport",
			"city": "Nantucket",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12521076",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6303",
			"elev": "48",
			"icao": "KACK",
			"direct_flights": "9",
			"carriers": "6"
	},
	{
			"code": "ACT",
			"lat": "31.609",
			"lon": "-97.2234",
			"name": "Waco Regional Airport",
			"city": "Waco",
			"state": "Texas",
			"country": "United States",
			"woeid": "12522299",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6597",
			"elev": "516",
			"icao": "KACT",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "ACV",
			"lat": "40.9698",
			"lon": "-124.108",
			"name": "Arcata Airport",
			"city": "Mckinleyville",
			"state": "California",
			"country": "United States",
			"woeid": "12518649",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5998",
			"elev": "218",
			"icao": "KACV",
			"direct_flights": "6",
			"carriers": "7"
	},
	{
			"code": "ACY",
			"lat": "39.4512",
			"lon": "-74.5716",
			"name": "Atlantic City International Airport",
			"city": "Egg Harbor City",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "12518689",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "76",
			"icao": "KACY",
			"direct_flights": "6",
			"carriers": "1"
	},
	{
			"code": "ADK",
			"lat": "51.88",
			"lon": "-176.639",
			"name": "Adak Airport",
			"city": "Adak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518524",
			"tz": "America/Adak",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7794",
			"elev": "19",
			"icao": "PADK",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ADQ",
			"lat": "57.7545",
			"lon": "-152.512",
			"name": "Kodiak Airport",
			"city": "Kodiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520492",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7548",
			"elev": "73",
			"icao": "PADQ",
			"direct_flights": "12",
			"carriers": "7"
	},
	{
			"code": "AET",
			"lat": "66.55",
			"lon": "-152.65",
			"name": "Allakaket Airport",
			"city": "Allakaket",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524551",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "350",
			"icao": "",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "AEX",
			"lat": "31.323",
			"lon": "-92.5417",
			"name": "Alexandria International Airport",
			"city": "Alexandria",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12519648",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KAEX",
			"direct_flights": "5",
			"carriers": "7"
	},
	{
			"code": "AGN",
			"lat": "57.4996",
			"lon": "-134.577",
			"name": "Angoon Airport",
			"city": "Angoon",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524552",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "PAGN",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "AGS",
			"lat": "33.3735",
			"lon": "-81.9732",
			"name": "Bush Field Airport",
			"city": "Augusta",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12518987",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8001",
			"elev": "145",
			"icao": "KAGS",
			"direct_flights": "2",
			"carriers": "8"
	},
	{
			"code": "AHC",
			"lat": "40.2664",
			"lon": "-120.151",
			"name": "Amedee Army Air Field",
			"city": "Herlong",
			"state": "California",
			"country": "United States",
			"woeid": "12518602",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KAHC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "AIA",
			"lat": "42.0622",
			"lon": "-102.81",
			"name": "Alliance Municipal Airport",
			"city": "Alliance",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12518583",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9202",
			"elev": "3929",
			"icao": "KAIA",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "AIN",
			"lat": "70.6139",
			"lon": "-159.857",
			"name": "Wainwright Airport",
			"city": "Wainwright",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522307",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2200",
			"elev": "25",
			"icao": "PAWT",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "AKB",
			"lat": "52.2217",
			"lon": "-174.204",
			"name": "Atka Airport",
			"city": "Atka",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518685",
			"tz": "America/Adak",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3100",
			"elev": "33",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "AKI",
			"lat": "60.8866",
			"lon": "-161.218",
			"name": "Akiak Airport",
			"city": "Bethel",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524554",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "22",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "AKK",
			"lat": "56.95",
			"lon": "-154.167",
			"name": "Akhiok Airport",
			"city": "Kodiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524555",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2170",
			"elev": "50",
			"icao": "PAKH",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "AKN",
			"lat": "58.6775",
			"lon": "-156.655",
			"name": "King Salmon Airport",
			"city": "King Salmon",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520466",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8500",
			"elev": "57",
			"icao": "PAKN",
			"direct_flights": "14",
			"carriers": "7"
	},
	{
			"code": "AKP",
			"lat": "68.1916",
			"lon": "-151.79",
			"name": "Anaktuvuk Pass Airport",
			"city": "Anaktuvuk Pass",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524556",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5500",
			"elev": "2100",
			"icao": "PAKP",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "ALB",
			"lat": "42.7426",
			"lon": "-73.809",
			"name": "Albany International Airport",
			"city": "Latham",
			"state": "New York",
			"country": "United States",
			"woeid": "12518554",
			"tz": "America/New_York",
			"phone": "518-242-2222",
			"type": "Airports",
			"email": "",
			"url": "http://www.albanyairport.com",
			"runway_length": "7200",
			"elev": "285",
			"icao": "KALB",
			"direct_flights": "27",
			"carriers": "27"
	},
	{
			"code": "ALM",
			"lat": "32.8407",
			"lon": "-105.994",
			"name": "Alamogordo White Sands Regional Airport",
			"city": "Alamogordo",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12518553",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7005",
			"elev": "4197",
			"icao": "KALM",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ALO",
			"lat": "42.5509",
			"lon": "-92.3951",
			"name": "Waterloo Municipal Airport",
			"city": "Waterloo",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12522347",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8401",
			"elev": "873",
			"icao": "KALO",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "ALS",
			"lat": "37.4444",
			"lon": "-105.865",
			"name": "San Luis Valley Regional Airport",
			"city": "Alamosa",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12521726",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8499",
			"elev": "7535",
			"icao": "KALS",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "ALW",
			"lat": "46.0879",
			"lon": "-118.283",
			"name": "Walla Walla Regional Airport",
			"city": "Walla Walla",
			"state": "Washington",
			"country": "United States",
			"woeid": "12522317",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7186",
			"elev": "1205",
			"icao": "KALW",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "ALZ",
			"lat": "56.8988",
			"lon": "-154.246",
			"name": "Alitak Seaplane Base",
			"city": "Alitak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524557",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "AMA",
			"lat": "35.2177",
			"lon": "-101.706",
			"name": "Amarillo International Airport",
			"city": "Amarillo",
			"state": "Texas",
			"country": "United States",
			"woeid": "12518598",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "13502",
			"elev": "3606",
			"icao": "KAMA",
			"direct_flights": "7",
			"carriers": "10"
	},
	{
			"code": "ANC",
			"lat": "61.1767",
			"lon": "-149.961",
			"name": "Anchorage International Airport",
			"city": "Anchorage",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518613",
			"tz": "America/Anchorage",
			"phone": "(907) 266-2526",
			"type": "Airports",
			"email": "",
			"url": "http://www.dot.state.ak.us/anc/index.shtml",
			"runway_length": "10897",
			"elev": "144",
			"icao": "PANC",
			"direct_flights": "62",
			"carriers": "47"
	},
	{
			"code": "ANI",
			"lat": "61.5742",
			"lon": "-159.535",
			"name": "Aniak Airport",
			"city": "Bethel",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524558",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6000",
			"elev": "88",
			"icao": "PANI",
			"direct_flights": "6",
			"carriers": "8"
	},
	{
			"code": "ANV",
			"lat": "62.65",
			"lon": "-160.217",
			"name": "Anvik Airport",
			"city": "Anvik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524559",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2880",
			"elev": "325",
			"icao": "PANV",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "AOO",
			"lat": "40.2952",
			"lon": "-78.324",
			"name": "Altoona-Blair County Airport",
			"city": "Martinsburg",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12518593",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5466",
			"elev": "1504",
			"icao": "KAOO",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "AOS",
			"lat": "57.4672",
			"lon": "-153.839",
			"name": "Amook Bay Seaplane Base",
			"city": "Amook",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "APA",
			"lat": "39.5752",
			"lon": "-104.845",
			"name": "Centennial Airport",
			"city": "Englewood",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12519112",
			"tz": "America/Denver",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "10002",
			"elev": "5883",
			"icao": "KAPA",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "APF",
			"lat": "26.1483",
			"lon": "-81.7745",
			"name": "Naples Municipal Airport",
			"city": "Naples",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521078",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "9",
			"icao": "KAPF",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "APN",
			"lat": "45.07",
			"lon": "-83.5683",
			"name": "Alpena County Regional Airport",
			"city": "Alpena",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12518585",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9001",
			"elev": "689",
			"icao": "KAPN",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "ARC",
			"lat": "68.1167",
			"lon": "-145.583",
			"name": "Arctic Village Airport",
			"city": "Arctic Village",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524562",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4450",
			"elev": "2086",
			"icao": "PARC",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "ART",
			"lat": "43.9942",
			"lon": "-76.0232",
			"name": "Watertown International Airport",
			"city": "Dexter",
			"state": "New York",
			"country": "United States",
			"woeid": "12522348",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "325",
			"icao": "KART",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ARV",
			"lat": "45.9296",
			"lon": "-89.7371",
			"name": "Lakelan-Noble F. Lee Memerial Field Airport",
			"city": "Woodruff",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12521141",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "1628",
			"icao": "KARV",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ASE",
			"lat": "39.2197",
			"lon": "-106.864",
			"name": "Aspen Pitkin County Airport-Sardy Field",
			"city": "Aspen",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12518679",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7003",
			"elev": "7815",
			"icao": "KASE",
			"direct_flights": "5",
			"carriers": "5"
	},
	{
			"code": "ATK",
			"lat": "70.4639",
			"lon": "-157.331",
			"name": "Atqasuk Airport",
			"city": "Atqasuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524564",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1250",
			"elev": "65",
			"icao": "PATQ",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ATL",
			"lat": "33.6558",
			"lon": "-84.4333",
			"name": "Hartsfield-Jackson Atlanta International Airport",
			"city": "Atlanta",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12522118",
			"tz": "America/New_York",
			"phone": "(654) 57 8833",
			"type": "Airports",
			"email": "",
			"url": "http://www.atlanta-airport.com/",
			"runway_length": "11889",
			"elev": "1026",
			"icao": "KATL",
			"direct_flights": "253",
			"carriers": "60"
	},
	{
			"code": "ATT",
			"lat": "60.865",
			"lon": "-162.276",
			"name": "Atmautluak Airport",
			"city": "Atmautluak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524566",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2250",
			"elev": "17",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "ATW",
			"lat": "44.2603",
			"lon": "-88.5111",
			"name": "Outagamie County Airport",
			"city": "Appleton",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12521262",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.atwairport.com/",
			"runway_length": "7001",
			"elev": "918",
			"icao": "KATW",
			"direct_flights": "8",
			"carriers": "11"
	},
	{
			"code": "ATY",
			"lat": "44.9216",
			"lon": "-97.1609",
			"name": "Watertown Municipal Airport",
			"city": "Watertown",
			"state": "South Dakota",
			"country": "United States",
			"woeid": "12522349",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6895",
			"elev": "1748",
			"icao": "KATY",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "AUG",
			"lat": "44.3181",
			"lon": "-69.7933",
			"name": "Augusta State Airport",
			"city": "Augusta",
			"state": "Maine",
			"country": "United States",
			"woeid": "12518700",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5140",
			"elev": "353",
			"icao": "KAUG",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "AUK",
			"lat": "62.6833",
			"lon": "-164.633",
			"name": "Alakanuk Airport",
			"city": "Alakanuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524567",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2400",
			"elev": "10",
			"icao": "",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "AUS",
			"lat": "30.2027",
			"lon": "-97.6653",
			"name": "Austin-Bergstrom International Airport",
			"city": "Austin",
			"state": "Texas",
			"country": "United States",
			"woeid": "23418445",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.abia.org/",
			"runway_length": "12248",
			"elev": "542",
			"icao": "KAUS",
			"direct_flights": "50",
			"carriers": "37"
	},
	{
			"code": "AVL",
			"lat": "35.4349",
			"lon": "-82.5373",
			"name": "Asheville Regional Airport",
			"city": "Fletcher",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12518672",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flyavl.com/",
			"runway_length": "8001",
			"elev": "2165",
			"icao": "KAVL",
			"direct_flights": "7",
			"carriers": "10"
	},
	{
			"code": "AVP",
			"lat": "41.3354",
			"lon": "-75.7294",
			"name": "Wilkes Barre Scranton International Airport",
			"city": "Pittston",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12522441",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7501",
			"elev": "957",
			"icao": "KAVP",
			"direct_flights": "8",
			"carriers": "8"
	},
	{
			"code": "AZA",
			"lat": "33.3078",
			"lon": "-111.656",
			"name": "Phoenix-Mesa Gateway Airport",
			"city": "Phoenix",
			"state": "Arizona",
			"country": "United States",
			"woeid": "2449808",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flywga.org/",
			"runway_length": "10",
			"elev": "1",
			"icao": "KIWA",
			"direct_flights": "8",
			"carriers": "1"
	},
	{
			"code": "AZO",
			"lat": "42.2398",
			"lon": "-85.5563",
			"name": "Kalamazoo-Battle Creek International Airport",
			"city": "Kalamazoo",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12520414",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6499",
			"elev": "874",
			"icao": "KAZO",
			"direct_flights": "5",
			"carriers": "12"
	},
	{
			"code": "BDL",
			"lat": "41.9271",
			"lon": "-72.6816",
			"name": "Bradley International Airport",
			"city": "Windsor Locks",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "12518915",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9502",
			"elev": "174",
			"icao": "KBDL",
			"direct_flights": "41",
			"carriers": "31"
	},
	{
			"code": "BDR",
			"lat": "41.1636",
			"lon": "-73.1283",
			"name": "Igor I Sikorsky Memorial Airport",
			"city": "Stratford",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "12520279",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4761",
			"elev": "10",
			"icao": "KBDR",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "BET",
			"lat": "60.7788",
			"lon": "-161.847",
			"name": "Bethel Airport",
			"city": "Bethel",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518815",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6399",
			"elev": "131",
			"icao": "PABE",
			"direct_flights": "29",
			"carriers": "11"
	},
	{
			"code": "BFD",
			"lat": "41.7964",
			"lon": "-78.6407",
			"name": "Bradford Regional Airport",
			"city": "Lewis Run",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12518914",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6499",
			"elev": "2143",
			"icao": "KBFD",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "BFF",
			"lat": "41.8683",
			"lon": "-103.597",
			"name": "William B Heilig Field Airport",
			"city": "Scottsbluff",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12522448",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8280",
			"elev": "3965",
			"icao": "KBFF",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "BFI",
			"lat": "47.5369",
			"lon": "-122.304",
			"name": "King County International Airport-Boeing Field",
			"city": "Seattle",
			"state": "Washington",
			"country": "United States",
			"woeid": "12518877",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10001",
			"elev": "17",
			"icao": "KBFI",
			"direct_flights": "6",
			"carriers": "3"
	},
	{
			"code": "BFL",
			"lat": "35.4288",
			"lon": "-119.044",
			"name": "Kern County-Meadows Field Airport",
			"city": "Bakersfield",
			"state": "California",
			"country": "United States",
			"woeid": "12520881",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9100",
			"elev": "490",
			"icao": "KBFL",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "BGM",
			"lat": "42.2082",
			"lon": "-75.9825",
			"name": "Greater Binghamton Edwin A Link Field Airport",
			"city": "Johnson City",
			"state": "New York",
			"country": "United States",
			"woeid": "12519598",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6298",
			"elev": "1630",
			"icao": "KBGM",
			"direct_flights": "3",
			"carriers": "8"
	},
	{
			"code": "BGR",
			"lat": "44.8086",
			"lon": "-68.8167",
			"name": "Bangor International Airport",
			"city": "Bangor",
			"state": "Maine",
			"country": "United States",
			"woeid": "12518734",
			"tz": "America/New_York",
			"phone": "207-992-4600",
			"type": "Airports",
			"email": "",
			"url": "http://www.flybangor.com",
			"runway_length": "11439",
			"elev": "192",
			"icao": "KBGR",
			"direct_flights": "10",
			"carriers": "7"
	},
	{
			"code": "BHB",
			"lat": "44.4461",
			"lon": "-68.3615",
			"name": "Hancock County-Bar Harbor Airport",
			"city": "Ellsworth",
			"state": "Maine",
			"country": "United States",
			"woeid": "12520074",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5196",
			"elev": "84",
			"icao": "KBHB",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "BHM",
			"lat": "33.5604",
			"lon": "-86.7492",
			"name": "Birmingham International Airport",
			"city": "Birmingham",
			"state": "Alabama",
			"country": "United States",
			"woeid": "12518836",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "644",
			"icao": "KBHM",
			"direct_flights": "34",
			"carriers": "24"
	},
	{
			"code": "BID",
			"lat": "41.1696",
			"lon": "-71.58",
			"name": "Block Island State Airport",
			"city": "Block Island",
			"state": "Rhode Island",
			"country": "United States",
			"woeid": "12524577",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "105",
			"icao": "KBID",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "BIL",
			"lat": "45.8034",
			"lon": "-108.537",
			"name": "Logan International Airport",
			"city": "Billings",
			"state": "Montana",
			"country": "United States",
			"woeid": "12520688",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10528",
			"elev": "3649",
			"icao": "KBIL",
			"direct_flights": "13",
			"carriers": "14"
	},
	{
			"code": "BIS",
			"lat": "46.7745",
			"lon": "-100.757",
			"name": "Bismarck Municipal Airport",
			"city": "Bismarck",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12518843",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8788",
			"elev": "1677",
			"icao": "KBIS",
			"direct_flights": "5",
			"carriers": "8"
	},
	{
			"code": "BJI",
			"lat": "47.5065",
			"lon": "-94.9338",
			"name": "Bemidji-Beltrami County Airport",
			"city": "Bemidji",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12518794",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5699",
			"elev": "1390",
			"icao": "KBJI",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "BKC",
			"lat": "65.9833",
			"lon": "-161.167",
			"name": "Buckland Airport",
			"city": "Buckland",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524578",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1870",
			"elev": "30",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "BKL",
			"lat": "41.5115",
			"lon": "-81.6869",
			"name": "Burke Lakefront Airport",
			"city": "Cleveland",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12518976",
			"tz": "America/New_York",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "6198",
			"elev": "584",
			"icao": "KBKL",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "BKW",
			"lat": "37.7849",
			"lon": "-81.1174",
			"name": "Raleigh County Memorial Airport",
			"city": "Beaver",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12521519",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6750",
			"elev": "2504",
			"icao": "KBKW",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "BLI",
			"lat": "48.7955",
			"lon": "-122.532",
			"name": "Bellingham International Airport",
			"city": "Bellingham",
			"state": "Washington",
			"country": "United States",
			"woeid": "12518790",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "158",
			"icao": "KBLI",
			"direct_flights": "8",
			"carriers": "8"
	},
	{
			"code": "BLV",
			"lat": "38.5412",
			"lon": "-89.8499",
			"name": "Belleville",
			"city": "Belleville",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12521774",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KBLV",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "BMI",
			"lat": "40.4841",
			"lon": "-88.9134",
			"name": "Bloomington Normal Airport",
			"city": "Bloomington",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12518861",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "875",
			"icao": "KBMI",
			"direct_flights": "7",
			"carriers": "12"
	},
	{
			"code": "BNA",
			"lat": "36.1342",
			"lon": "-86.6682",
			"name": "Nashville International Airport",
			"city": "Nashville",
			"state": "Tennessee",
			"country": "United States",
			"woeid": "12521083",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8500",
			"elev": "599",
			"icao": "KBNA",
			"direct_flights": "53",
			"carriers": "38"
	},
	{
			"code": "BOI",
			"lat": "43.5709",
			"lon": "-116.222",
			"name": "Boise Air Terminal",
			"city": "Boise",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12518880",
			"tz": "America/Boise",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9763",
			"elev": "2858",
			"icao": "KBOI",
			"direct_flights": "22",
			"carriers": "21"
	},
	{
			"code": "BOS",
			"lat": "42.3717",
			"lon": "-71.0281",
			"name": "Gen E L Logan International Airport",
			"city": "Boston",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12519874",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10081",
			"elev": "20",
			"icao": "KBOS",
			"direct_flights": "113",
			"carriers": "68"
	},
	{
			"code": "BOW",
			"lat": "27.9493",
			"lon": "-81.7818",
			"name": "Bartow Municipal Airport",
			"city": "Bartow",
			"state": "Florida",
			"country": "United States",
			"woeid": "12518749",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "128",
			"icao": "KBOW",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "BPT",
			"lat": "29.9551",
			"lon": "-94.0185",
			"name": "Jefferson County Airport",
			"city": "Beaumont",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520357",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6751",
			"elev": "16",
			"icao": "KBPT",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "BQK",
			"lat": "31.2525",
			"lon": "-81.4703",
			"name": "Glynco Jetport Airport",
			"city": "Brunswick",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12519920",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8001",
			"elev": "26",
			"icao": "KBQK",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "BQN",
			"lat": "18.496",
			"lon": "-67.1357",
			"name": "Rafael Hernandez Airport",
			"city": "Aguadilla",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "12515664",
			"tz": "America/Puerto_Rico",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11700",
			"elev": "237",
			"icao": "TJBQ",
			"direct_flights": "4",
			"carriers": "5"
	},
	{
			"code": "BRD",
			"lat": "46.3909",
			"lon": "-94.1413",
			"name": "Brainerd-Crow Wing County Regional Airport",
			"city": "Brainerd",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12518917",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "1226",
			"icao": "KBRD",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "BRL",
			"lat": "40.7816",
			"lon": "-91.1197",
			"name": "Burlington Municipal Airport",
			"city": "Burlington",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12518980",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6702",
			"elev": "698",
			"icao": "KBRL",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "BRO",
			"lat": "25.9064",
			"lon": "-97.4321",
			"name": "Brownsville-South Padre Island International Air",
			"city": "Brownsville",
			"state": "Texas",
			"country": "United States",
			"woeid": "12518951",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7400",
			"elev": "22",
			"icao": "KBRO",
			"direct_flights": "5",
			"carriers": "9"
	},
	{
			"code": "BRW",
			"lat": "71.2892",
			"lon": "-156.772",
			"name": "Wiley Post Will Rogers Memorial Airport",
			"city": "Barrow",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522440",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "44",
			"icao": "PABR",
			"direct_flights": "7",
			"carriers": "5"
	},
	{
			"code": "BTI",
			"lat": "70.1478",
			"lon": "-143.579",
			"name": "Barter Island Airport",
			"city": "Kaktovik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524590",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4800",
			"elev": "5",
			"icao": "PABA",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "BTL",
			"lat": "42.3046",
			"lon": "-85.2448",
			"name": "W K Kellogg Airport",
			"city": "Battle Creek",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12522297",
			"tz": "America/Detroit",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7011",
			"elev": "941",
			"icao": "KBTL",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "BTM",
			"lat": "45.9544",
			"lon": "-112.503",
			"name": "Bert Mooney Airport",
			"city": "Butte",
			"state": "Montana",
			"country": "United States",
			"woeid": "12518811",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "5553",
			"icao": "KBTM",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "BTR",
			"lat": "30.533",
			"lon": "-91.1567",
			"name": "Baton Rouge Metropolitan Airport",
			"city": "Baton Rouge",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12518754",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6900",
			"elev": "70",
			"icao": "KBTR",
			"direct_flights": "6",
			"carriers": "11"
	},
	{
			"code": "BTT",
			"lat": "66.9134",
			"lon": "-151.551",
			"name": "Bettles Airport",
			"city": "Bettles",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524591",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5199",
			"elev": "643",
			"icao": "PABT",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "BTV",
			"lat": "44.4688",
			"lon": "-73.1552",
			"name": "Burlington International Airport",
			"city": "South Burlington",
			"state": "Vermont",
			"country": "United States",
			"woeid": "12518979",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7807",
			"elev": "334",
			"icao": "KBTV",
			"direct_flights": "15",
			"carriers": "16"
	},
	{
			"code": "BUF",
			"lat": "42.9309",
			"lon": "-78.738",
			"name": "Greater Buffalo International Airport",
			"city": "Buffalo",
			"state": "New York",
			"country": "United States",
			"woeid": "12519977",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.nfta.com/airport/",
			"runway_length": "15",
			"elev": "724",
			"icao": "KBUF",
			"direct_flights": "29",
			"carriers": "30"
	},
	{
			"code": "BUR",
			"lat": "34.1963",
			"lon": "-118.352",
			"name": "Burbank Glendale Pasadena Airport",
			"city": "Burbank",
			"state": "California",
			"country": "United States",
			"woeid": "12518974",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.bobhopeairport.com",
			"runway_length": "6902",
			"elev": "775",
			"icao": "KBUR",
			"direct_flights": "14",
			"carriers": "12"
	},
	{
			"code": "BWI",
			"lat": "39.1841",
			"lon": "-76.6745",
			"name": "Baltimore-Washington International Thurgood Mars",
			"city": "Baltimore",
			"state": "Maryland",
			"country": "United States",
			"woeid": "12522341",
			"tz": "America/New_York",
			"phone": "410-859-7111",
			"type": "Airports",
			"email": "",
			"url": "http://www.bwiairport.com",
			"runway_length": "9519",
			"elev": "146",
			"icao": "KBWI",
			"direct_flights": "79",
			"carriers": "39"
	},
	{
			"code": "BZN",
			"lat": "45.7722",
			"lon": "-111.157",
			"name": "Gallatin Field Airport",
			"city": "Bozeman",
			"state": "Montana",
			"country": "United States",
			"woeid": "12519854",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9002",
			"elev": "4458",
			"icao": "KBZN",
			"direct_flights": "10",
			"carriers": "8"
	},
	{
			"code": "CAE",
			"lat": "33.9468",
			"lon": "-81.1241",
			"name": "Columbia Metropolitan Airport",
			"city": "West Columbia",
			"state": "South Carolina",
			"country": "United States",
			"woeid": "12519284",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8602",
			"elev": "236",
			"icao": "KCAE",
			"direct_flights": "20",
			"carriers": "26"
	},
	{
			"code": "CAK",
			"lat": "40.9149",
			"lon": "-81.4309",
			"name": "Akron Canton Regional Airport",
			"city": "Canton",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12518548",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6397",
			"elev": "1228",
			"icao": "KCAK",
			"direct_flights": "13",
			"carriers": "13"
	},
	{
			"code": "CDB",
			"lat": "55.2005",
			"lon": "-162.705",
			"name": "Cold Bay Airport",
			"city": "Cold Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519269",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10415",
			"elev": "98",
			"icao": "PACD",
			"direct_flights": "7",
			"carriers": "3"
	},
	{
			"code": "CDC",
			"lat": "37.6992",
			"lon": "-113.092",
			"name": "Cedar City Municipal Airport",
			"city": "Cedar City",
			"state": "Utah",
			"country": "United States",
			"woeid": "12519109",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7802",
			"elev": "5622",
			"icao": "KCDC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CDR",
			"lat": "42.8284",
			"lon": "-103.094",
			"name": "Chadron Municipal Airport",
			"city": "Chadron",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12519125",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6002",
			"elev": "3296",
			"icao": "KCDR",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "CDV",
			"lat": "60.4924",
			"lon": "-145.475",
			"name": "Merle K Mudhole Smith Airport",
			"city": "Cordova",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520907",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7499",
			"elev": "42",
			"icao": "PACV",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "CDW",
			"lat": "40.8759",
			"lon": "-74.2775",
			"name": "Essex County Airport",
			"city": "Fairfield",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "12519660",
			"tz": "America/New_York",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "4553",
			"elev": "173",
			"icao": "KCDW",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "CEC",
			"lat": "41.7765",
			"lon": "-124.237",
			"name": "Jack Mcnamara Field Airport",
			"city": "Crescent City",
			"state": "California",
			"country": "United States",
			"woeid": "12520324",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5002",
			"elev": "57",
			"icao": "KCEC",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "CEM",
			"lat": "65.6121",
			"lon": "-144.674",
			"name": "Central Airport",
			"city": "Circle",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524607",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "932",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CEZ",
			"lat": "37.3044",
			"lon": "-108.63",
			"name": "Cortez-Montezuma County Airport",
			"city": "Cortez",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12519328",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7205",
			"elev": "5914",
			"icao": "KCEZ",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "CGA",
			"lat": "55.4592",
			"lon": "-133.106",
			"name": "Craig Seaplane Base",
			"city": "Craig",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524610",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "CGI",
			"lat": "37.2272",
			"lon": "-89.5637",
			"name": "Cape Girardeau Municipal Airport",
			"city": "Scott City",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12519053",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6499",
			"elev": "342",
			"icao": "KCGI",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CHA",
			"lat": "35.0373",
			"lon": "-85.1966",
			"name": "Chattanooga Metropolitan Airport",
			"city": "Chattanooga",
			"state": "Tennessee",
			"country": "United States",
			"woeid": "12520716",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7401",
			"elev": "682",
			"icao": "KCHA",
			"direct_flights": "13",
			"carriers": "15"
	},
	{
			"code": "CHO",
			"lat": "38.14",
			"lon": "-78.4487",
			"name": "Charlottesville Albemarle Airport",
			"city": "Earlysville",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12519149",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6001",
			"elev": "640",
			"icao": "KCHO",
			"direct_flights": "7",
			"carriers": "9"
	},
	{
			"code": "CHS",
			"lat": "32.8838",
			"lon": "-80.0356",
			"name": "Charleston International Airport",
			"city": "North Charleston",
			"state": "South Carolina",
			"country": "United States",
			"woeid": "12519142",
			"tz": "America/New_York",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "9001",
			"elev": "46",
			"icao": "KCHS",
			"direct_flights": "22",
			"carriers": "25"
	},
	{
			"code": "CHU",
			"lat": "61.5769",
			"lon": "-159.244",
			"name": "Chuathbaluk",
			"city": "Chuathbaluk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2380180",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KCHU",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "CIC",
			"lat": "39.7987",
			"lon": "-121.854",
			"name": "Chico Municipal Airport",
			"city": "Chico",
			"state": "California",
			"country": "United States",
			"woeid": "12519180",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6724",
			"elev": "238",
			"icao": "KCIC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CID",
			"lat": "41.8893",
			"lon": "-91.7008",
			"name": "Cedar Rapids Municipal Airport",
			"city": "Cedar Rapids",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12519110",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7000",
			"elev": "864",
			"icao": "KCID",
			"direct_flights": "15",
			"carriers": "20"
	},
	{
			"code": "CIK",
			"lat": "66.65",
			"lon": "-143.75",
			"name": "Chalkyitsik Airport",
			"city": "Chalkyitsik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524613",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "560",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "CIU",
			"lat": "46.2581",
			"lon": "-84.4739",
			"name": "Chippewa County International Airport",
			"city": "Kincheloe",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12519187",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7201",
			"elev": "799",
			"icao": "KCIU",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "CKB",
			"lat": "39.2967",
			"lon": "-80.2314",
			"name": "Benedum Airport",
			"city": "Clarksburg",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12518797",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5198",
			"elev": "1203",
			"icao": "KCKB",
			"direct_flights": "4",
			"carriers": "2"
	},
	{
			"code": "CKD",
			"lat": "61.8667",
			"lon": "-158.133",
			"name": "Crooked Creek Airport",
			"city": "Aniak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524616",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1200",
			"elev": "2650",
			"icao": "",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "CKX",
			"lat": "64.0833",
			"lon": "-141.917",
			"name": "Chicken Airport",
			"city": "Tok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524619",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "1640",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CLD",
			"lat": "33.1255",
			"lon": "-117.275",
			"name": "Mcclellan Palomar Airport",
			"city": "Carlsbad",
			"state": "California",
			"country": "United States",
			"woeid": "12520851",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.co.san-diego.ca.us/dpw/airports/mcpal.htm",
			"runway_length": "4700",
			"elev": "328",
			"icao": "KCRQ",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "CLE",
			"lat": "41.4115",
			"lon": "-81.8339",
			"name": "Hopkins International Airport",
			"city": "Cleveland",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12520226",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8998",
			"elev": "792",
			"icao": "KCLE",
			"direct_flights": "102",
			"carriers": "44"
	},
	{
			"code": "CLL",
			"lat": "30.5938",
			"lon": "-96.3685",
			"name": "Easterwood Field Airport",
			"city": "College Station",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519579",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7000",
			"elev": "319",
			"icao": "KCLL",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "CLM",
			"lat": "48.1155",
			"lon": "-123.491",
			"name": "William R Fairchild International Airport",
			"city": "Port Angeles",
			"state": "Washington",
			"country": "United States",
			"woeid": "12522452",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6349",
			"elev": "288",
			"icao": "KCLM",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CLP",
			"lat": "58.8517",
			"lon": "-158.51",
			"name": "Clarks Point Airport",
			"city": "Clarks Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524621",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2730",
			"elev": "10",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CLT",
			"lat": "35.2226",
			"lon": "-80.946",
			"name": "Douglas International Airport",
			"city": "Charlotte",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12519519",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.charmeck.org/Departments/Airport/Home.htm",
			"runway_length": "10000",
			"elev": "749",
			"icao": "KCLT",
			"direct_flights": "133",
			"carriers": "39"
	},
	{
			"code": "CMH",
			"lat": "39.9974",
			"lon": "-82.8877",
			"name": "Port Columbus International Airport",
			"city": "Columbus",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12521441",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10701",
			"elev": "816",
			"icao": "KCMH",
			"direct_flights": "41",
			"carriers": "35"
	},
	{
			"code": "CMI",
			"lat": "40.0367",
			"lon": "-88.2638",
			"name": "University of Illinois-Willard Airport",
			"city": "Savoy",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12522247",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flycmi.com",
			"runway_length": "8100",
			"elev": "754",
			"icao": "KCMI",
			"direct_flights": "3",
			"carriers": "6"
	},
	{
			"code": "CMX",
			"lat": "47.1689",
			"lon": "-88.4942",
			"name": "Houghton County Memorial Airport",
			"city": "Hancock",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12520236",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6501",
			"elev": "1095",
			"icao": "KCMX",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "CNM",
			"lat": "32.3458",
			"lon": "-104.251",
			"name": "Cavern City Air Terminal Airport",
			"city": "Carlsbad",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12519107",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7854",
			"elev": "3293",
			"icao": "KCNM",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "CNY",
			"lat": "38.7609",
			"lon": "-109.742",
			"name": "Canyonlands Field Airport",
			"city": "Thompson",
			"state": "Utah",
			"country": "United States",
			"woeid": "12519050",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6901",
			"elev": "4575",
			"icao": "KCNY",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "COD",
			"lat": "44.5134",
			"lon": "-109.031",
			"name": "Yellowstone Regional Airport",
			"city": "Cody/Yellowstone",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12522532",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8505",
			"elev": "5089",
			"icao": "KCOD",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "COS",
			"lat": "38.7829",
			"lon": "-104.697",
			"name": "City of Colorado Springs Municipal Airport",
			"city": "Colorado Springs",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12519208",
			"tz": "America/Denver",
			"phone": "719-550-1972",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11021",
			"elev": "6172",
			"icao": "KCOS",
			"direct_flights": "16",
			"carriers": "19"
	},
	{
			"code": "COU",
			"lat": "38.8174",
			"lon": "-92.2218",
			"name": "Columbia Regional Airport",
			"city": "Columbia",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12519286",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "889",
			"icao": "KCOU",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "CPR",
			"lat": "42.8966",
			"lon": "-106.465",
			"name": "Natrona County International Airport",
			"city": "Casper",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12521085",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10600",
			"elev": "5348",
			"icao": "KCPR",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "CPX",
			"lat": "18.3204",
			"lon": "-65.2929",
			"name": "Culebra Airport",
			"city": "Culebra",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "12515657",
			"tz": "America/Puerto_Rico",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "65",
			"icao": "TJCP",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "CRP",
			"lat": "27.7747",
			"lon": "-97.5019",
			"name": "Corpus Christi International Airport",
			"city": "Corpus Christi",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519324",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7508",
			"elev": "44",
			"icao": "KCRP",
			"direct_flights": "5",
			"carriers": "12"
	},
	{
			"code": "CRW",
			"lat": "38.3697",
			"lon": "-81.5951",
			"name": "Yeager Airport",
			"city": "Charleston",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12522530",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6302",
			"elev": "982",
			"icao": "KCRW",
			"direct_flights": "10",
			"carriers": "9"
	},
	{
			"code": "CSG",
			"lat": "32.5184",
			"lon": "-84.9401",
			"name": "Columbus Metropolitan Airport",
			"city": "Columbus",
			"state": "Georgia",
			"country": "United States",
			"woeid": "23418432",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KCSG",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "CVG",
			"lat": "39.0571",
			"lon": "-84.6625",
			"name": "Greater Cincinnati International Airport",
			"city": "Hebron",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12519978",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9501",
			"elev": "891",
			"icao": "KCVG",
			"direct_flights": "115",
			"carriers": "39"
	},
	{
			"code": "CVN",
			"lat": "34.4271",
			"lon": "-103.087",
			"name": "Clovis Municipal Airport",
			"city": "Texico",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12519252",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6200",
			"elev": "4214",
			"icao": "KCVN",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "CWA",
			"lat": "44.7846",
			"lon": "-89.6704",
			"name": "Central Wisconsin Airport",
			"city": "Mosinee",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12519120",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7645",
			"elev": "1277",
			"icao": "KCWA",
			"direct_flights": "4",
			"carriers": "9"
	},
	{
			"code": "CYF",
			"lat": "60.1558",
			"lon": "-164.273",
			"name": "Chefornak Airport",
			"city": "Chefornak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524634",
			"tz": "America/Nome",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "1850",
			"elev": "40",
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "CYS",
			"lat": "41.1527",
			"lon": "-104.819",
			"name": "Cheyenne Airport",
			"city": "Cheyenne",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12519176",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9200",
			"elev": "6156",
			"icao": "KCYS",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "CZN",
			"lat": "62.0833",
			"lon": "-142.05",
			"name": "Chisana Airport",
			"city": "Gakona",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524639",
			"tz": "America/Yakutat",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4200",
			"elev": "3318",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "DAB",
			"lat": "29.1874",
			"lon": "-81.0615",
			"name": "Daytona Beach International Airport",
			"city": "Daytona Beach",
			"state": "Florida",
			"country": "United States",
			"woeid": "12519432",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7500",
			"elev": "35",
			"icao": "KDAB",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "DAL",
			"lat": "32.8439",
			"lon": "-96.8496",
			"name": "Dallas Love Field Airport",
			"city": "Dallas",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519401",
			"tz": "America/Chicago",
			"phone": "1-214-670-6073",
			"type": "Airports",
			"email": "",
			"url": "http://www.dallas-lovefield.com/",
			"runway_length": "8800",
			"elev": "487",
			"icao": "KDAL",
			"direct_flights": "19",
			"carriers": "8"
	},
	{
			"code": "DAY",
			"lat": "39.8968",
			"lon": "-84.2207",
			"name": "James M Cox Dayton International Airport",
			"city": "Dayton",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12520347",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9500",
			"elev": "1009",
			"icao": "KDAY",
			"direct_flights": "27",
			"carriers": "29"
	},
	{
			"code": "DBQ",
			"lat": "42.4047",
			"lon": "-90.7037",
			"name": "Dubuque Regional Airport",
			"city": "Dubuque",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12519540",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6498",
			"elev": "1076",
			"icao": "KDBQ",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "DCA",
			"lat": "38.849",
			"lon": "-77.0438",
			"name": "Washington National Airport",
			"city": "Arlington",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12522343",
			"tz": "America/New_York",
			"phone": "703 417 80 00",
			"type": "Airports",
			"email": "",
			"url": "http://metwashairports.com/reagan",
			"runway_length": "6869",
			"elev": "16",
			"icao": "KDCA",
			"direct_flights": "77",
			"carriers": "42"
	},
	{
			"code": "DDC",
			"lat": "37.7573",
			"lon": "-99.9697",
			"name": "Dodge City Regional Airport",
			"city": "Dodge City",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12519504",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6899",
			"elev": "2594",
			"icao": "KDDC",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "DEC",
			"lat": "39.8335",
			"lon": "-88.8773",
			"name": "Decatur Airport",
			"city": "Decatur",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12519441",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6497",
			"elev": "679",
			"icao": "KDEC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "DEN",
			"lat": "39.8396",
			"lon": "-104.672",
			"name": "Denver International Airport",
			"city": "Denver",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12523052",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12000",
			"elev": "5333",
			"icao": "KDEN",
			"direct_flights": "162",
			"carriers": "57"
	},
	{
			"code": "DFW",
			"lat": "32.9222",
			"lon": "-97.0409",
			"name": "Fort Worth International Airport",
			"city": "Dallas",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519786",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11388",
			"elev": "603",
			"icao": "KDFW",
			"direct_flights": "179",
			"carriers": "62"
	},
	{
			"code": "DHN",
			"lat": "31.3144",
			"lon": "-85.4487",
			"name": "Dothan Airport",
			"city": "Dothan",
			"state": "Alabama",
			"country": "United States",
			"woeid": "12519514",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8499",
			"elev": "401",
			"icao": "KDHN",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "DIK",
			"lat": "46.8035",
			"lon": "-102.802",
			"name": "Dickinson Municipal Airport",
			"city": "Dickinson",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12519490",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5200",
			"elev": "2589",
			"icao": "KDIK",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "DLG",
			"lat": "59.0445",
			"lon": "-158.513",
			"name": "Dillingham Municipal Airport",
			"city": "Dillingham",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519494",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6404",
			"elev": "85",
			"icao": "PADL",
			"direct_flights": "10",
			"carriers": "10"
	},
	{
			"code": "DLH",
			"lat": "46.838",
			"lon": "-92.1781",
			"name": "Duluth International Airport",
			"city": "Duluth",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12519545",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10152",
			"elev": "1430",
			"icao": "KDLH",
			"direct_flights": "4",
			"carriers": "7"
	},
	{
			"code": "DRG",
			"lat": "66.0833",
			"lon": "-162.767",
			"name": "Deering Airport",
			"city": "Deering",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524659",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "8",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "DRO",
			"lat": "37.1595",
			"lon": "-107.751",
			"name": "Durango la Plata County Airport",
			"city": "Durango",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12519550",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9200",
			"elev": "6685",
			"icao": "KDRO",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "DRT",
			"lat": "29.3702",
			"lon": "-100.918",
			"name": "Del Rio International Airport",
			"city": "Del Rio",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519452",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5105",
			"elev": "999",
			"icao": "KDRT",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "DSM",
			"lat": "41.5328",
			"lon": "-93.6481",
			"name": "Des Moines International Airport",
			"city": "Des Moines",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12519473",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.dsmairport.com",
			"runway_length": "9001",
			"elev": "957",
			"icao": "KDSM",
			"direct_flights": "20",
			"carriers": "24"
	},
	{
			"code": "DTW",
			"lat": "42.2327",
			"lon": "-83.3412",
			"name": "Detroit Metropolitan Wayne County Airport",
			"city": "Detroit",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12519481",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.metroairport.com/",
			"runway_length": "10501",
			"elev": "639",
			"icao": "KDTW",
			"direct_flights": "161",
			"carriers": "45"
	},
	{
			"code": "DUJ",
			"lat": "41.1833",
			"lon": "-78.8953",
			"name": "Du Bois Jefferson County Airport",
			"city": "Reynoldsville",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12519536",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5504",
			"elev": "1817",
			"icao": "KDUJ",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "DUT",
			"lat": "53.896",
			"lon": "-166.535",
			"name": "Unalaska Airport",
			"city": "Unalaska",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522244",
			"tz": "America/Adak",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4300",
			"elev": "12",
			"icao": "PADU",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "DVL",
			"lat": "48.108",
			"lon": "-98.9037",
			"name": "Devils Lake Municipal Airport",
			"city": "Devils Lake",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12519482",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5509",
			"elev": "1455",
			"icao": "KDVL",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "EAA",
			"lat": "64.7667",
			"lon": "-141.15",
			"name": "Eagle Airport",
			"city": "Tok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524661",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3600",
			"elev": "880",
			"icao": "PAEA",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "EAR",
			"lat": "40.7236",
			"lon": "-99.0151",
			"name": "Kearney Municipal Airport",
			"city": "Kearney",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12520429",
			"tz": "America/Chicago",
			"phone": "308-234-2318",
			"type": "Airports",
			"email": "bjohnson@flykearney.com",
			"url": "",
			"runway_length": "7092",
			"elev": "2130",
			"icao": "KEAR",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "EAT",
			"lat": "47.4048",
			"lon": "-120.21",
			"name": "Pangborn Memorial Airport",
			"city": "East Wenatchee",
			"state": "Washington",
			"country": "United States",
			"woeid": "12521295",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5499",
			"elev": "1245",
			"icao": "KEAT",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "EAU",
			"lat": "44.8625",
			"lon": "-91.4826",
			"name": "Eau Claire County Airport",
			"city": "Eau Claire",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12519585",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7300",
			"elev": "907",
			"icao": "KEAU",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "EDA",
			"lat": "55.9503",
			"lon": "-133.656",
			"name": "Edna Bay Seaplane Base",
			"city": "Ketchikan",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524642",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "EEK",
			"lat": "60.2167",
			"lon": "-162.017",
			"name": "Eek Airport",
			"city": "Eek",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524663",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1300",
			"elev": "40",
			"icao": "",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "EGE",
			"lat": "39.6395",
			"lon": "-106.912",
			"name": "Eagle County Regional Airport",
			"city": "Gypsum",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12519558",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "6538",
			"icao": "KEGE",
			"direct_flights": "12",
			"carriers": "9"
	},
	{
			"code": "EGV",
			"lat": "45.932",
			"lon": "-89.2599",
			"name": "Eagle River Union Airport",
			"city": "Eagle River",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12519564",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3600",
			"elev": "1642",
			"icao": "KEGV",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "EGX",
			"lat": "58.2101",
			"lon": "-157.366",
			"name": "Egegik Airport",
			"city": "Egegik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524588",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2100",
			"elev": "100",
			"icao": "PAII",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "EKO",
			"lat": "40.829",
			"lon": "-115.78",
			"name": "Elko Municipal Airport-J C Harris Field",
			"city": "Elko",
			"state": "Nevada",
			"country": "United States",
			"woeid": "12519626",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7211",
			"elev": "5135",
			"icao": "KEKO",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ELI",
			"lat": "64.6167",
			"lon": "-162.267",
			"name": "Elim Airport",
			"city": "Elim",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524667",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "200",
			"icao": "",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "ELM",
			"lat": "42.1633",
			"lon": "-76.8973",
			"name": "Elmira Corning Regional Airport",
			"city": "Horseheads",
			"state": "New York",
			"country": "United States",
			"woeid": "12519635",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6999",
			"elev": "955",
			"icao": "KELM",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "ELP",
			"lat": "31.7982",
			"lon": "-106.393",
			"name": "El Paso International Airport",
			"city": "El Paso",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519608",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11012",
			"elev": "3956",
			"icao": "KELP",
			"direct_flights": "20",
			"carriers": "23"
	},
	{
			"code": "ELV",
			"lat": "58.1833",
			"lon": "-136.317",
			"name": "Elfin Cove Airport",
			"city": "Elfin Cove",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524668",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ELY",
			"lat": "39.3043",
			"lon": "-114.853",
			"name": "Yelland Field Airport",
			"city": "Ely",
			"state": "Nevada",
			"country": "United States",
			"woeid": "12519640",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5998",
			"elev": "6255",
			"icao": "KELY",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "EMK",
			"lat": "62.785",
			"lon": "-164.491",
			"name": "Emmonak Airport",
			"city": "Alakanuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519644",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1900",
			"elev": "10",
			"icao": "",
			"direct_flights": "5",
			"carriers": "5"
	},
	{
			"code": "ENA",
			"lat": "60.5651",
			"lon": "-151.244",
			"name": "Kenai Municipal Airport",
			"city": "Kenai",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520437",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7575",
			"elev": "92",
			"icao": "PAEN",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "ENW",
			"lat": "42.5934",
			"lon": "-87.9299",
			"name": "Kenosha Regional Airport",
			"city": "Kenosha",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12520443",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4200",
			"elev": "729",
			"icao": "KENW",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ERI",
			"lat": "42.0829",
			"lon": "-80.1824",
			"name": "Erie International Airport",
			"city": "Erie",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12519655",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "732",
			"icao": "KERI",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "ESC",
			"lat": "45.718",
			"lon": "-87.0942",
			"name": "Delta County Airport",
			"city": "Escanaba",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12519461",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6498",
			"elev": "609",
			"icao": "KESC",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "ESD",
			"lat": "48.7073",
			"lon": "-122.909",
			"name": "Orcas Island Airport",
			"city": "Eastsound",
			"state": "Washington",
			"country": "United States",
			"woeid": "12523452",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2900",
			"elev": "25",
			"icao": "KORS",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "EUG",
			"lat": "44.1184",
			"lon": "-123.213",
			"name": "Mahlon Sweet Field Airport",
			"city": "Eugene",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12520758",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6202",
			"elev": "365",
			"icao": "KEUG",
			"direct_flights": "12",
			"carriers": "15"
	},
	{
			"code": "EVV",
			"lat": "38.0464",
			"lon": "-87.5308",
			"name": "Evansville Regional Airport",
			"city": "Evansville",
			"state": "Indiana",
			"country": "United States",
			"woeid": "12519675",
			"tz": "America/Chicago",
			"phone": "(812) 421-4401",
			"type": "Airports",
			"email": "comments@evvairport.com",
			"url": "http://www.evvairport.com",
			"runway_length": "8021",
			"elev": "418",
			"icao": "KEVV",
			"direct_flights": "7",
			"carriers": "10"
	},
	{
			"code": "EWB",
			"lat": "41.6735",
			"lon": "-70.9579",
			"name": "New Bedford Municipal Airport",
			"city": "New Bedford",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12521103",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4997",
			"elev": "80",
			"icao": "KEWB",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "EWD",
			"lat": "61.1021",
			"lon": "-149.924",
			"name": "Wildman Lake",
			"city": "Wildman Lake",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799607",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "EWN",
			"lat": "35.0786",
			"lon": "-77.0343",
			"name": "Craven County Regional Airport",
			"city": "New Bern",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12519354",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4804",
			"elev": "19",
			"icao": "KEWN",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "EWR",
			"lat": "40.6924",
			"lon": "-74.1843",
			"name": "Newark International Airport",
			"city": "Newark",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "12521127",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11000",
			"elev": "18",
			"icao": "KEWR",
			"direct_flights": "220",
			"carriers": "64"
	},
	{
			"code": "EYW",
			"lat": "24.5536",
			"lon": "-81.7551",
			"name": "Key West International Airport",
			"city": "Key West",
			"state": "Florida",
			"country": "United States",
			"woeid": "12520456",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4800",
			"elev": "4",
			"icao": "KEYW",
			"direct_flights": "8",
			"carriers": "10"
	},
	{
			"code": "FAI",
			"lat": "64.8183",
			"lon": "-147.866",
			"name": "Fairbanks International Airport",
			"city": "Fairbanks",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519682",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10300",
			"elev": "434",
			"icao": "PAFA",
			"direct_flights": "32",
			"carriers": "18"
	},
	{
			"code": "FAR",
			"lat": "46.9195",
			"lon": "-96.8243",
			"name": "Hector International Airport",
			"city": "Fargo",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12520153",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9546",
			"elev": "900",
			"icao": "KFAR",
			"direct_flights": "7",
			"carriers": "12"
	},
	{
			"code": "FAT",
			"lat": "36.7675",
			"lon": "-119.717",
			"name": "Fresno Yosemite International Airport",
			"city": "Fresno",
			"state": "California",
			"country": "United States",
			"woeid": "12519826",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9222",
			"elev": "332",
			"icao": "KFAT",
			"direct_flights": "14",
			"carriers": "19"
	},
	{
			"code": "FAY",
			"lat": "34.9914",
			"lon": "-78.8889",
			"name": "Fayetteville Regional Airport",
			"city": "Fayetteville",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12519718",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7204",
			"elev": "190",
			"icao": "KFAY",
			"direct_flights": "2",
			"carriers": "6"
	},
	{
			"code": "FCA",
			"lat": "48.3075",
			"lon": "-114.252",
			"name": "Glacier Park International Airport",
			"city": "Kalispell",
			"state": "Montana",
			"country": "United States",
			"woeid": "12519905",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "2972",
			"icao": "KFCA",
			"direct_flights": "8",
			"carriers": "10"
	},
	{
			"code": "FKL",
			"lat": "41.3766",
			"lon": "-79.8573",
			"name": "Chess Lamberton Airport",
			"city": "Franklin",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12519170",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5200",
			"elev": "1540",
			"icao": "KFKL",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "FLG",
			"lat": "35.139",
			"lon": "-111.675",
			"name": "Flagstaff Pulliam Airport",
			"city": "Flagstaff",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12521495",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6999",
			"elev": "7011",
			"icao": "KFLG",
			"direct_flights": "3",
			"carriers": "6"
	},
	{
			"code": "FLL",
			"lat": "26.0722",
			"lon": "-80.1354",
			"name": "Fort Lauderdale Hollywood International Airport",
			"city": "Dania Beach",
			"state": "Florida",
			"country": "United States",
			"woeid": "12519836",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9001",
			"elev": "11",
			"icao": "KFLL",
			"direct_flights": "108",
			"carriers": "46"
	},
	{
			"code": "FLO",
			"lat": "34.1936",
			"lon": "-79.7289",
			"name": "Florence Regional Airport",
			"city": "Florence",
			"state": "South Carolina",
			"country": "United States",
			"woeid": "12519746",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6498",
			"elev": "147",
			"icao": "KFLO",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "FMN",
			"lat": "36.7387",
			"lon": "-108.227",
			"name": "Four Corners Regional Airport",
			"city": "Farmington",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12519792",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6702",
			"elev": "5503",
			"icao": "KFMN",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "FMY",
			"lat": "26.5815",
			"lon": "-81.862",
			"name": "Page Field Airport",
			"city": "Fort Myers",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521276",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6401",
			"elev": "18",
			"icao": "KFMY",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "FNL",
			"lat": "40.4505",
			"lon": "-105.008",
			"name": "Fort Collins Loveland Municipal Airport",
			"city": "Loveland",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12519773",
			"tz": "America/Denver",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "4700",
			"elev": "4935",
			"icao": "KFNL",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "FNT",
			"lat": "42.9756",
			"lon": "-83.7411",
			"name": "Bishop International Airport",
			"city": "Flint",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12518841",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7848",
			"elev": "782",
			"icao": "KFNT",
			"direct_flights": "15",
			"carriers": "10"
	},
	{
			"code": "FOD",
			"lat": "42.5523",
			"lon": "-94.1819",
			"name": "Fort Dodge Regional Airport",
			"city": "Fort Dodge",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12519775",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6547",
			"elev": "1157",
			"icao": "KFOD",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "FRD",
			"lat": "48.5252",
			"lon": "-123.027",
			"name": "Friday Harbor Airport",
			"city": "Friday Harbor",
			"state": "Washington",
			"country": "United States",
			"woeid": "12519828",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3400",
			"elev": "120",
			"icao": "KFHR",
			"direct_flights": "5",
			"carriers": "1"
	},
	{
			"code": "FSD",
			"lat": "43.5813",
			"lon": "-96.7317",
			"name": "Sioux Falls Regional Airport",
			"city": "Sioux Falls",
			"state": "South Dakota",
			"country": "United States",
			"woeid": "12520371",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8999",
			"elev": "1429",
			"icao": "KFSD",
			"direct_flights": "9",
			"carriers": "11"
	},
	{
			"code": "FSM",
			"lat": "36.1881",
			"lon": "-94.4944",
			"name": "Smith Field Airport",
			"city": "Fort Smith",
			"state": "Arkansas",
			"country": "United States",
			"woeid": "12521888",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "469",
			"icao": "KFSM",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "FWA",
			"lat": "40.9883",
			"lon": "-85.1899",
			"name": "Fort Wayne Municipal Airport-Baer Field",
			"city": "Fort Wayne",
			"state": "Indiana",
			"country": "United States",
			"woeid": "12519784",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "802",
			"icao": "KFWA",
			"direct_flights": "27",
			"carriers": "16"
	},
	{
			"code": "FYU",
			"lat": "66.5714",
			"lon": "-145.25",
			"name": "Fort Yukon Airport",
			"city": "Fort Yukon",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519788",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5809",
			"elev": "433",
			"icao": "PFYU",
			"direct_flights": "5",
			"carriers": "5"
	},
	{
			"code": "GAL",
			"lat": "64.7404",
			"lon": "-156.931",
			"name": "Galena Airport",
			"city": "Galena",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519851",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7254",
			"elev": "152",
			"icao": "PAGA",
			"direct_flights": "9",
			"carriers": "5"
	},
	{
			"code": "GAM",
			"lat": "63.7667",
			"lon": "-171.738",
			"name": "Gambell Airport",
			"city": "Gambell",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519858",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4500",
			"elev": "28",
			"icao": "PAGM",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "GBD",
			"lat": "38.352",
			"lon": "-98.853",
			"name": "Great Bend Municipal Airport",
			"city": "Great Bend",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12519973",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7999",
			"elev": "1891",
			"icao": "KGBD",
			"direct_flights": "5",
			"carriers": "3"
	},
	{
			"code": "GCC",
			"lat": "44.3465",
			"lon": "-105.533",
			"name": "Gillette Campbell County Airport",
			"city": "Gillette",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12519902",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7500",
			"elev": "4363",
			"icao": "KGCC",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "GCK",
			"lat": "37.9267",
			"lon": "-100.719",
			"name": "Garden City Regional Airport",
			"city": "Pierceville",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12519861",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5999",
			"elev": "2888",
			"icao": "KGCK",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "GEG",
			"lat": "47.625",
			"lon": "-117.538",
			"name": "Spokane International Airport",
			"city": "Spokane",
			"state": "Washington",
			"country": "United States",
			"woeid": "12521938",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "2372",
			"icao": "KGEG",
			"direct_flights": "15",
			"carriers": "20"
	},
	{
			"code": "GFK",
			"lat": "47.9494",
			"lon": "-97.1762",
			"name": "Grand Forks Mark Andrews International Airport",
			"city": "Grand Forks",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12519951",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7349",
			"elev": "844",
			"icao": "KGFK",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "GGG",
			"lat": "32.3874",
			"lon": "-94.7194",
			"name": "Gregg County Airport",
			"city": "Longview",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520015",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "365",
			"icao": "KGGG",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "GJT",
			"lat": "39.1217",
			"lon": "-108.529",
			"name": "Walker Field Airport",
			"city": "Grand Junction",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12522315",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10501",
			"elev": "4858",
			"icao": "KGJT",
			"direct_flights": "7",
			"carriers": "11"
	},
	{
			"code": "GLH",
			"lat": "33.4819",
			"lon": "-90.9903",
			"name": "Mid Delta Regional Airport",
			"city": "Greenville",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12520935",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7019",
			"elev": "131",
			"icao": "KGLH",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "GLV",
			"lat": "64.5433",
			"lon": "-163.033",
			"name": "Golovin",
			"city": "Golovin",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2411932",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2200",
			"elev": "25",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "GNU",
			"lat": "59.1218",
			"lon": "-161.588",
			"name": "Alaska",
			"city": "Goodnews Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "15",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "GNV",
			"lat": "29.6861",
			"lon": "-82.277",
			"name": "Gainesville Regional Airport",
			"city": "Gainesville",
			"state": "Florida",
			"country": "United States",
			"woeid": "12519850",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7503",
			"elev": "152",
			"icao": "KGNV",
			"direct_flights": "3",
			"carriers": "8"
	},
	{
			"code": "GPT",
			"lat": "30.4133",
			"lon": "-89.072",
			"name": "Gulfport Biloxi Regional Airport",
			"city": "Gulfport",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12520037",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9002",
			"elev": "28",
			"icao": "KGPT",
			"direct_flights": "9",
			"carriers": "11"
	},
	{
			"code": "GRB",
			"lat": "44.4923",
			"lon": "-88.1274",
			"name": "Austin Straubel International Airport",
			"city": "Green Bay",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12518709",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.co.brown.wi.us/airport/",
			"runway_length": "7699",
			"elev": "695",
			"icao": "KGRB",
			"direct_flights": "12",
			"carriers": "16"
	},
	{
			"code": "GRK",
			"lat": "31.0615",
			"lon": "-97.8206",
			"name": "Killeen-Fort Hood Regional Airport",
			"city": "Killeen",
			"state": "Texas",
			"country": "United States",
			"woeid": "12521608",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KGRK",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "GRR",
			"lat": "42.8841",
			"lon": "-85.5307",
			"name": "Gerald R. Ford International Airport",
			"city": "Grand Rapids",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12520445",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "794",
			"icao": "KGRR",
			"direct_flights": "21",
			"carriers": "26"
	},
	{
			"code": "GSO",
			"lat": "36.1038",
			"lon": "-79.9427",
			"name": "Triad International Airport",
			"city": "Greensboro",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12522200",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "926",
			"icao": "KGSO",
			"direct_flights": "24",
			"carriers": "26"
	},
	{
			"code": "GSP",
			"lat": "34.8907",
			"lon": "-82.2167",
			"name": "Greenville Spartanburg International Airport",
			"city": "Greer",
			"state": "South Carolina",
			"country": "United States",
			"woeid": "12520010",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7600",
			"elev": "972",
			"icao": "KGSP",
			"direct_flights": "25",
			"carriers": "25"
	},
	{
			"code": "GST",
			"lat": "58.4246",
			"lon": "-135.707",
			"name": "Gustavus Airport",
			"city": "Gustavus",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520042",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6800",
			"elev": "36",
			"icao": "PAGS",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "GTF",
			"lat": "47.482",
			"lon": "-111.356",
			"name": "Great Falls International Airport",
			"city": "Great Falls",
			"state": "Montana",
			"country": "United States",
			"woeid": "12519974",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10502",
			"elev": "3674",
			"icao": "KGTF",
			"direct_flights": "10",
			"carriers": "10"
	},
	{
			"code": "GTR",
			"lat": "33.4516",
			"lon": "-88.5876",
			"name": "Golden Triangle Regional Airport",
			"city": "Columbus",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12519926",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6497",
			"elev": "264",
			"icao": "KGTR",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "GUC",
			"lat": "38.5356",
			"lon": "-106.941",
			"name": "Gunnison County Airport",
			"city": "Gunnison",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12520039",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7198",
			"elev": "7668",
			"icao": "KGUC",
			"direct_flights": "5",
			"carriers": "4"
	},
	{
			"code": "GUM",
			"lat": "13.4833",
			"lon": "144.796",
			"name": "Antonio B Won Pat International Airport",
			"city": "Hagåtña",
			"state": "Guam",
			"country": "United States",
			"woeid": "12523115",
			"tz": "Pacific/Guam",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PGUM",
			"direct_flights": "22",
			"carriers": "10"
	},
	{
			"code": "HAE",
			"lat": "36.2306",
			"lon": "-112.669",
			"name": "Havasupai",
			"city": "Havasupai",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12794857",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KHAE",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HCR",
			"lat": "62.2016",
			"lon": "-159.77",
			"name": "Alaska",
			"city": "Holy Cross",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "85",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "HDN",
			"lat": "40.485",
			"lon": "-107.219",
			"name": "Yampa Valley Airport",
			"city": "Hayden",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12522528",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6999",
			"elev": "6597",
			"icao": "KHDN",
			"direct_flights": "9",
			"carriers": "8"
	},
	{
			"code": "HHH",
			"lat": "32.2267",
			"lon": "-80.6989",
			"name": "Hilton Head Airport",
			"city": "Hilton Head Island",
			"state": "South Carolina",
			"country": "United States",
			"woeid": "12520191",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3700",
			"elev": "20",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "HIB",
			"lat": "47.3934",
			"lon": "-92.8418",
			"name": "Chisholm Hibbing Airport",
			"city": "Hibbing",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12519189",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6750",
			"elev": "1352",
			"icao": "KHIB",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "HKB",
			"lat": "63.8667",
			"lon": "-148.967",
			"name": "Healy Lake Airport",
			"city": "Healy Lake",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799776",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2640",
			"elev": "1294",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HLN",
			"lat": "46.6104",
			"lon": "-111.99",
			"name": "Helena Regional Airport",
			"city": "Helena",
			"state": "Montana",
			"country": "United States",
			"woeid": "12520154",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "3873",
			"icao": "KHLN",
			"direct_flights": "6",
			"carriers": "8"
	},
	{
			"code": "HNH",
			"lat": "58.0966",
			"lon": "-135.41",
			"name": "Hoonah Airport",
			"city": "Hoonah",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29388566",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3100",
			"elev": "30",
			"icao": "PAOH",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HNL",
			"lat": "21.3358",
			"lon": "-157.919",
			"name": "Honolulu International Airport",
			"city": "Honolulu",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520216",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12360",
			"elev": "13",
			"icao": "PHNL",
			"direct_flights": "43",
			"carriers": "36"
	},
	{
			"code": "HNM",
			"lat": "20.7944",
			"lon": "-156.015",
			"name": "Hana Airport",
			"city": "Hana",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520072",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3605",
			"elev": "77",
			"icao": "PHHN",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "HNS",
			"lat": "59.2439",
			"lon": "-135.524",
			"name": "Haines Airport",
			"city": "Haines",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29388567",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4602",
			"elev": "16",
			"icao": "PAHN",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "HOB",
			"lat": "32.6929",
			"lon": "-103.215",
			"name": "Lea County Regional Airport",
			"city": "Hobbs",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12520599",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7398",
			"elev": "3659",
			"icao": "KHOB",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HOM",
			"lat": "59.6408",
			"lon": "-151.499",
			"name": "Homer Airport",
			"city": "Homer",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520209",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7401",
			"elev": "78",
			"icao": "PAHO",
			"direct_flights": "4",
			"carriers": "6"
	},
	{
			"code": "HON",
			"lat": "44.3833",
			"lon": "-98.2333",
			"name": "Howes",
			"city": "Huron",
			"state": "South Dakota",
			"country": "United States",
			"woeid": "12782876",
			"tz": "America/Chicago",
			"phone": "605-353-8516",
			"type": "Airports",
			"email": "",
			"url": "http://Huron Regional Airport",
			"runway_length": "7200",
			"elev": "1288",
			"icao": "KHON",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "HOU",
			"lat": "29.6572",
			"lon": "-95.2795",
			"name": "William P Hobby Airport",
			"city": "Houston",
			"state": "Texas",
			"country": "United States",
			"woeid": "12522451",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7602",
			"elev": "47",
			"icao": "KHOU",
			"direct_flights": "33",
			"carriers": "12"
	},
	{
			"code": "HPB",
			"lat": "61.5262",
			"lon": "-166.142",
			"name": "Hooper Bay Airport",
			"city": "Hooper Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520222",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3616",
			"elev": "18",
			"icao": "PAHP",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "HPN",
			"lat": "41.0693",
			"lon": "-73.7042",
			"name": "Westchester County Airport",
			"city": "Purchase",
			"state": "New York",
			"country": "United States",
			"woeid": "12522396",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6548",
			"elev": "439",
			"icao": "KHPN",
			"direct_flights": "16",
			"carriers": "13"
	},
	{
			"code": "HRL",
			"lat": "26.2216",
			"lon": "-97.663",
			"name": "Grande Valley International Airport",
			"city": "Harlingen",
			"state": "Texas",
			"country": "United States",
			"woeid": "12519957",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8300",
			"elev": "36",
			"icao": "KHRL",
			"direct_flights": "9",
			"carriers": "10"
	},
	{
			"code": "HSL",
			"lat": "65.7024",
			"lon": "-156.387",
			"name": "Alaska",
			"city": "Huslia",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "180",
			"icao": "",
			"direct_flights": "5",
			"carriers": "4"
	},
	{
			"code": "HSV",
			"lat": "34.6492",
			"lon": "-86.7767",
			"name": "Huntsville International Airport",
			"city": "Huntsville",
			"state": "Alabama",
			"country": "United States",
			"woeid": "12519069",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "363",
			"icao": "KHSV",
			"direct_flights": "17",
			"carriers": "24"
	},
	{
			"code": "HTS",
			"lat": "38.37",
			"lon": "-82.5542",
			"name": "Tri State Walker Long Field Airport",
			"city": "Huntington",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12522198",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6509",
			"elev": "828",
			"icao": "KHTS",
			"direct_flights": "5",
			"carriers": "4"
	},
	{
			"code": "HUS",
			"lat": "66.0443",
			"lon": "-154.258",
			"name": "Hughes",
			"city": "Hughes",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2425379",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4000",
			"elev": "289",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "HVN",
			"lat": "41.2709",
			"lon": "-72.89",
			"name": "Tweed New Haven Airport",
			"city": "East Haven",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "12522229",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5600",
			"elev": "13",
			"icao": "KHVN",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HVR",
			"lat": "48.5461",
			"lon": "-109.773",
			"name": "Havre City-County Airport",
			"city": "Havre",
			"state": "Montana",
			"country": "United States",
			"woeid": "12520127",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5205",
			"elev": "2588",
			"icao": "KHVR",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HYA",
			"lat": "41.6667",
			"lon": "-70.2863",
			"name": "Barnstable Boardman Polando Airport",
			"city": "Hyannis",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12518745",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5564",
			"elev": "52",
			"icao": "KHYA",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "HYG",
			"lat": "55.205",
			"lon": "-132.822",
			"name": "Alaska",
			"city": "Hydaburg",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "HYL",
			"lat": "55.4833",
			"lon": "-132.65",
			"name": "SPB",
			"city": "Hollis",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799854",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "HYS",
			"lat": "38.8546",
			"lon": "-99.2737",
			"name": "Hays Municipal Airport",
			"city": "Hays",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12520139",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5700",
			"elev": "1998",
			"icao": "KHYS",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "IAD",
			"lat": "38.9556",
			"lon": "-77.4484",
			"name": "Dulles International Airport",
			"city": "Washington",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12519544",
			"tz": "America/New_York",
			"phone": "703-572-6001",
			"type": "Airports",
			"email": "",
			"url": "http://www.metwashairports.com/Dulles/",
			"runway_length": "11501",
			"elev": "313",
			"icao": "KIAD",
			"direct_flights": "150",
			"carriers": "63"
	},
	{
			"code": "IAG",
			"lat": "43.1",
			"lon": "-78.9423",
			"name": "Niagara Falls International Airport",
			"city": "Niagara Falls",
			"state": "New York",
			"country": "United States",
			"woeid": "12521138",
			"tz": "America/New_York",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "9125",
			"elev": "590",
			"icao": "KIAG",
			"direct_flights": "4",
			"carriers": "1"
	},
	{
			"code": "IAH",
			"lat": "29.9784",
			"lon": "-95.3424",
			"name": "George Bush Intercontinental Airport",
			"city": "Houston",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520245",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12001",
			"elev": "98",
			"icao": "KIAH",
			"direct_flights": "210",
			"carriers": "54"
	},
	{
			"code": "IAN",
			"lat": "66.9699",
			"lon": "-160.429",
			"name": "Kiana",
			"city": "Kiana",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2432151",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3400",
			"elev": "150",
			"icao": "PAIK",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "ICT",
			"lat": "37.6531",
			"lon": "-97.43",
			"name": "Wichita Mid-Continent Airport",
			"city": "Wichita",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12522432",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7302",
			"elev": "1332",
			"icao": "KICT",
			"direct_flights": "14",
			"carriers": "22"
	},
	{
			"code": "IDA",
			"lat": "43.5147",
			"lon": "-112.068",
			"name": "Fanning Field Airport",
			"city": "Idaho Falls",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12519708",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9001",
			"elev": "4741",
			"icao": "KIDA",
			"direct_flights": "6",
			"carriers": "8"
	},
	{
			"code": "IFP",
			"lat": "35.1657",
			"lon": "-114.557",
			"name": "Laughlin-Bullhead International Airport",
			"city": "Bullhead City",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12518972",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KIFP",
			"direct_flights": "32",
			"carriers": "1"
	},
	{
			"code": "IGG",
			"lat": "59.3167",
			"lon": "-155.9",
			"name": "Igiugig",
			"city": "Igiugig",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520567",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2700",
			"elev": "110",
			"icao": "PAIG",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "IGM",
			"lat": "35.2692",
			"lon": "-113.957",
			"name": "Kingman Airport",
			"city": "Kingman",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12520468",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6831",
			"elev": "3446",
			"icao": "KIGM",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "IKO",
			"lat": "52.9389",
			"lon": "-168.868",
			"name": "Nikolski",
			"city": "Nikolski",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2459970",
			"tz": "America/Adak",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "3500",
			"elev": "73",
			"icao": "PAKO",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ILI",
			"lat": "59.7555",
			"lon": "-154.918",
			"name": "Iliamna Airport",
			"city": "Iliamna",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29387741",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4800",
			"elev": "207",
			"icao": "PAIL",
			"direct_flights": "5",
			"carriers": "5"
	},
	{
			"code": "ILM",
			"lat": "34.2668",
			"lon": "-77.912",
			"name": "Wilmington International Airport",
			"city": "Wilmington",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12521109",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flyilm.com",
			"runway_length": "7999",
			"elev": "32",
			"icao": "KILM",
			"direct_flights": "6",
			"carriers": "9"
	},
	{
			"code": "ILN",
			"lat": "39.4348",
			"lon": "-83.7982",
			"name": "Airborne Airpark",
			"city": "Wilmington",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12518539",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "1071",
			"icao": "KILN",
			"direct_flights": "71",
			"carriers": "4"
	},
	{
			"code": "IMT",
			"lat": "45.8153",
			"lon": "-88.1185",
			"name": "Ford Airport",
			"city": "Kingsford",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12519761",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "1182",
			"icao": "KIMT",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "IND",
			"lat": "39.7322",
			"lon": "-86.2707",
			"name": "Indianapolis International Airport",
			"city": "Indianapolis",
			"state": "Indiana",
			"country": "United States",
			"woeid": "12520294",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10005",
			"elev": "797",
			"icao": "KIND",
			"direct_flights": "46",
			"carriers": "39"
	},
	{
			"code": "INL",
			"lat": "48.5661",
			"lon": "-93.3978",
			"name": "Falls International Airport",
			"city": "International Falls",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12519705",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6508",
			"elev": "1185",
			"icao": "KINL",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "INT",
			"lat": "36.1361",
			"lon": "-80.2294",
			"name": "Smith Reynolds Airport",
			"city": "Winston-Salem",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12521891",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6655",
			"elev": "970",
			"icao": "KINT",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "IPL",
			"lat": "32.8332",
			"lon": "-115.57",
			"name": "Imperial County Airport",
			"city": "Imperial",
			"state": "California",
			"country": "United States",
			"woeid": "12520284",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5304",
			"elev": "-56",
			"icao": "KIPL",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "IPT",
			"lat": "41.2441",
			"lon": "-76.9276",
			"name": "Williamsport-Lycoming County Airport",
			"city": "Montoursville",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12522464",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6449",
			"elev": "529",
			"icao": "KIPT",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "IRC",
			"lat": "65.8245",
			"lon": "-144.063",
			"name": "Circle",
			"city": "Circle",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2380412",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2730",
			"elev": "598",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "IRM",
			"lat": "45.3517",
			"lon": "-89.6665",
			"name": "",
			"city": "Irma",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "2427520",
			"tz": "America/Menominee",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ISN",
			"lat": "48.1767",
			"lon": "-103.631",
			"name": "Sloulin Field International Airport",
			"city": "Williston",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12521885",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6041",
			"elev": "1957",
			"icao": "KISN",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "ISO",
			"lat": "35.3243",
			"lon": "-77.6115",
			"name": "Kinston Jetport Stallings Airport",
			"city": "Kinston",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12520475",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6000",
			"elev": "94",
			"icao": "KISO",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ISP",
			"lat": "40.7891",
			"lon": "-73.0984",
			"name": "Long Island Macarthur Airport",
			"city": "Ronkonkoma",
			"state": "New York",
			"country": "United States",
			"woeid": "12520697",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5999",
			"elev": "99",
			"icao": "KISP",
			"direct_flights": "10",
			"carriers": "3"
	},
	{
			"code": "ITH",
			"lat": "42.4898",
			"lon": "-76.4627",
			"name": "Tompkins County Airport",
			"city": "Ithaca",
			"state": "New York",
			"country": "United States",
			"woeid": "12522159",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5801",
			"elev": "1099",
			"icao": "KITH",
			"direct_flights": "5",
			"carriers": "6"
	},
	{
			"code": "ITO",
			"lat": "19.7126",
			"lon": "-155.042",
			"name": "Hilo International Airport",
			"city": "Hilo",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520190",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9803",
			"elev": "38",
			"icao": "PHTO",
			"direct_flights": "3",
			"carriers": "9"
	},
	{
			"code": "IWD",
			"lat": "46.5208",
			"lon": "-90.1344",
			"name": "Gogebic-Iron County Airport",
			"city": "Ironwood",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12520317",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6501",
			"elev": "1230",
			"icao": "KIWD",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "IYK",
			"lat": "35.6606",
			"lon": "-117.816",
			"name": "Inyokern Airport",
			"city": "Inyokern",
			"state": "California",
			"country": "United States",
			"woeid": "12520307",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7337",
			"elev": "2457",
			"icao": "KIYK",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "JAC",
			"lat": "43.6034",
			"lon": "-110.736",
			"name": "Jackson Hole Airport",
			"city": "Jackson",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12520335",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6299",
			"elev": "6444",
			"icao": "KJAC",
			"direct_flights": "7",
			"carriers": "9"
	},
	{
			"code": "JAN",
			"lat": "32.3089",
			"lon": "-90.0733",
			"name": "Jackson International Airport",
			"city": "Pearl",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12520336",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8500",
			"elev": "346",
			"icao": "KJAN",
			"direct_flights": "16",
			"carriers": "15"
	},
	{
			"code": "JAX",
			"lat": "30.4914",
			"lon": "-81.676",
			"name": "Jacksonville International Airport",
			"city": "Jacksonville",
			"state": "Florida",
			"country": "United States",
			"woeid": "12520339",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "30",
			"icao": "KJAX",
			"direct_flights": "32",
			"carriers": "31"
	},
	{
			"code": "JEF",
			"lat": "38.593",
			"lon": "-92.1652",
			"name": "Jefferson City Memorial Airport",
			"city": "Holts Summit",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12520356",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KJEF",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "JFK",
			"lat": "40.6437",
			"lon": "-73.79",
			"name": "John F Kennedy International Airport",
			"city": "Jamaica",
			"state": "New York",
			"country": "United States",
			"woeid": "12520380",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "14572",
			"elev": "13",
			"icao": "KJFK",
			"direct_flights": "233",
			"carriers": "100"
	},
	{
			"code": "JGC",
			"lat": "35.9621",
			"lon": "-112.133",
			"name": "Grand Canyon Heliport",
			"city": "Williams",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12523301",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Heliport2",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "6580",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "JHM",
			"lat": "20.9619",
			"lon": "-156.676",
			"name": "Kapalua West Maui Airport",
			"city": "Lahaina",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520422",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PHJH",
			"direct_flights": "2",
			"carriers": "5"
	},
	{
			"code": "JHW",
			"lat": "42.1528",
			"lon": "-79.2666",
			"name": "Chautauqua County-Jamestown Airport",
			"city": "Jamestown",
			"state": "New York",
			"country": "United States",
			"woeid": "12519155",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5299",
			"elev": "1724",
			"icao": "KJHW",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "JKL",
			"lat": "37.5917",
			"lon": "-83.315",
			"name": "Julian Carroll Airport",
			"city": "Jackson",
			"state": "Kentucky",
			"country": "United States",
			"woeid": "12520407",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KJKL",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "JLN",
			"lat": "37.147",
			"lon": "-94.5019",
			"name": "Joplin Regional Airport",
			"city": "Webb City",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12520400",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6503",
			"elev": "981",
			"icao": "KJLN",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "JMS",
			"lat": "46.9243",
			"lon": "-98.6788",
			"name": "Jamestown Municipal Airport",
			"city": "Jamestown",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12520348",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "1498",
			"icao": "KJMS",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "JNU",
			"lat": "58.3598",
			"lon": "-134.583",
			"name": "Juneau International Airport",
			"city": "Juneau",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520409",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8456",
			"elev": "18",
			"icao": "PAJN",
			"direct_flights": "15",
			"carriers": "11"
	},
	{
			"code": "JRB",
			"lat": "40.7039",
			"lon": "-74.0129",
			"name": "Downtown Manhattan Heliport",
			"city": "New York",
			"state": "New York",
			"country": "United States",
			"woeid": "12523144",
			"tz": "America/New_York",
			"phone": "",
			"type": "Heliport2",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KJRB",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "JST",
			"lat": "40.3208",
			"lon": "-78.8306",
			"name": "Johnstown Cambria County Airport",
			"city": "Johnstown",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12520393",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5486",
			"elev": "2284",
			"icao": "KJST",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "KAL",
			"lat": "64.3248",
			"lon": "-158.725",
			"name": "Kaltag",
			"city": "Kaltag",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2430534",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "120",
			"icao": "PAKV",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KBC",
			"lat": "66.2667",
			"lon": "-145.8",
			"name": "Birch Creek Airport",
			"city": "Birch Creek",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518834",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "450",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "KCC",
			"lat": "56.014",
			"lon": "-132.826",
			"name": "Alaska",
			"city": "Coffman Cove",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "KCG",
			"lat": "56.3173",
			"lon": "-158.596",
			"name": "Chignik Fisheries Airport",
			"city": "Chignik Lagoon",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523152",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1280",
			"elev": "25",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "KCL",
			"lat": "56.3065",
			"lon": "-158.537",
			"name": "Chignik Lagoon Airport",
			"city": "Chignik Lagoon",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523153",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1700",
			"elev": "50",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "KCQ",
			"lat": "56.3119",
			"lon": "-158.362",
			"name": "Chignik Lake Airport",
			"city": "Chignik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523154",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "50",
			"icao": "PAJC",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "KEB",
			"lat": "41.0833",
			"lon": "-92.4583",
			"name": "Nanwalek",
			"city": "Nanwalek",
			"state": "Alaska",
			"country": "United States",
			"woeid": "23417038",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1800",
			"elev": "27",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "KEK",
			"lat": "59.3516",
			"lon": "-157.48",
			"name": "Ekwok",
			"city": "Ekwok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2397726",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2720",
			"elev": "130",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KFP",
			"lat": "54.85",
			"lon": "-163.417",
			"name": "",
			"city": "False Pass",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2402200",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "20",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KGK",
			"lat": "59.7266",
			"lon": "-157.26",
			"name": "Koliganek Airport",
			"city": "New Koliganek",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29388571",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2140",
			"elev": "240",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KGX",
			"lat": "62.9053",
			"lon": "-160.067",
			"name": "Alaska",
			"city": "Grayling",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2400",
			"elev": "99",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KKA",
			"lat": "64.9311",
			"lon": "-161.16",
			"name": "Koyuk",
			"city": "Koyuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2433864",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "150",
			"icao": "PAKK",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "KKB",
			"lat": "58.1869",
			"lon": "-152.375",
			"name": "Kitoi Seaplane Base",
			"city": "Kitoi Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524650",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KKH",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Kongiganak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "25",
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "KKI",
			"lat": "60.9057",
			"lon": "-161.424",
			"name": "Akiachak",
			"city": "Akiachak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2352459",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "1900",
			"elev": "25",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "KKU",
			"lat": "58.8167",
			"lon": "-158.55",
			"name": "Ekuk Airport",
			"city": "Clarks Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524622",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1200",
			"elev": "30",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KLG",
			"lat": "61.5382",
			"lon": "-160.314",
			"name": "Kalskag",
			"city": "Kalskag",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2430533",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2200",
			"elev": "49",
			"icao": "PALG",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "KLL",
			"lat": "59.1126",
			"lon": "-156.856",
			"name": "Levelock",
			"city": "Levelock",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2438614",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1915",
			"elev": "60",
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "KLN",
			"lat": "57.5383",
			"lon": "-153.98",
			"name": "Larsen Bay",
			"city": "Larsen Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "23510510",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "2377",
			"elev": "77",
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "KLW",
			"lat": "55.5743",
			"lon": "-133.064",
			"name": "Klawock Seaplane Base",
			"city": "Klawock",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520485",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "50",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KMC",
			"lat": "57.1333",
			"lon": "-153.2",
			"name": "King Khalid Military",
			"city": "King Khalid Mil. City",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2433701",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KMO",
			"lat": "58.9817",
			"lon": "-159.058",
			"name": "Manokotak",
			"city": "Manokotak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2444918",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "107",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KMY",
			"lat": "57",
			"lon": "-154.167",
			"name": "Moser Bay",
			"city": "Moser Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799674",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KNK",
			"lat": "59.4333",
			"lon": "-154.85",
			"name": "",
			"city": "Kakhonak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2430469",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1900",
			"elev": "50",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KNW",
			"lat": "59.4513",
			"lon": "-157.317",
			"name": "New Stuyahok",
			"city": "New Stuyahok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2459005",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1800",
			"elev": "75",
			"icao": "PANW",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "KOA",
			"lat": "19.7334",
			"lon": "-156.039",
			"name": "Kailua-Kona International Airport",
			"city": "Kailua Kona",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520428",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "43",
			"icao": "PHKO",
			"direct_flights": "11",
			"carriers": "17"
	},
	{
			"code": "KOT",
			"lat": "63.0328",
			"lon": "-163.554",
			"name": "Kotlik",
			"city": "Kotlik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2433856",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2236",
			"elev": "5",
			"icao": "",
			"direct_flights": "5",
			"carriers": "3"
	},
	{
			"code": "KOY",
			"lat": "47.902",
			"lon": "-112.265",
			"name": "Olga Bay",
			"city": "Olga Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KOZ",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Ouzinkie",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "KPB",
			"lat": "56.3502",
			"lon": "-133.622",
			"name": "Point Baker Seaplane Base",
			"city": "Point Baker",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523156",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KPC",
			"lat": "65.2544",
			"lon": "-166.856",
			"name": "Port Clarence Coast Guard Station",
			"city": "Brevig Mission",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521440",
			"tz": "America/Nome",
			"phone": "907-642-3844",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "4500",
			"elev": "10",
			"icao": "PAPC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KPN",
			"lat": "59.9371",
			"lon": "-164.041",
			"name": "Kipnuk",
			"city": "Kipnuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2433000",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "2140",
			"elev": "20",
			"icao": "",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "KPR",
			"lat": "58.4833",
			"lon": "-152.583",
			"name": "Port Williams",
			"city": "Port Williams",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12485470",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KPV",
			"lat": "55.9122",
			"lon": "-159.154",
			"name": "Alaska",
			"city": "Perryville",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "25",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KPY",
			"lat": "58.743",
			"lon": "-154.96",
			"name": "Alaska",
			"city": "Port Bailey",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KQA",
			"lat": "54.1271",
			"lon": "-165.889",
			"name": "Akutan Airport",
			"city": "Akutan",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12518551",
			"tz": "America/Adak",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KSM",
			"lat": "62.0503",
			"lon": "-163.179",
			"name": "Alaska",
			"city": "Saint Marys",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6000",
			"elev": "311",
			"icao": "PASM",
			"direct_flights": "5",
			"carriers": "4"
	},
	{
			"code": "KTB",
			"lat": "55.6833",
			"lon": "-132.529",
			"name": "Alaska",
			"city": "Thorne Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "KTN",
			"lat": "55.354",
			"lon": "-131.706",
			"name": "Ketchikan International Airport",
			"city": "Ketchikan",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520453",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7497",
			"elev": "88",
			"icao": "PAKT",
			"direct_flights": "13",
			"carriers": "11"
	},
	{
			"code": "KTS",
			"lat": "65.3333",
			"lon": "-166.483",
			"name": "",
			"city": "Teller Mission",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1920",
			"elev": "25",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "KUK",
			"lat": "60.8953",
			"lon": "-162.517",
			"name": "Kasigluk",
			"city": "Kasigluk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2430788",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2463",
			"elev": "40",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "KVC",
			"lat": "55.0667",
			"lon": "-162.317",
			"name": "",
			"city": "King Cove",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2432507",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3500",
			"elev": "148",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KVL",
			"lat": "67.7333",
			"lon": "-164.667",
			"name": "Kivalina",
			"city": "Kivalina",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799789",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "10",
			"icao": "PAVL",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "KWK",
			"lat": "59.9077",
			"lon": "-163.026",
			"name": "Kwigillingok",
			"city": "Kwigillingok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2434060",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2300",
			"elev": "20",
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "KWN",
			"lat": "59.7511",
			"lon": "-161.908",
			"name": "Quinhagak",
			"city": "Quinhagak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2477888",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2700",
			"elev": "10",
			"icao": "",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "KWP",
			"lat": "57.7696",
			"lon": "-153.554",
			"name": "Village Seaplane Base-West Point",
			"city": "West Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523157",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KWT",
			"lat": "60.8",
			"lon": "-161.45",
			"name": "Kwethluk Airport",
			"city": "Kwethluk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2434059",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1800",
			"elev": "28",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "KXA",
			"lat": "55.5",
			"lon": "-132.5",
			"name": "Kasaan SPB",
			"city": "Kasaan",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2430774",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KYK",
			"lat": "57.5645",
			"lon": "-154.454",
			"name": "Karluk Airport",
			"city": "Kodiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523158",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "137",
			"icao": "PAKY",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "KYU",
			"lat": "64.9",
			"lon": "-157.7",
			"name": "Koyukuk",
			"city": "Koyukuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799793",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2980",
			"elev": "115",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "KZB",
			"lat": "57.55",
			"lon": "-153.75",
			"name": "Zachar Bay",
			"city": "Zachar Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799679",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "LAN",
			"lat": "42.7728",
			"lon": "-84.5888",
			"name": "Lansing Capital City Airport",
			"city": "Lansing",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12519060",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7251",
			"elev": "860",
			"icao": "KLAN",
			"direct_flights": "5",
			"carriers": "7"
	},
	{
			"code": "LAR",
			"lat": "37.8527",
			"lon": "-76.517",
			"name": "General Brees Field",
			"city": "Laramie",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12793533",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7700",
			"elev": "7278",
			"icao": "KLAR",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "LAS",
			"lat": "36.0806",
			"lon": "-115.143",
			"name": "Mccarran International Airport",
			"city": "Las Vegas",
			"state": "Nevada",
			"country": "United States",
			"woeid": "12520849",
			"tz": "America/Los_Angeles",
			"phone": "(702) 261-5211",
			"type": "Airports",
			"email": "",
			"url": "http://www.mccarran.com",
			"runway_length": "12636",
			"elev": "2174",
			"icao": "KLAS",
			"direct_flights": "130",
			"carriers": "64"
	},
	{
			"code": "LAW",
			"lat": "34.573",
			"lon": "-98.4135",
			"name": "Lawton Municipal Airport",
			"city": "Lawton",
			"state": "Oklahoma",
			"country": "United States",
			"woeid": "12520593",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8599",
			"elev": "1110",
			"icao": "KLAW",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "LAX",
			"lat": "33.9456",
			"lon": "-118.391",
			"name": "Los Angeles International Airport",
			"city": "Los Angeles",
			"state": "California",
			"country": "United States",
			"woeid": "12520706",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12091",
			"elev": "126",
			"icao": "KLAX",
			"direct_flights": "200",
			"carriers": "99"
	},
	{
			"code": "LBB",
			"lat": "33.6566",
			"lon": "-101.821",
			"name": "Lubbock International Airport",
			"city": "Lubbock",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520718",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flylia.com/",
			"runway_length": "11500",
			"elev": "3281",
			"icao": "KLBB",
			"direct_flights": "10",
			"carriers": "11"
	},
	{
			"code": "LBE",
			"lat": "40.2728",
			"lon": "-79.4056",
			"name": "Westmoreland County Airport",
			"city": "Latrobe",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12522400",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5501",
			"elev": "1161",
			"icao": "KLBE",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "LBF",
			"lat": "41.1333",
			"lon": "-100.705",
			"name": "Lee Bird Field Airport",
			"city": "North Platte",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12520609",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "2779",
			"icao": "KLBF",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "LBL",
			"lat": "37.0446",
			"lon": "-100.952",
			"name": "Liberal Municipal Airport",
			"city": "Liberal",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12520643",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7100",
			"elev": "2887",
			"icao": "KLBL",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "LCH",
			"lat": "30.1235",
			"lon": "-93.2198",
			"name": "Lake Charles Regional Airport",
			"city": "Lake Charles",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12520523",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "15",
			"icao": "KLCH",
			"direct_flights": "1",
			"carriers": "5"
	},
	{
			"code": "LCK",
			"lat": "39.8176",
			"lon": "-82.936",
			"name": "Rickenbacker International Airport",
			"city": "Columbus",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12521590",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12100",
			"elev": "744",
			"icao": "KLCK",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "LEB",
			"lat": "43.6249",
			"lon": "-72.3087",
			"name": "Lebanon Municipal Airport",
			"city": "West Lebanon",
			"state": "New Hampshire",
			"country": "United States",
			"woeid": "12520604",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5495",
			"elev": "589",
			"icao": "KLEB",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "LEX",
			"lat": "38.0384",
			"lon": "-84.5989",
			"name": "Blue Grass Field",
			"city": "Lexington",
			"state": "Kentucky",
			"country": "United States",
			"woeid": "24554866",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7003",
			"elev": "980",
			"icao": "KLEX",
			"direct_flights": "14",
			"carriers": "17"
	},
	{
			"code": "LFT",
			"lat": "30.2084",
			"lon": "-91.9935",
			"name": "Lafayette Regional Airport",
			"city": "Lafayette",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12520518",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7651",
			"elev": "42",
			"icao": "KLFT",
			"direct_flights": "5",
			"carriers": "9"
	},
	{
			"code": "LGA",
			"lat": "40.7731",
			"lon": "-73.8756",
			"name": "LaGuardia Airport",
			"city": "Flushing",
			"state": "New York",
			"country": "United States",
			"woeid": "12520509",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7000",
			"elev": "22",
			"icao": "KLGA",
			"direct_flights": "82",
			"carriers": "30"
	},
	{
			"code": "LGB",
			"lat": "33.8186",
			"lon": "-118.144",
			"name": "Long Beach Daugherty Field Airport",
			"city": "Long Beach",
			"state": "California",
			"country": "United States",
			"woeid": "12520696",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "57",
			"icao": "",
			"direct_flights": "19",
			"carriers": "8"
	},
	{
			"code": "LIH",
			"lat": "21.9782",
			"lon": "-159.351",
			"name": "Lihue Airport",
			"city": "Lihue",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520648",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6000",
			"elev": "149",
			"icao": "PHLI",
			"direct_flights": "7",
			"carriers": "13"
	},
	{
			"code": "LIT",
			"lat": "34.7278",
			"lon": "-92.219",
			"name": "Adams Field Airport",
			"city": "Little Rock",
			"state": "Arkansas",
			"country": "United States",
			"woeid": "12518526",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7173",
			"elev": "258",
			"icao": "KLIT",
			"direct_flights": "22",
			"carriers": "20"
	},
	{
			"code": "LKE",
			"lat": "47.6333",
			"lon": "-122.333",
			"name": "Lake Union Seaplane Base",
			"city": "Seattle",
			"state": "Washington",
			"country": "United States",
			"woeid": "12523163",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "14",
			"icao": "",
			"direct_flights": "4",
			"carriers": "1"
	},
	{
			"code": "LMA",
			"lat": "63.8825",
			"lon": "-152.313",
			"name": "Lake Minchumina",
			"city": "Lake Minchumina",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2435032",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4600",
			"elev": "684",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "LMT",
			"lat": "42.1638",
			"lon": "-121.745",
			"name": "Klamath Falls International Airport",
			"city": "Klamath Falls",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12520483",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10301",
			"elev": "4092",
			"icao": "KLMT",
			"direct_flights": "2",
			"carriers": "6"
	},
	{
			"code": "LNK",
			"lat": "40.8461",
			"lon": "-96.7543",
			"name": "Lincoln Municipal Airport",
			"city": "Lincoln",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12520655",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12901",
			"elev": "1214",
			"icao": "KLNK",
			"direct_flights": "5",
			"carriers": "9"
	},
	{
			"code": "LNY",
			"lat": "20.7909",
			"lon": "-156.951",
			"name": "Lanai Airport",
			"city": "Lanai City",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520557",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "1308",
			"icao": "PHNY",
			"direct_flights": "4",
			"carriers": "6"
	},
	{
			"code": "LOU",
			"lat": "38.2228",
			"lon": "-85.6669",
			"name": "Bowman Field Airport",
			"city": "Louisville",
			"state": "Kentucky",
			"country": "United States",
			"woeid": "12518909",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KLOU",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "LPS",
			"lat": "48.4855",
			"lon": "-122.936",
			"name": "Lopez Island Airport",
			"city": "Lopez Island",
			"state": "Washington",
			"country": "United States",
			"woeid": "29387798",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2900",
			"elev": "200",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "LRD",
			"lat": "27.5431",
			"lon": "-99.4555",
			"name": "Laredo International Airport",
			"city": "Laredo",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520571",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8201",
			"elev": "508",
			"icao": "KLRD",
			"direct_flights": "13",
			"carriers": "15"
	},
	{
			"code": "LSE",
			"lat": "43.8751",
			"lon": "-91.2638",
			"name": "La Crosse Municipal Airport",
			"city": "La Crosse",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12520505",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8536",
			"elev": "654",
			"icao": "KLSE",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "LUF",
			"lat": "33.5355",
			"lon": "-112.372",
			"name": "Luke Air Force Base",
			"city": "Webb",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12520723",
			"tz": "America/Phoenix",
			"phone": "623 856 6376",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "9910",
			"elev": "1085",
			"icao": "KLUF",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "LUP",
			"lat": "21.2077",
			"lon": "-156.976",
			"name": "Kalaupapa Airport",
			"city": "Kalaupapa",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "29387738",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2760",
			"elev": "26",
			"icao": "PHLU",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "LUR",
			"lat": "68.8482",
			"lon": "-166.118",
			"name": "Cape Lisburne Long-Range Radar Station",
			"city": "Point Hope",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519054",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "5009",
			"elev": "12",
			"icao": "PALU",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "LWB",
			"lat": "37.8571",
			"lon": "-80.4044",
			"name": "Greenbrier Valley Airport",
			"city": "Lewisburg",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12519993",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7004",
			"elev": "2303",
			"icao": "KLWB",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "LWS",
			"lat": "46.3776",
			"lon": "-117.011",
			"name": "Lewiston Nez Perce County Airport",
			"city": "Lewiston",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12520635",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6512",
			"elev": "1438",
			"icao": "KLWS",
			"direct_flights": "4",
			"carriers": "5"
	},
	{
			"code": "LWT",
			"lat": "47.0552",
			"lon": "-109.46",
			"name": "Lewistown Municipal Airport",
			"city": "Lewistown",
			"state": "Montana",
			"country": "United States",
			"woeid": "12520636",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5600",
			"elev": "4167",
			"icao": "KLWT",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "LYH",
			"lat": "37.3309",
			"lon": "-79.1944",
			"name": "Lynchburg Regional Airport",
			"city": "Lynchburg",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12520730",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5799",
			"elev": "938",
			"icao": "KLYH",
			"direct_flights": "2",
			"carriers": "5"
	},
	{
			"code": "MAF",
			"lat": "31.9361",
			"lon": "-102.208",
			"name": "Midland International Airport",
			"city": "Midland",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520944",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9501",
			"elev": "2871",
			"icao": "KMAF",
			"direct_flights": "8",
			"carriers": "11"
	},
	{
			"code": "MAZ",
			"lat": "18.2531",
			"lon": "-67.1489",
			"name": "Eugenio Maria de Hostos Airport",
			"city": "Mayaguez",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "12515660",
			"tz": "America/Puerto_Rico",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "29",
			"icao": "TJMZ",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "MBL",
			"lat": "44.2757",
			"lon": "-86.2558",
			"name": "Manistee County-Blacker Airport",
			"city": "Manistee",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12520778",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5502",
			"elev": "620",
			"icao": "KMBL",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "MBS",
			"lat": "43.5311",
			"lon": "-84.0933",
			"name": "MBS International Airport",
			"city": "Freeland",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12522191",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "668",
			"icao": "KMBS",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "MCE",
			"lat": "37.2892",
			"lon": "-120.515",
			"name": "Merced Municipal Airport-Macready Field",
			"city": "Merced",
			"state": "California",
			"country": "United States",
			"woeid": "12520900",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5903",
			"elev": "153",
			"icao": "KMCE",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "MCG",
			"lat": "62.9536",
			"lon": "-155.603",
			"name": "Mcgrath Airport",
			"city": "Mcgrath",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12520858",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5481",
			"elev": "337",
			"icao": "PAMC",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "MCI",
			"lat": "39.2992",
			"lon": "-94.7171",
			"name": "Kansas City International Airport",
			"city": "Kansas City",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12520420",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flykci.com/",
			"runway_length": "10801",
			"elev": "1025",
			"icao": "KMCI",
			"direct_flights": "64",
			"carriers": "41"
	},
	{
			"code": "MCK",
			"lat": "40.2071",
			"lon": "-100.599",
			"name": "Mccook Municipal Airport",
			"city": "Mccook",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12520873",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5998",
			"elev": "2579",
			"icao": "KMCK",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "MCN",
			"lat": "32.7023",
			"lon": "-83.65",
			"name": "Middle Georgia Regional Airport",
			"city": "Macon",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12520939",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6501",
			"elev": "354",
			"icao": "KMCN",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "MCO",
			"lat": "28.4418",
			"lon": "-81.3115",
			"name": "Orlando International Airport",
			"city": "Orlando",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521243",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12004",
			"elev": "96",
			"icao": "KMCO",
			"direct_flights": "106",
			"carriers": "63"
	},
	{
			"code": "MCW",
			"lat": "43.153",
			"lon": "-93.3361",
			"name": "Mason City Municipal Airport",
			"city": "Clear Lake",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12520832",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6501",
			"elev": "1213",
			"icao": "KMCW",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "MDT",
			"lat": "40.1962",
			"lon": "-76.7564",
			"name": "Harrisburg International Airport",
			"city": "Middletown",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12520098",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9501",
			"elev": "310",
			"icao": "KMDT",
			"direct_flights": "18",
			"carriers": "22"
	},
	{
			"code": "MDW",
			"lat": "41.7875",
			"lon": "-87.7416",
			"name": "Chicago Midway International Airport",
			"city": "Chicago",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12519178",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6519",
			"elev": "619",
			"icao": "KMDW",
			"direct_flights": "55",
			"carriers": "8"
	},
	{
			"code": "MEI",
			"lat": "32.3334",
			"lon": "-88.7449",
			"name": "Key Field Airport",
			"city": "Meridian",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12520455",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8004",
			"elev": "297",
			"icao": "KMEI",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "MEM",
			"lat": "35.047",
			"lon": "-89.9823",
			"name": "Memphis International Airport",
			"city": "Memphis",
			"state": "Tennessee",
			"country": "United States",
			"woeid": "12520895",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9319",
			"elev": "332",
			"icao": "KMEM",
			"direct_flights": "96",
			"carriers": "28"
	},
	{
			"code": "MFE",
			"lat": "26.1813",
			"lon": "-98.2404",
			"name": "Miller International Airport",
			"city": "Mcallen",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520953",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7108",
			"elev": "107",
			"icao": "KMFE",
			"direct_flights": "4",
			"carriers": "11"
	},
	{
			"code": "MFR",
			"lat": "42.3691",
			"lon": "-122.874",
			"name": "Rogue Valley International-Medford Airport",
			"city": "Central Point",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12520884",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8800",
			"elev": "1331",
			"icao": "KMFR",
			"direct_flights": "10",
			"carriers": "13"
	},
	{
			"code": "MGM",
			"lat": "32.3049",
			"lon": "-86.3909",
			"name": "Montgomery Regional Airport",
			"city": "Montgomery",
			"state": "Alabama",
			"country": "United States",
			"woeid": "12519409",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9001",
			"elev": "221",
			"icao": "KMGM",
			"direct_flights": "4",
			"carriers": "9"
	},
	{
			"code": "MGW",
			"lat": "39.6411",
			"lon": "-79.9241",
			"name": "Morgantown Municipal Airport-Hart Field",
			"city": "Morgantown",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12521027",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5199",
			"elev": "1248",
			"icao": "KMGW",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "MHK",
			"lat": "39.1368",
			"lon": "-96.6699",
			"name": "Manhattan Municipal Airport",
			"city": "Manhattan",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12520775",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7000",
			"elev": "1056",
			"icao": "KMHK",
			"direct_flights": "5",
			"carriers": "3"
	},
	{
			"code": "MHR",
			"lat": "38.5646",
			"lon": "-121.297",
			"name": "Mather Airport",
			"city": "Mather",
			"state": "California",
			"country": "United States",
			"woeid": "12521692",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KMHR",
			"direct_flights": "5",
			"carriers": "1"
	},
	{
			"code": "MHT",
			"lat": "42.9293",
			"lon": "-71.4386",
			"name": "Manchester-Boston Regional Airport",
			"city": "Manchester",
			"state": "New Hampshire",
			"country": "United States",
			"woeid": "12520772",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7001",
			"elev": "234",
			"icao": "KMHT",
			"direct_flights": "20",
			"carriers": "16"
	},
	{
			"code": "MIA",
			"lat": "25.7953",
			"lon": "-80.2727",
			"name": "Miami International Airport",
			"city": "Miami",
			"state": "Florida",
			"country": "United States",
			"woeid": "12520923",
			"tz": "America/New_York",
			"phone": "(305) 876-7000",
			"type": "Airports",
			"email": "customerservice@miami-airport.com",
			"url": "http://www.miami-airport.com",
			"runway_length": "13000",
			"elev": "11",
			"icao": "KMIA",
			"direct_flights": "167",
			"carriers": "91"
	},
	{
			"code": "MKC",
			"lat": "39.1197",
			"lon": "-94.5906",
			"name": "Kansas City Downtown Airport",
			"city": "Kansas City",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12520419",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "7001",
			"elev": "758",
			"icao": "KMKC",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "MKE",
			"lat": "42.9471",
			"lon": "-87.9051",
			"name": "General Mitchell International Airport",
			"city": "Milwaukee",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12519880",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9690",
			"elev": "723",
			"icao": "KMKE",
			"direct_flights": "59",
			"carriers": "30"
	},
	{
			"code": "MKG",
			"lat": "43.1646",
			"lon": "-86.2367",
			"name": "Muskegon County Airport",
			"city": "Muskegon",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12521071",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6501",
			"elev": "628",
			"icao": "KMKG",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "MKK",
			"lat": "21.1557",
			"lon": "-157.094",
			"name": "Molokai Airport",
			"city": "Hoolehua",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520984",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4494",
			"elev": "454",
			"icao": "PHMK",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "MLB",
			"lat": "28.0957",
			"lon": "-80.6282",
			"name": "Melbourne International Airport",
			"city": "Melbourne",
			"state": "Florida",
			"country": "United States",
			"woeid": "12520889",
			"tz": "America/New_York",
			"phone": "321-723-6227",
			"type": "Airports",
			"email": "info@mlbair.com",
			"url": "http://www.mlbair.com",
			"runway_length": "10181",
			"elev": "35",
			"icao": "KMLB",
			"direct_flights": "1",
			"carriers": "5"
	},
	{
			"code": "MLI",
			"lat": "41.4539",
			"lon": "-90.5058",
			"name": "Quad City Airport",
			"city": "Coal Valley",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12521505",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6507",
			"elev": "589",
			"icao": "KMLI",
			"direct_flights": "11",
			"carriers": "14"
	},
	{
			"code": "MLL",
			"lat": "61.8833",
			"lon": "-162.067",
			"name": "Marshall",
			"city": "Marshall",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799653",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1762",
			"elev": "90",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "MLU",
			"lat": "32.5099",
			"lon": "-92.044",
			"name": "Monroe Regional Airport",
			"city": "Monroe",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12520996",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7507",
			"elev": "79",
			"icao": "KMLU",
			"direct_flights": "4",
			"carriers": "6"
	},
	{
			"code": "MLY",
			"lat": "64.9812",
			"lon": "-150.637",
			"name": "Manley Hot Springs",
			"city": "Manley Hot Springs",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2444846",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2760",
			"elev": "270",
			"icao": "PAML",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "MMH",
			"lat": "37.6288",
			"lon": "-118.844",
			"name": "Mammoth June Lakes Airport",
			"city": "Mammoth Lakes",
			"state": "California",
			"country": "United States",
			"woeid": "12520768",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "7000",
			"elev": "7128",
			"icao": "KMMH",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "MNT",
			"lat": "65.1987",
			"lon": "-149.53",
			"name": "Minto",
			"city": "Minto",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2452225",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1800",
			"elev": "328",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "MOB",
			"lat": "30.6775",
			"lon": "-88.243",
			"name": "Mobile Regional Airport",
			"city": "Mobile",
			"state": "Alabama",
			"country": "United States",
			"woeid": "12518752",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8527",
			"elev": "218",
			"icao": "KMOB",
			"direct_flights": "11",
			"carriers": "15"
	},
	{
			"code": "MOD",
			"lat": "37.6319",
			"lon": "-120.959",
			"name": "Modesto City County Airport-Harry Sham Field",
			"city": "Modesto",
			"state": "California",
			"country": "United States",
			"woeid": "12520978",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5911",
			"elev": "97",
			"icao": "KMOD",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "MOT",
			"lat": "48.2554",
			"lon": "-101.291",
			"name": "Minot International Airport",
			"city": "Minot",
			"state": "North Dakota",
			"country": "United States",
			"woeid": "12520968",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7493",
			"elev": "1715",
			"icao": "KMOT",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "MOU",
			"lat": "62.0833",
			"lon": "-163.733",
			"name": "Mountain Village",
			"city": "Mountain Village",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799686",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2214",
			"elev": "165",
			"icao": "PAMO",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "MQT",
			"lat": "46.3501",
			"lon": "-87.3871",
			"name": "Sawyer International Airport",
			"city": "Marquette",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12520411",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "1419",
			"icao": "KSAW",
			"direct_flights": "5",
			"carriers": "6"
	},
	{
			"code": "MRY",
			"lat": "36.5872",
			"lon": "-121.851",
			"name": "Monterey Peninsula Airport",
			"city": "Monterey",
			"state": "California",
			"country": "United States",
			"woeid": "12521001",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6597",
			"elev": "244",
			"icao": "KMRY",
			"direct_flights": "8",
			"carriers": "15"
	},
	{
			"code": "MSL",
			"lat": "34.7439",
			"lon": "-87.6185",
			"name": "Muscle Shoals Regional Airport",
			"city": "Muscle Shoals",
			"state": "Alabama",
			"country": "United States",
			"woeid": "12521070",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6693",
			"elev": "550",
			"icao": "KMSL",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "MSN",
			"lat": "43.1351",
			"lon": "-89.3465",
			"name": "Dane County Regional Airport-Truax Field",
			"city": "Madison",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12519407",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9005",
			"elev": "862",
			"icao": "KMSN",
			"direct_flights": "18",
			"carriers": "20"
	},
	{
			"code": "MSO",
			"lat": "46.9192",
			"lon": "-114.084",
			"name": "Missoula International Airport",
			"city": "Missoula",
			"state": "Montana",
			"country": "United States",
			"woeid": "12520974",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9499",
			"elev": "3201",
			"icao": "KMSO",
			"direct_flights": "8",
			"carriers": "11"
	},
	{
			"code": "MSP",
			"lat": "44.8793",
			"lon": "-93.1987",
			"name": "Minneapolis St Paul International Airport",
			"city": "St. Paul",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12520966",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://mspairport.com",
			"runway_length": "11006",
			"elev": "841",
			"icao": "KMSP",
			"direct_flights": "171",
			"carriers": "41"
	},
	{
			"code": "MSS",
			"lat": "44.9326",
			"lon": "-74.8535",
			"name": "Massena International Airport",
			"city": "Massena",
			"state": "New York",
			"country": "United States",
			"woeid": "12521580",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5001",
			"elev": "214",
			"icao": "KMSS",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "MSY",
			"lat": "29.983",
			"lon": "-90.2569",
			"name": "New Orleans International Airport",
			"city": "Kenner",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12521116",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flymsy.com",
			"runway_length": null,
			"elev": "4",
			"icao": "KMSY",
			"direct_flights": "41",
			"carriers": "44"
	},
	{
			"code": "MTJ",
			"lat": "38.5003",
			"lon": "-107.899",
			"name": "Montrose Regional Airport",
			"city": "Montrose",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12521012",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8497",
			"elev": "5759",
			"icao": "KMTJ",
			"direct_flights": "8",
			"carriers": "8"
	},
	{
			"code": "MTM",
			"lat": "55.1333",
			"lon": "-131.583",
			"name": "Metlakatla Sea Plane Base",
			"city": "Metlakatla",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2449920",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "MUE",
			"lat": "19.9983",
			"lon": "-155.675",
			"name": "Waimea Kohala Airport",
			"city": "Kamuela",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12522305",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5200",
			"elev": "2671",
			"icao": "PHMU",
			"direct_flights": "4",
			"carriers": "2"
	},
	{
			"code": "MVY",
			"lat": "41.3895",
			"lon": "-70.6112",
			"name": "Marthas Vineyard Airport",
			"city": "Vineyard Haven",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12520822",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KMVY",
			"direct_flights": "7",
			"carriers": "2"
	},
	{
			"code": "MWA",
			"lat": "37.7467",
			"lon": "-89.0104",
			"name": "Williamson County Regional Airport",
			"city": "Marion",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12522462",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6502",
			"elev": "471",
			"icao": "KMWA",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "MYL",
			"lat": "44.8968",
			"lon": "-116.096",
			"name": "Mccall Airport",
			"city": "Mccall",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12520848",
			"tz": "America/Boise",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "5002",
			"elev": "5023",
			"icao": "KMYL",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "MYR",
			"lat": "33.6821",
			"lon": "-78.9228",
			"name": "Myrtle Beach International Airport",
			"city": "Myrtle Beach",
			"state": "South Carolina",
			"country": "United States",
			"woeid": "12521074",
			"tz": "America/New_York",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "9502",
			"elev": "26",
			"icao": "KMYR",
			"direct_flights": "13",
			"carriers": "12"
	},
	{
			"code": "MYU",
			"lat": "60.3906",
			"lon": "-166.191",
			"name": "Mekoryuk",
			"city": "Mekoryuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2449074",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3271",
			"elev": "48",
			"icao": "PAMY",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "NCN",
			"lat": "60.0784",
			"lon": "-148.017",
			"name": "Chenega",
			"city": "New Chenega",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2378864",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "NIB",
			"lat": "45.9837",
			"lon": "-108.028",
			"name": "Nikolai",
			"city": "Nikolai",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2459969",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "450",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "NIP",
			"lat": "30.2342",
			"lon": "-81.6753",
			"name": "Jacksonville Naval Air Station",
			"city": "Jacksonville",
			"state": "Florida",
			"country": "United States",
			"woeid": "12520342",
			"tz": "America/New_York",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KNIP",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "NIU",
			"lat": "21.3358",
			"lon": "-157.919",
			"name": "Honolulu International Airport",
			"city": "Honolulu",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520216",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "NKI",
			"lat": "55.8556",
			"lon": "-133.183",
			"name": "Naukiti Airport",
			"city": "Naukiti",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "NLG",
			"lat": "56.0167",
			"lon": "-161.15",
			"name": "",
			"city": "Nelson Lagoon",
			"state": "Alaska",
			"country": "United States",
			"woeid": "23417017",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3300",
			"elev": "13",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "NME",
			"lat": "60.4723",
			"lon": "-164.699",
			"name": "Nightmute Airport",
			"city": "Nightmute",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2459959",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "6",
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "NNL",
			"lat": "59.9717",
			"lon": "-154.847",
			"name": "",
			"city": "Nondalton",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2460300",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2900",
			"elev": "300",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "NUI",
			"lat": "70.2167",
			"lon": "-150.917",
			"name": "Nuiqsut",
			"city": "Nuiqsut",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799827",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1900",
			"elev": "50",
			"icao": "KNUI",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "NUL",
			"lat": "64.7134",
			"lon": "-158.077",
			"name": "Nulato Airport",
			"city": "Nulato",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29388568",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2980",
			"elev": "310",
			"icao": "PANU",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "NUP",
			"lat": "60.897",
			"lon": "-162.453",
			"name": "Alaska",
			"city": "Nunapitchuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "10",
			"icao": "",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "NYA",
			"lat": "44.7718",
			"lon": "-93.9263",
			"name": "",
			"city": "Norwood Young America",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "23417628",
			"tz": "America/Menominee",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "OAJ",
			"lat": "34.8307",
			"lon": "-77.6053",
			"name": "Albert J Ellis Airport",
			"city": "Richlands",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12518557",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7100",
			"elev": "94",
			"icao": "KOAJ",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "OAK",
			"lat": "37.7158",
			"lon": "-122.209",
			"name": "Oakland International Airport",
			"city": "Oakland",
			"state": "California",
			"country": "United States",
			"woeid": "12520917",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "6",
			"icao": "KOAK",
			"direct_flights": "35",
			"carriers": "19"
	},
	{
			"code": "OBU",
			"lat": "66.9148",
			"lon": "-156.878",
			"name": "Kobuk Airport",
			"city": "Kobuk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524644",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "145",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "ODW",
			"lat": "48.2517",
			"lon": "-122.68",
			"name": "Oak Harbor Airpark",
			"city": "Oak Harbor",
			"state": "Washington",
			"country": "United States",
			"woeid": "12521178",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3267",
			"elev": "189",
			"icao": "KOKH",
			"direct_flights": "4",
			"carriers": "1"
	},
	{
			"code": "OGG",
			"lat": "20.8926",
			"lon": "-156.441",
			"name": "Kahului Airport",
			"city": "Kahului",
			"state": "Hawaii",
			"country": "United States",
			"woeid": "12520412",
			"tz": "Pacific/Honolulu",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7000",
			"elev": "53",
			"icao": "PHOG",
			"direct_flights": "20",
			"carriers": "19"
	},
	{
			"code": "OGS",
			"lat": "44.6782",
			"lon": "-75.4765",
			"name": "Ogdensburg International Airport",
			"city": "Ogdensburg",
			"state": "New York",
			"country": "United States",
			"woeid": "12521199",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5201",
			"elev": "297",
			"icao": "KOGS",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "OKC",
			"lat": "35.3981",
			"lon": "-97.5974",
			"name": "Will Rogers World Airport",
			"city": "Oklahoma City",
			"state": "Oklahoma",
			"country": "United States",
			"woeid": "12522444",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9802",
			"elev": "1295",
			"icao": "KOKC",
			"direct_flights": "29",
			"carriers": "28"
	},
	{
			"code": "OLF",
			"lat": "48.0964",
			"lon": "-105.575",
			"name": "L. M. Clayton Airport",
			"city": "Wolf Point",
			"state": "Montana",
			"country": "United States",
			"woeid": "29387871",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5089",
			"elev": "1986",
			"icao": "KOLF",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "OLH",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Old Harbor",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "15",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "OMA",
			"lat": "41.3",
			"lon": "-95.8998",
			"name": "Eppley Airfield",
			"city": "Omaha",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12519653",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8500",
			"elev": "983",
			"icao": "KOMA",
			"direct_flights": "24",
			"carriers": "32"
	},
	{
			"code": "OME",
			"lat": "64.5125",
			"lon": "-165.445",
			"name": "Nome Airport",
			"city": "Nome",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521145",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6001",
			"elev": "36",
			"icao": "PAOM",
			"direct_flights": "16",
			"carriers": "8"
	},
	{
			"code": "ONL",
			"lat": "42.4655",
			"lon": "-98.6866",
			"name": "The Oneill Municipal Airport",
			"city": "O'neill",
			"state": "Nebraska",
			"country": "United States",
			"woeid": "12522114",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4400",
			"elev": "2030",
			"icao": "KONL",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "ONT",
			"lat": "34.062",
			"lon": "-117.594",
			"name": "Ontario International Airport",
			"city": "Ontario",
			"state": "California",
			"country": "United States",
			"woeid": "12521228",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12198",
			"elev": "944",
			"icao": "KONT",
			"direct_flights": "29",
			"carriers": "17"
	},
	{
			"code": "OOK",
			"lat": "60.5334",
			"lon": "-165.114",
			"name": "Toksook Bay",
			"city": "Toksook Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2506880",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PAOO",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "OPF",
			"lat": "25.9023",
			"lon": "-80.2677",
			"name": "Opa Locka Airport",
			"city": "Opa-Locka",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521232",
			"tz": "America/New_York",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "8002",
			"elev": "9",
			"icao": "KOPF",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ORD",
			"lat": "41.9796",
			"lon": "-87.8825",
			"name": "Chicago O'Hare International Airport",
			"city": "Chicago",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12521200",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.flychicago.com/ohare/home.asp",
			"runway_length": "13000",
			"elev": "668",
			"icao": "KORD",
			"direct_flights": "222",
			"carriers": "85"
	},
	{
			"code": "ORF",
			"lat": "36.8977",
			"lon": "-76.2154",
			"name": "Norfolk International Airport",
			"city": "Norfolk",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12521146",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "27",
			"icao": "KORF",
			"direct_flights": "28",
			"carriers": "27"
	},
	{
			"code": "ORH",
			"lat": "42.2699",
			"lon": "-71.8706",
			"name": "Worcester Municipal Airport",
			"city": "Worcester",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12522514",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6999",
			"elev": "1008",
			"icao": "KORH",
			"direct_flights": "0",
			"carriers": "0"
	},
	{
			"code": "ORI",
			"lat": "-7.6833",
			"lon": "-39.3667",
			"name": "",
			"city": "Port Lions",
			"state": "Alaska",
			"country": "United States",
			"woeid": "23510508",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "52",
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "ORV",
			"lat": "66.8333",
			"lon": "-161.033",
			"name": "Curtis Memorial",
			"city": "Noorvik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799802",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3200",
			"elev": "63",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "OTH",
			"lat": "43.4141",
			"lon": "-124.244",
			"name": "North Bend Municipal Airport",
			"city": "North Bend",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12521150",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5045",
			"elev": "14",
			"icao": "KOTH",
			"direct_flights": "2",
			"carriers": "5"
	},
	{
			"code": "OTZ",
			"lat": "66.8893",
			"lon": "-162.61",
			"name": "Ralph Wien Memorial Airport",
			"city": "Kotzebue",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521522",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5900",
			"elev": "11",
			"icao": "PAOT",
			"direct_flights": "13",
			"carriers": "8"
	},
	{
			"code": "OVS",
			"lat": "43.1537",
			"lon": "-90.6764",
			"name": "Boscobel Airport",
			"city": "Boscobel",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12518898",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KOVS",
			"direct_flights": "7",
			"carriers": "3"
	},
	{
			"code": "OXR",
			"lat": "34.1984",
			"lon": "-119.206",
			"name": "Oxnard Airport",
			"city": "Oxnard",
			"state": "California",
			"country": "United States",
			"woeid": "12521271",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5950",
			"elev": "43",
			"icao": "KOXR",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "PAH",
			"lat": "37.0612",
			"lon": "-88.7672",
			"name": "Barkley Regional Airport",
			"city": "West Paducah",
			"state": "Kentucky",
			"country": "United States",
			"woeid": "12518741",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6499",
			"elev": "410",
			"icao": "KPAH",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "PBG",
			"lat": "44.6508",
			"lon": "-73.4683",
			"name": "Plattsburgh Air Force Base",
			"city": "Plattsburgh",
			"state": "New York",
			"country": "United States",
			"woeid": "12521414",
			"tz": "America/New_York",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KPBG",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "PBI",
			"lat": "26.6909",
			"lon": "-80.0889",
			"name": "Palm Beach International Airport",
			"city": "West Palm Beach",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521288",
			"tz": "America/New_York",
			"phone": "(561) 471-7420",
			"type": "Airports",
			"email": "",
			"url": "http://www.pbia.org",
			"runway_length": "7989",
			"elev": "19",
			"icao": "KPBI",
			"direct_flights": "31",
			"carriers": "24"
	},
	{
			"code": "PCE",
			"lat": "57.093",
			"lon": "-157.258",
			"name": "Painter Creek",
			"city": "Painter Creek",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799701",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PDB",
			"lat": "59.7868",
			"lon": "-154.105",
			"name": "Pedro Bay",
			"city": "Pedro Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2469932",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1800",
			"elev": "45",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PDT",
			"lat": "45.6893",
			"lon": "-118.839",
			"name": "Eastern Oregon Regional Airport",
			"city": "Pendleton",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12521330",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6301",
			"elev": "1494",
			"icao": "KPDT",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "PDX",
			"lat": "45.5867",
			"lon": "-122.587",
			"name": "Portland International Airport",
			"city": "Portland",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12521453",
			"tz": "America/Los_Angeles",
			"phone": "(+1) 877 739 4636",
			"type": "Airports",
			"email": "",
			"url": "http://www.flypdx.com/",
			"runway_length": "11011",
			"elev": "22",
			"icao": "KPDX",
			"direct_flights": "74",
			"carriers": "43"
	},
	{
			"code": "PEC",
			"lat": "57.95",
			"lon": "-136.233",
			"name": "Pelican Sea Plane Base",
			"city": "Pelican",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2470028",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PFN",
			"lat": "30.2071",
			"lon": "-85.6829",
			"name": "Panama City Bay County Airport",
			"city": "Panama City",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521294",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6314",
			"elev": "21",
			"icao": "KPFN",
			"direct_flights": "4",
			"carriers": "9"
	},
	{
			"code": "PGA",
			"lat": "36.9243",
			"lon": "-111.451",
			"name": "Page Municipal Airport",
			"city": "Page",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12521277",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5499",
			"elev": "4310",
			"icao": "KPGA",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "PGM",
			"lat": "59.35",
			"lon": "-151.833",
			"name": "Port Graham",
			"city": "Port Graham",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799662",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2245",
			"elev": "93",
			"icao": "",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "PGV",
			"lat": "35.6336",
			"lon": "-77.3808",
			"name": "Pitt Greenville Airport",
			"city": "Greenville",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12521400",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "25",
			"icao": "KPGV",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "PHF",
			"lat": "37.1306",
			"lon": "-76.5026",
			"name": "Newport News-Williamsburg International Airport",
			"city": "Newport News",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12521311",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8003",
			"elev": "43",
			"icao": "KPHF",
			"direct_flights": "7",
			"carriers": "6"
	},
	{
			"code": "PHL",
			"lat": "39.8768",
			"lon": "-75.2419",
			"name": "Philadelphia International Airport",
			"city": "Philadelphia",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12521360",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.phl.org",
			"runway_length": "10500",
			"elev": "21",
			"icao": "KPHL",
			"direct_flights": "133",
			"carriers": "51"
	},
	{
			"code": "PHO",
			"lat": "68.3494",
			"lon": "-166.797",
			"name": "Point Hope Airport",
			"city": "Point Hope",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521425",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4000",
			"elev": "14",
			"icao": "PAPO",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "PHX",
			"lat": "33.4376",
			"lon": "-112.03",
			"name": "Sky Harbor International Airport",
			"city": "Phoenix",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12521872",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://phoenix.gov/Ahttp://phoenix.gov/aviation",
			"runway_length": "11001",
			"elev": "1132",
			"icao": "KPHX",
			"direct_flights": "108",
			"carriers": "51"
	},
	{
			"code": "PIA",
			"lat": "40.6663",
			"lon": "-89.6909",
			"name": "Greater Peoria Regional Airport",
			"city": "Peoria",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12519982",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8000",
			"elev": "660",
			"icao": "KPIA",
			"direct_flights": "9",
			"carriers": "14"
	},
	{
			"code": "PIB",
			"lat": "31.4671",
			"lon": "-89.3333",
			"name": "Pine Belt Regional Airport",
			"city": "Moselle",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12521381",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6501",
			"elev": "298",
			"icao": "KPIB",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "PIE",
			"lat": "27.9065",
			"lon": "-82.6924",
			"name": "St. Petersburg-Clearwater International Airport",
			"city": "Clearwater",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521978",
			"tz": "America/New_York",
			"phone": "+1 (1)727 535-7600",
			"type": "Airports",
			"email": "",
			"url": "http://www.stpete-clwairport.com",
			"runway_length": "8800",
			"elev": "10",
			"icao": "KPIE",
			"direct_flights": "8",
			"carriers": "3"
	},
	{
			"code": "PIH",
			"lat": "42.9056",
			"lon": "-112.588",
			"name": "Pocatello Municipal Airport",
			"city": "Pocatello",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12521423",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9056",
			"elev": "4449",
			"icao": "KPIH",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PIP",
			"lat": "57.5631",
			"lon": "-157.558",
			"name": "Pilot Point Airport",
			"city": "Pilot Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523201",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3470",
			"elev": "75",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "PIR",
			"lat": "44.3801",
			"lon": "-100.293",
			"name": "Pierre Municipal Airport",
			"city": "Pierre",
			"state": "South Dakota",
			"country": "United States",
			"woeid": "12521375",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6891",
			"elev": "1742",
			"icao": "KPIR",
			"direct_flights": "7",
			"carriers": "7"
	},
	{
			"code": "PIT",
			"lat": "40.4914",
			"lon": "-80.2328",
			"name": "Pittsburgh International Airport",
			"city": "Coraopolis",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12519983",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1204",
			"icao": "KPIT",
			"direct_flights": "45",
			"carriers": "50"
	},
	{
			"code": "PIZ",
			"lat": "69.7333",
			"lon": "-163.017",
			"name": "Dew Station",
			"city": "Point Lay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2474589",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3519",
			"elev": "20",
			"icao": "PPIZ",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "PKA",
			"lat": "60.7049",
			"lon": "-161.766",
			"name": "Alaska",
			"city": "Napaskiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2411",
			"elev": "24",
			"icao": "",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "PKB",
			"lat": "39.3462",
			"lon": "-81.4345",
			"name": "Wood County Airport-Gill Robb Wilson Field",
			"city": "Williamstown",
			"state": "West Virginia",
			"country": "United States",
			"woeid": "12522506",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6781",
			"elev": "858",
			"icao": "KPKB",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PLN",
			"lat": "45.571",
			"lon": "-84.7857",
			"name": "Pellston Regional Airport",
			"city": "Pellston",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12521327",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6512",
			"elev": "720",
			"icao": "KPLN",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "PMD",
			"lat": "34.6294",
			"lon": "-118.084",
			"name": "Air Force Plant Nr 42 Palmdale",
			"city": "Palmdale",
			"state": "California",
			"country": "United States",
			"woeid": "12521290",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "12002",
			"elev": "2542",
			"icao": "KPMD",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PML",
			"lat": "55.9833",
			"lon": "-160.533",
			"name": "",
			"city": "Port Moller",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2475435",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "3500",
			"elev": "27",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "PNS",
			"lat": "30.4761",
			"lon": "-87.1941",
			"name": "Pensacola Regional Airport",
			"city": "Pensacola",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521335",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7002",
			"elev": "121",
			"icao": "KPNS",
			"direct_flights": "11",
			"carriers": "15"
	},
	{
			"code": "PPG",
			"lat": "-14.3242",
			"lon": "-170.706",
			"name": "Pago Pago International Airport",
			"city": "Pago Pago",
			"state": "American Samoa",
			"country": "United States",
			"woeid": "12523054",
			"tz": "Pacific/Pago_Pago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9000",
			"elev": "30",
			"icao": "NSTU",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "PPV",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Port Protection",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PQI",
			"lat": "46.6921",
			"lon": "-68.0447",
			"name": "Northern Maine Regional Airport",
			"city": "Presque Isle",
			"state": "Maine",
			"country": "United States",
			"woeid": "12521164",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7440",
			"elev": "534",
			"icao": "KPQI",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PQS",
			"lat": "61.9362",
			"lon": "-162.882",
			"name": "Pilot Station",
			"city": "Pilot Station",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2471844",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2982",
			"elev": "275",
			"icao": "",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "PRC",
			"lat": "34.6492",
			"lon": "-112.428",
			"name": "Ernest A Love Field Airport",
			"city": "Prescott",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12519656",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7616",
			"elev": "5042",
			"icao": "KPRC",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "PSC",
			"lat": "46.2592",
			"lon": "-119.117",
			"name": "Tri Cities Airport",
			"city": "Pasco",
			"state": "Washington",
			"country": "United States",
			"woeid": "12522188",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7700",
			"elev": "407",
			"icao": "KPSC",
			"direct_flights": "7",
			"carriers": "12"
	},
	{
			"code": "PSE",
			"lat": "18.0116",
			"lon": "-66.5664",
			"name": "Mercedita Airport",
			"city": "Coto Laurel",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "12515663",
			"tz": "America/Puerto_Rico",
			"phone": "787 557 7753",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5529",
			"elev": "27",
			"icao": "TJPS",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "PSG",
			"lat": "56.8067",
			"lon": "-132.933",
			"name": "Petersburg James A Johnson Airport",
			"city": "Petersburg",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521355",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6004",
			"elev": "107",
			"icao": "PAPG",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "PSP",
			"lat": "33.8227",
			"lon": "-116.509",
			"name": "Palm Springs International Airport",
			"city": "Palm Springs",
			"state": "California",
			"country": "United States",
			"woeid": "12521289",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8500",
			"elev": "462",
			"icao": "KPSP",
			"direct_flights": "17",
			"carriers": "16"
	},
	{
			"code": "PTA",
			"lat": "60.3956",
			"lon": "-154.494",
			"name": "Port Alsworth",
			"city": "Port Alsworth",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2475311",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "280",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PTH",
			"lat": "56.9667",
			"lon": "-158.633",
			"name": "Port Heiden Airport",
			"city": "Port Heiden",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2475388",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6240",
			"elev": "86",
			"icao": "PAPH",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "PTU",
			"lat": "58.9216",
			"lon": "-161.727",
			"name": "Platinum",
			"city": "Platinum",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2473568",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3800",
			"elev": "9",
			"icao": "PAPM",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "PUB",
			"lat": "38.2836",
			"lon": "-104.496",
			"name": "Pueblo Memorial Airport",
			"city": "Pueblo",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12521494",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10496",
			"elev": "4726",
			"icao": "KPUB",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "PUW",
			"lat": "46.743",
			"lon": "-117.119",
			"name": "Pullman-Moscow Regional Airport",
			"city": "Pullman",
			"state": "Washington",
			"country": "United States",
			"woeid": "12521496",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6731",
			"elev": "2551",
			"icao": "KPUW",
			"direct_flights": "3",
			"carriers": "5"
	},
	{
			"code": "PVC",
			"lat": "42.0771",
			"lon": "-70.2169",
			"name": "Provincetown Municipal Airport",
			"city": "Provincetown",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12521490",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3498",
			"elev": "8",
			"icao": "KPVC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "PVD",
			"lat": "41.723",
			"lon": "-71.4399",
			"name": "Theodore Francis Green State Airport",
			"city": "Warwick",
			"state": "Rhode Island",
			"country": "United States",
			"woeid": "12522119",
			"tz": "America/New_York",
			"phone": "(401) 737-8222",
			"type": "Airports",
			"email": "",
			"url": "http://www.pvdairport.com/",
			"runway_length": "7166",
			"elev": "56",
			"icao": "KPVD",
			"direct_flights": "25",
			"carriers": "24"
	},
	{
			"code": "PWK",
			"lat": "42.1162",
			"lon": "-87.8987",
			"name": "Pal Waukee Airport",
			"city": "Wheeling",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12521282",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "647",
			"icao": "KPWK",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "PWM",
			"lat": "43.6475",
			"lon": "-70.3103",
			"name": "Jetport International Airport",
			"city": "Portland",
			"state": "Maine",
			"country": "United States",
			"woeid": "12520368",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6800",
			"elev": "74",
			"icao": "KPWM",
			"direct_flights": "17",
			"carriers": "18"
	},
	{
			"code": "QUL",
			"lat": "36.5922",
			"lon": "-90.2465",
			"name": "",
			"city": "Qulin",
			"state": "Missouri",
			"country": "United States",
			"woeid": "2477964",
			"tz": "America/Indiana/Tell_City",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "RAP",
			"lat": "44.037",
			"lon": "-103.06",
			"name": "Rapid City Regional Airport",
			"city": "Rapid City",
			"state": "South Dakota",
			"country": "United States",
			"woeid": "12521530",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8701",
			"elev": "3202",
			"icao": "KRAP",
			"direct_flights": "9",
			"carriers": "11"
	},
	{
			"code": "RBH",
			"lat": "64.7381",
			"lon": "-155.489",
			"name": "Brooks Lodge",
			"city": "Brooks Lodge",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "RBX",
			"lat": "46.4717",
			"lon": "-108.55",
			"name": "Roundup Airport",
			"city": "Roundup",
			"state": "Montana",
			"country": "United States",
			"woeid": "12521664",
			"tz": "America/Boise",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "RBY",
			"lat": "64.7381",
			"lon": "-155.489",
			"name": "Ruby Airport",
			"city": "Ruby",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2485593",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2900",
			"elev": "635",
			"icao": "PARY",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "RCE",
			"lat": "48.6126",
			"lon": "-123.14",
			"name": "Roche Harbor Airport",
			"city": "Friday Harbor",
			"state": "Washington",
			"country": "United States",
			"woeid": "12521623",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4000",
			"elev": "100",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "RCP",
			"lat": "51.5257",
			"lon": "-0.14499",
			"name": "",
			"city": "Cinder River",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "RDB",
			"lat": "67.75",
			"lon": "-163.667",
			"name": "Red Dog",
			"city": "Red Dog",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799789",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PADG",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "RDD",
			"lat": "40.5056",
			"lon": "-122.302",
			"name": "Redding Municipal Airport",
			"city": "Redding",
			"state": "California",
			"country": "United States",
			"woeid": "12521548",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.ci.redding.ca.us/adminsv/airports/index.htm",
			"runway_length": "7003",
			"elev": "502",
			"icao": "KRDD",
			"direct_flights": "4",
			"carriers": "5"
	},
	{
			"code": "RDM",
			"lat": "44.2533",
			"lon": "-121.162",
			"name": "Roberts Field Airport",
			"city": "Redmond",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12521617",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7040",
			"elev": "3077",
			"icao": "KRDM",
			"direct_flights": "6",
			"carriers": "11"
	},
	{
			"code": "RDU",
			"lat": "35.8729",
			"lon": "-78.7923",
			"name": "Durham International Airport",
			"city": "Raleigh/Durham",
			"state": "North Carolina",
			"country": "United States",
			"woeid": "12519551",
			"tz": "America/New_York",
			"phone": "919 840 2123",
			"type": "Airports",
			"email": "",
			"url": "http://rdu.com",
			"runway_length": "10000",
			"elev": "437",
			"icao": "KRDU",
			"direct_flights": "47",
			"carriers": "44"
	},
	{
			"code": "RDV",
			"lat": "61.7645",
			"lon": "-157.312",
			"name": "Red Devil",
			"city": "Red Devil",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2479276",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5200",
			"elev": "210",
			"icao": "",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "RFD",
			"lat": "42.2035",
			"lon": "-89.0955",
			"name": "Greater Rockford Airport",
			"city": "Rockford",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12519986",
			"tz": "America/Chicago",
			"phone": "815-969-4000",
			"type": "Airports",
			"email": "",
			"url": "http://www.flyrfd.com",
			"runway_length": "10",
			"elev": "736",
			"icao": "KRFD",
			"direct_flights": "7",
			"carriers": "4"
	},
	{
			"code": "RHI",
			"lat": "45.626",
			"lon": "-89.4626",
			"name": "Rhinelander-Oneida County Airport",
			"city": "Rhinelander",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12521570",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6800",
			"elev": "1624",
			"icao": "KRHI",
			"direct_flights": "4",
			"carriers": "6"
	},
	{
			"code": "RIC",
			"lat": "37.5108",
			"lon": "-77.3332",
			"name": "Richmond International Airport",
			"city": "Richmond",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12518996",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8999",
			"elev": "168",
			"icao": "KRIC",
			"direct_flights": "26",
			"carriers": "34"
	},
	{
			"code": "RIV",
			"lat": "33.8806",
			"lon": "-117.259",
			"name": "March Air Force Base",
			"city": "Alessandro",
			"state": "California",
			"country": "United States",
			"woeid": "12520791",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KRIV",
			"direct_flights": "7",
			"carriers": "1"
	},
	{
			"code": "RIW",
			"lat": "43.0611",
			"lon": "-108.458",
			"name": "Riverton Regional Airport",
			"city": "Riverton",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12521603",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8200",
			"elev": "5525",
			"icao": "KRIW",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "RKD",
			"lat": "44.0612",
			"lon": "-69.0943",
			"name": "Knox County Regional Airport",
			"city": "Owls Head",
			"state": "Maine",
			"country": "United States",
			"woeid": "12520489",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4502",
			"elev": "55",
			"icao": "KRKD",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "RKS",
			"lat": "41.5988",
			"lon": "-109.072",
			"name": "Rock Springs-Sweetwater County Airport",
			"city": "Rock Springs",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12521630",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "6760",
			"icao": "KRKS",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "RMP",
			"lat": "65.5063",
			"lon": "-150.169",
			"name": "Rampart",
			"city": "Rampart",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2478448",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "275",
			"icao": "",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "RNO",
			"lat": "39.5064",
			"lon": "-119.776",
			"name": "Reno-Tahoe International Airport",
			"city": "Reno",
			"state": "Nevada",
			"country": "United States",
			"woeid": "12519047",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.renoairport.com",
			"runway_length": null,
			"elev": null,
			"icao": "KRNO",
			"direct_flights": "21",
			"carriers": "22"
	},
	{
			"code": "ROA",
			"lat": "37.3203",
			"lon": "-79.9688",
			"name": "Roanoke Regional Airport-Woodrum Field",
			"city": "Roanoke",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12521606",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6800",
			"elev": "1175",
			"icao": "KROA",
			"direct_flights": "13",
			"carriers": "18"
	},
	{
			"code": "ROC",
			"lat": "43.1309",
			"lon": "-77.6697",
			"name": "Greater Rochester International Airport",
			"city": "Rochester",
			"state": "New York",
			"country": "United States",
			"woeid": "12519985",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8001",
			"elev": "559",
			"icao": "KROC",
			"direct_flights": "22",
			"carriers": "31"
	},
	{
			"code": "ROP",
			"lat": "14.1667",
			"lon": "145.25",
			"name": "Rota International Airport",
			"city": "Rota",
			"state": "Northern Mariana Islands",
			"country": "United States",
			"woeid": "12523212",
			"tz": "Pacific/Saipan",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6000",
			"elev": "606",
			"icao": "PGRO",
			"direct_flights": "4",
			"carriers": "2"
	},
	{
			"code": "ROW",
			"lat": "33.3071",
			"lon": "-104.519",
			"name": "Roswell Industrial Air Center",
			"city": "Roswell",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12521662",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "13000",
			"elev": "3669",
			"icao": "KROW",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "RSH",
			"lat": "61.7833",
			"lon": "-161.333",
			"name": "Russian",
			"city": "Russian Mission",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799709",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "3000",
			"elev": "70",
			"icao": "PARS",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "RSJ",
			"lat": "48.6339",
			"lon": "-122.81",
			"name": "Rosario Seaplane Base",
			"city": "Olga",
			"state": "Washington",
			"country": "United States",
			"woeid": "12524597",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2850",
			"elev": "2170",
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "RST",
			"lat": "43.9101",
			"lon": "-92.4884",
			"name": "Rochester International Airport",
			"city": "Rochester",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12521625",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7533",
			"elev": "1317",
			"icao": "KRST",
			"direct_flights": "6",
			"carriers": "9"
	},
	{
			"code": "RSW",
			"lat": "26.5228",
			"lon": "-81.7531",
			"name": "Southwest Florida International Airport",
			"city": "Fort Myers",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521921",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8400",
			"elev": "31",
			"icao": "KRSW",
			"direct_flights": "39",
			"carriers": "25"
	},
	{
			"code": "RUT",
			"lat": "43.5291",
			"lon": "-72.945",
			"name": "Rutland State Airport",
			"city": "North Clarendon",
			"state": "Vermont",
			"country": "United States",
			"woeid": "12521687",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "787",
			"icao": "KRUT",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SAN",
			"lat": "32.7299",
			"lon": "-117.195",
			"name": "San Diego International Airport",
			"city": "San Diego",
			"state": "California",
			"country": "United States",
			"woeid": "12520660",
			"tz": "America/Los_Angeles",
			"phone": "(619) 231 2100",
			"type": "Airports",
			"email": "",
			"url": "http://www.san.org/",
			"runway_length": "9400",
			"elev": "15",
			"icao": "KSAN",
			"direct_flights": "51",
			"carriers": "57"
	},
	{
			"code": "SAT",
			"lat": "29.5252",
			"lon": "-98.4729",
			"name": "San Antonio International Airport",
			"city": "San Antonio",
			"state": "Texas",
			"country": "United States",
			"woeid": "12521716",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8502",
			"elev": "809",
			"icao": "KSAT",
			"direct_flights": "44",
			"carriers": "34"
	},
	{
			"code": "SAV",
			"lat": "32.1338",
			"lon": "-81.2133",
			"name": "Savannah International Airport",
			"city": "Savannah",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12521756",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9003",
			"elev": "51",
			"icao": "KSAV",
			"direct_flights": "18",
			"carriers": "21"
	},
	{
			"code": "SBA",
			"lat": "34.4255",
			"lon": "-119.835",
			"name": "Santa Barbara Municipal Airport",
			"city": "Goleta",
			"state": "California",
			"country": "United States",
			"woeid": "12521741",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6049",
			"elev": "10",
			"icao": "KSBA",
			"direct_flights": "12",
			"carriers": "17"
	},
	{
			"code": "SBN",
			"lat": "41.7006",
			"lon": "-86.311",
			"name": "South Bend Regional Airport",
			"city": "South Bend",
			"state": "Indiana",
			"country": "United States",
			"woeid": "12520929",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7099",
			"elev": "790",
			"icao": "KSBN",
			"direct_flights": "16",
			"carriers": "14"
	},
	{
			"code": "SBP",
			"lat": "35.239",
			"lon": "-120.641",
			"name": "San Luis Obispo County Airport",
			"city": "San Luis Obispo",
			"state": "California",
			"country": "United States",
			"woeid": "12521725",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5300",
			"elev": "212",
			"icao": "KSBP",
			"direct_flights": "3",
			"carriers": "8"
	},
	{
			"code": "SBY",
			"lat": "38.3431",
			"lon": "-75.517",
			"name": "Salisbury-Wicomico County Regional Airport",
			"city": "Salisbury",
			"state": "Maryland",
			"country": "United States",
			"woeid": "12521706",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5500",
			"elev": "52",
			"icao": "KSBY",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "SCC",
			"lat": "70.1975",
			"lon": "-148.458",
			"name": "Deadhorse Airport",
			"city": "Prudhoe Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12519437",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5500",
			"elev": "45",
			"icao": "PASC",
			"direct_flights": "4",
			"carriers": "5"
	},
	{
			"code": "SCE",
			"lat": "40.8515",
			"lon": "-77.851",
			"name": "University Park Airport",
			"city": "State College",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "12522252",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4065",
			"elev": "1228",
			"icao": "KUNV",
			"direct_flights": "4",
			"carriers": "8"
	},
	{
			"code": "SCK",
			"lat": "37.8973",
			"lon": "-121.253",
			"name": "Stockton Metropolitan Airport",
			"city": "Stockton",
			"state": "California",
			"country": "United States",
			"woeid": "12522018",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8650",
			"elev": "30",
			"icao": "KSCK",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SCM",
			"lat": "61.8425",
			"lon": "-165.58",
			"name": "Scammon Bay",
			"city": "Scammon Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2489516",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "2777",
			"elev": "22",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "SDF",
			"lat": "38.1865",
			"lon": "-85.7462",
			"name": "Louisville International Airport",
			"city": "Louisville",
			"state": "Kentucky",
			"country": "United States",
			"woeid": "12521983",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10000",
			"elev": "496",
			"icao": "KSDF",
			"direct_flights": "32",
			"carriers": "26"
	},
	{
			"code": "SDP",
			"lat": "55.3184",
			"lon": "-160.523",
			"name": "Sand Point Airport",
			"city": "Sand Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29387742",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3800",
			"elev": "22",
			"icao": "PASD",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "SDY",
			"lat": "47.7113",
			"lon": "-104.184",
			"name": "Sidney Richland Municipal Airport",
			"city": "Sidney",
			"state": "Montana",
			"country": "United States",
			"woeid": "12521850",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5705",
			"elev": "1984",
			"icao": "KSDY",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "SEA",
			"lat": "47.4405",
			"lon": "-122.296",
			"name": "Tacoma International Airport",
			"city": "Seattle",
			"state": "Washington",
			"country": "United States",
			"woeid": "12522066",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.portseattle.org/seatac/",
			"runway_length": "11900",
			"elev": "429",
			"icao": "KSEA",
			"direct_flights": "109",
			"carriers": "59"
	},
	{
			"code": "SFB",
			"lat": "28.773",
			"lon": "-81.2403",
			"name": "Orlando Sanford International Airport",
			"city": "Sanford",
			"state": "Florida",
			"country": "United States",
			"woeid": "23418431",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.orlandosanfordairport.com",
			"runway_length": "9600",
			"elev": "55",
			"icao": "KSFB",
			"direct_flights": "18",
			"carriers": "3"
	},
	{
			"code": "SFO",
			"lat": "37.6148",
			"lon": "-122.392",
			"name": "San Francisco International Airport",
			"city": "San Francisco",
			"state": "California",
			"country": "United States",
			"woeid": "12521721",
			"tz": "America/Los_Angeles",
			"phone": "(650) 821-8211",
			"type": "Airports",
			"email": "",
			"url": "http://www.flysfo.com",
			"runway_length": "11870",
			"elev": "12",
			"icao": "KSFO",
			"direct_flights": "147",
			"carriers": "76"
	},
	{
			"code": "SGF",
			"lat": "37.243",
			"lon": "-93.3817",
			"name": "Springfield Regional Airport",
			"city": "Springfield",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12521949",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7003",
			"elev": "1267",
			"icao": "KSGF",
			"direct_flights": "15",
			"carriers": "16"
	},
	{
			"code": "SGU",
			"lat": "37.0973",
			"lon": "-113.591",
			"name": "St George Municipal Airport",
			"city": "St. George",
			"state": "Utah",
			"country": "United States",
			"woeid": "12521964",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6100",
			"elev": "2938",
			"icao": "KSGU",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "SGY",
			"lat": "59.4594",
			"lon": "-135.314",
			"name": "Skagway Airport",
			"city": "Skagway",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521869",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3301",
			"elev": "44",
			"icao": "PAGY",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "SHD",
			"lat": "38.2637",
			"lon": "-78.9013",
			"name": "Shenandoah Valley Regional Airport",
			"city": "Weyers Cave",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12521830",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6002",
			"elev": "1201",
			"icao": "KSHD",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "SHG",
			"lat": "66.8801",
			"lon": "-157.067",
			"name": "Shungnak Airport",
			"city": "Shungnak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524646",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2800",
			"elev": "200",
			"icao": "PAHG",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "SHH",
			"lat": "66.2568",
			"lon": "-166.067",
			"name": "Shishmaref",
			"city": "Shishmaref",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2492966",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2000",
			"elev": "8",
			"icao": "PASH",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SHR",
			"lat": "44.7739",
			"lon": "-106.97",
			"name": "Sheridan County Airport",
			"city": "Sheridan",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12521834",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6649",
			"elev": "4021",
			"icao": "KSHR",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SHV",
			"lat": "32.4549",
			"lon": "-93.8285",
			"name": "Shreveport Regional Airport",
			"city": "Shreveport",
			"state": "Louisiana",
			"country": "United States",
			"woeid": "12521845",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8351",
			"elev": "258",
			"icao": "KSHV",
			"direct_flights": "10",
			"carriers": "13"
	},
	{
			"code": "SHX",
			"lat": "62.6333",
			"lon": "-159.583",
			"name": "Shageluk",
			"city": "Shageluk",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799717",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "70",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "SIG",
			"lat": "18.4558",
			"lon": "-66.0981",
			"name": "Isla Grande Airport",
			"city": "San Juan",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "12515661",
			"tz": "America/Puerto_Rico",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5317",
			"elev": "10",
			"icao": "TJIG",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SIT",
			"lat": "57.0535",
			"lon": "-135.366",
			"name": "Sitka Airport",
			"city": "Sitka",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12521866",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6500",
			"elev": "21",
			"icao": "PASI",
			"direct_flights": "3",
			"carriers": "7"
	},
	{
			"code": "SJC",
			"lat": "37.3679",
			"lon": "-121.926",
			"name": "Norman Y Mineta San Jose International Airport",
			"city": "San Jose",
			"state": "California",
			"country": "United States",
			"woeid": "12521722",
			"tz": "America/Los_Angeles",
			"phone": "(408) 501-7600",
			"type": "Airports",
			"email": "",
			"url": "http://www.sjc.org",
			"runway_length": "11000",
			"elev": "56",
			"icao": "KSJC",
			"direct_flights": "34",
			"carriers": "33"
	},
	{
			"code": "SJT",
			"lat": "31.3616",
			"lon": "-100.507",
			"name": "Mathis Field Airport",
			"city": "San Angelo",
			"state": "Texas",
			"country": "United States",
			"woeid": "12520840",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6920",
			"elev": "1916",
			"icao": "KSJT",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "SJU",
			"lat": "18.4367",
			"lon": "-66.0095",
			"name": "Luis Munoz Marin Airport",
			"city": "Carolina",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "23388351",
			"tz": "America/Puerto_Rico",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "10002",
			"elev": "10",
			"icao": "TJSJ",
			"direct_flights": "60",
			"carriers": "37"
	},
	{
			"code": "SKK",
			"lat": "64.3549",
			"lon": "-161.193",
			"name": "Shaktoolik",
			"city": "Shaktoolik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2491522",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2400",
			"elev": "22",
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "SLC",
			"lat": "40.7862",
			"lon": "-111.982",
			"name": "Salt Lake City International Airport",
			"city": "Salt Lake City",
			"state": "Utah",
			"country": "United States",
			"woeid": "12521709",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12003",
			"elev": "4226",
			"icao": "KSLC",
			"direct_flights": "104",
			"carriers": "38"
	},
	{
			"code": "SLE",
			"lat": "44.9104",
			"lon": "-123.008",
			"name": "Mcnary Field Airport",
			"city": "Salem",
			"state": "Oregon",
			"country": "United States",
			"woeid": "12520877",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5811",
			"elev": "210",
			"icao": "KSLE",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SLK",
			"lat": "44.3804",
			"lon": "-74.2038",
			"name": "Adirondack Regional Airport",
			"city": "Saranac Lake",
			"state": "New York",
			"country": "United States",
			"woeid": "12518529",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6573",
			"elev": "1663",
			"icao": "KSLK",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SLN",
			"lat": "38.7786",
			"lon": "-97.6397",
			"name": "Salina Municipal Airport",
			"city": "Salina",
			"state": "Kansas",
			"country": "United States",
			"woeid": "12521703",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "13332",
			"elev": "1272",
			"icao": "KSLN",
			"direct_flights": "5",
			"carriers": "3"
	},
	{
			"code": "SLQ",
			"lat": "61.7",
			"lon": "-157.117",
			"name": "Sleetmute Airport",
			"city": "Sleetmute",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2494667",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "225",
			"icao": "PASL",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SMF",
			"lat": "38.683",
			"lon": "-121.591",
			"name": "Sacramento International Airport",
			"city": "Sacramento",
			"state": "California",
			"country": "United States",
			"woeid": "12521693",
			"tz": "America/Los_Angeles",
			"phone": "916 929 5151",
			"type": "Airports",
			"email": "",
			"url": "http://www.sacairports.org",
			"runway_length": "8600",
			"elev": "23",
			"icao": "KSMF",
			"direct_flights": "37",
			"carriers": "29"
	},
	{
			"code": "SMK",
			"lat": "63.4735",
			"lon": "-162.052",
			"name": "Alaska",
			"city": "St Michael",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2700",
			"elev": "25",
			"icao": "",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "SMN",
			"lat": "45.1148",
			"lon": "-113.888",
			"name": "Lemhi County Airport",
			"city": "Salmon",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12520625",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5150",
			"elev": "4045",
			"icao": "KSMN",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "SMX",
			"lat": "34.8888",
			"lon": "-120.437",
			"name": "Santa Maria Public Airport",
			"city": "Santa Maria",
			"state": "California",
			"country": "United States",
			"woeid": "12521743",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6300",
			"elev": "259",
			"icao": "KSMX",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SNA",
			"lat": "33.6813",
			"lon": "-117.859",
			"name": "John Wayne Airport",
			"city": "Santa Ana",
			"state": "California",
			"country": "United States",
			"woeid": "12520383",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5700",
			"elev": "54",
			"icao": "KSNA",
			"direct_flights": "19",
			"carriers": "21"
	},
	{
			"code": "SNP",
			"lat": "57.1667",
			"lon": "-170.217",
			"name": "Saint Paul Island",
			"city": "Saint Paul Island",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799712",
			"tz": "America/Adak",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5175",
			"elev": "44",
			"icao": "PASN",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SOV",
			"lat": "59.4428",
			"lon": "-151.705",
			"name": "",
			"city": "Seldovia",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2490645",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "29",
			"icao": "PASO",
			"direct_flights": "3",
			"carriers": "2"
	},
	{
			"code": "SOW",
			"lat": "34.2595",
			"lon": "-110.005",
			"name": "Show Low Municipal Airport",
			"city": "Show Low",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12521843",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "6010",
			"elev": "6411",
			"icao": "KSOW",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SPB",
			"lat": "18.3409",
			"lon": "-64.9698",
			"name": "St Thomas Seaplane Base",
			"city": "Charlotte Amalie",
			"state": "US Virgin Islands",
			"country": "United States",
			"woeid": "12523060",
			"tz": "America/St_Thomas",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KSPB",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "SPI",
			"lat": "39.8445",
			"lon": "-89.672",
			"name": "Capital Airport",
			"city": "Springfield",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12519058",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7999",
			"elev": "597",
			"icao": "KSPI",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "SPN",
			"lat": "15.1333",
			"lon": "145.717",
			"name": "Saipan International Airport",
			"city": "Saipan",
			"state": "Northern Mariana Islands",
			"country": "United States",
			"woeid": "12523226",
			"tz": "Pacific/Saipan",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8700",
			"elev": "215",
			"icao": "PGSN",
			"direct_flights": "10",
			"carriers": "6"
	},
	{
			"code": "SPS",
			"lat": "33.9862",
			"lon": "-98.4984",
			"name": "Sheppard Air Force Base",
			"city": "Wichita Falls",
			"state": "Texas",
			"country": "United States",
			"woeid": "12521831",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "13100",
			"elev": "1015",
			"icao": "KSPS",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SRQ",
			"lat": "27.3868",
			"lon": "-82.5516",
			"name": "Sarasota Bradenton Airport",
			"city": "Sarasota",
			"state": "Florida",
			"country": "United States",
			"woeid": "12521750",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7003",
			"elev": "28",
			"icao": "KSRQ",
			"direct_flights": "14",
			"carriers": "14"
	},
	{
			"code": "SRV",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Stony River",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2950",
			"elev": "230",
			"icao": "",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "SSB",
			"lat": "17.75",
			"lon": "-64.7",
			"name": "Christiansted Harbor Seaplane Base",
			"city": "Christiansted",
			"state": "US Virgin Islands",
			"country": "United States",
			"woeid": "12523231",
			"tz": "America/St_Thomas",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "1",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "STC",
			"lat": "45.5463",
			"lon": "-94.066",
			"name": "St Cloud Regional Airport",
			"city": "St. Cloud",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12521961",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5200",
			"elev": "1024",
			"icao": "KSTC",
			"direct_flights": "1",
			"carriers": "4"
	},
	{
			"code": "STG",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "St George Island",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Adak",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3050",
			"elev": "90",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "STL",
			"lat": "38.7414",
			"lon": "-90.3647",
			"name": "Lambert St Louis International Airport",
			"city": "St. Louis",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12520553",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11019",
			"elev": "605",
			"icao": "KSTL",
			"direct_flights": "78",
			"carriers": "46"
	},
	{
			"code": "STS",
			"lat": "38.511",
			"lon": "-122.805",
			"name": "Sonoma County Airport",
			"city": "Windsor",
			"state": "California",
			"country": "United States",
			"woeid": "12521904",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5115",
			"elev": "125",
			"icao": "KSTS",
			"direct_flights": "4",
			"carriers": "5"
	},
	{
			"code": "STT",
			"lat": "18.3333",
			"lon": "-64.9667",
			"name": "Cyril E King International Airport",
			"city": "Charlotte Amalie",
			"state": "US Virgin Islands",
			"country": "United States",
			"woeid": "12522972",
			"tz": "America/St_Thomas",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5348",
			"elev": "15",
			"icao": "TIST",
			"direct_flights": "17",
			"carriers": "12"
	},
	{
			"code": "STX",
			"lat": "17.6988",
			"lon": "-64.7977",
			"name": "Henry E Rohlson International Airport",
			"city": "Frederiksted",
			"state": "US Virgin Islands",
			"country": "United States",
			"woeid": "12522971",
			"tz": "America/St_Thomas",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7612",
			"elev": "61",
			"icao": "TISX",
			"direct_flights": "9",
			"carriers": "10"
	},
	{
			"code": "SUN",
			"lat": "43.5065",
			"lon": "-114.301",
			"name": "Friedman Memorial Airport",
			"city": "Hailey",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12519829",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6600",
			"elev": "5313",
			"icao": "KSUN",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "SUX",
			"lat": "42.4012",
			"lon": "-96.3784",
			"name": "Sioux Gateway Airport",
			"city": "Sioux City",
			"state": "Iowa",
			"country": "United States",
			"woeid": "12521862",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8999",
			"elev": "1098",
			"icao": "KSUX",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "SVA",
			"lat": "63.6951",
			"lon": "-170.465",
			"name": "Alaska",
			"city": "Savoonga",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4600",
			"elev": "53",
			"icao": "PASA",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "SVC",
			"lat": "32.6301",
			"lon": "-108.164",
			"name": "Silver City-Grant County Airport",
			"city": "Silver City",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12521856",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6800",
			"elev": "5443",
			"icao": "KSVC",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "SVS",
			"lat": "66.0044",
			"lon": "-149.091",
			"name": "Stevens Village",
			"city": "Stevens Village",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2499756",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2200",
			"elev": "310",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SWF",
			"lat": "41.4869",
			"lon": "-74.0974",
			"name": "Stewart International Airport",
			"city": "New Windsor",
			"state": "New York",
			"country": "United States",
			"woeid": "12522012",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "11818",
			"elev": "491",
			"icao": "KSWF",
			"direct_flights": "9",
			"carriers": "8"
	},
	{
			"code": "SWO",
			"lat": "36.1618",
			"lon": "-97.0751",
			"name": "Stillwater Municipal Airport",
			"city": "Stillwater",
			"state": "Oklahoma",
			"country": "United States",
			"woeid": "12522014",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "5002",
			"elev": "984",
			"icao": "KSWO",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SXP",
			"lat": "62.5333",
			"lon": "-164.833",
			"name": "Sheldon SPB",
			"city": "Sheldon Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2492171",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "80",
			"icao": "",
			"direct_flights": "4",
			"carriers": "2"
	},
	{
			"code": "SYB",
			"lat": "58.1667",
			"lon": "-152.5",
			"name": "Seal Bay Airport",
			"city": "Kodiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524652",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "SYR",
			"lat": "43.1141",
			"lon": "-76.1121",
			"name": "Hancock International Airport",
			"city": "Syracuse",
			"state": "New York",
			"country": "United States",
			"woeid": "12520075",
			"tz": "America/New_York",
			"phone": "(315) 454-4330",
			"type": "Airports",
			"email": "",
			"url": "http://www.syrairport.org",
			"runway_length": "9003",
			"elev": "421",
			"icao": "KSYR",
			"direct_flights": "21",
			"carriers": "26"
	},
	{
			"code": "TAL",
			"lat": "47.7184",
			"lon": "-115.431",
			"name": "Ralph Calhoun",
			"city": "Tanana",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2503916",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PATA",
			"direct_flights": "5",
			"carriers": "3"
	},
	{
			"code": "TBN",
			"lat": "37.7327",
			"lon": "-92.1361",
			"name": "Waynesville Regional Airport At Forney Field",
			"city": "Fort Leonard Wood",
			"state": "Missouri",
			"country": "United States",
			"woeid": "12519767",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6038",
			"elev": "1159",
			"icao": "KTBN",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "TCT",
			"lat": "62.9845",
			"lon": "-156.07",
			"name": "Takotna",
			"city": "Takotna",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2503638",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "TEB",
			"lat": "40.8541",
			"lon": "-74.0662",
			"name": "Teterboro Airport",
			"city": "Teterboro",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "12522105",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTEB",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "TEK",
			"lat": "60.8644",
			"lon": "-146.693",
			"name": "Tatitlek Seaplane Base",
			"city": "Valdez",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12524670",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "TEX",
			"lat": "37.9544",
			"lon": "-107.901",
			"name": "Telluride Regional Airport",
			"city": "Telluride",
			"state": "Colorado",
			"country": "United States",
			"woeid": "12522097",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTEX",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "TGC",
			"lat": "35.9349",
			"lon": "-88.8506",
			"name": "Gibson County Airport",
			"city": "Milan",
			"state": "Tennessee",
			"country": "United States",
			"woeid": "12519895",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTGC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "TKE",
			"lat": "57.7773",
			"lon": "-135.208",
			"name": "Tenakee Springs",
			"city": "Tenakee Springs",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2504726",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "TKJ",
			"lat": "48.1205",
			"lon": "21.4125",
			"name": "",
			"city": "Tok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2506862",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PATJ",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "TLA",
			"lat": "65.2413",
			"lon": "-166.331",
			"name": "Teller",
			"city": "Teller",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2504609",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PATE",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "TLH",
			"lat": "30.3964",
			"lon": "-84.3503",
			"name": "Tallahassee Regional Airport",
			"city": "Tallahassee",
			"state": "Florida",
			"country": "United States",
			"woeid": "12522075",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.talgov.com/citytlh/aviation/",
			"runway_length": "8000",
			"elev": "81",
			"icao": "KTLH",
			"direct_flights": "10",
			"carriers": "10"
	},
	{
			"code": "TLJ",
			"lat": "44.2044",
			"lon": "23.5396",
			"name": "",
			"city": "Tatalina",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PATL",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "TLT",
			"lat": "61.0959",
			"lon": "-160.968",
			"name": "Tuluksak",
			"city": "Tuluksak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2508578",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "TNC",
			"lat": "65.5639",
			"lon": "-167.919",
			"name": "Tin City AFS",
			"city": "Tin City",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2506552",
			"tz": "America/Nome",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PATC",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "TNK",
			"lat": "60.5813",
			"lon": "-165.253",
			"name": "Tununak Airport",
			"city": "Tununak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29388569",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "TOG",
			"lat": "37.1198",
			"lon": "-89.8786",
			"name": "Togiak Village",
			"city": "Togiak Village",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2512308",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "PATG",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "TOL",
			"lat": "41.5923",
			"lon": "-83.8072",
			"name": "Toledo Express Airport",
			"city": "Swanton",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12522152",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTOL",
			"direct_flights": "56",
			"carriers": "17"
	},
	{
			"code": "TPA",
			"lat": "27.9744",
			"lon": "-82.5356",
			"name": "Tampa International Airport",
			"city": "Tampa",
			"state": "Florida",
			"country": "United States",
			"woeid": "12522077",
			"tz": "America/New_York",
			"phone": "1(813)870-8770",
			"type": "Airports",
			"email": "",
			"url": "http://www.tampaairport.com/",
			"runway_length": "11002",
			"elev": "26",
			"icao": "KTPA",
			"direct_flights": "74",
			"carriers": "48"
	},
	{
			"code": "TRI",
			"lat": "36.4805",
			"lon": "-82.4087",
			"name": "Tri-Cities Regional Airport",
			"city": "Blountville",
			"state": "Tennessee",
			"country": "United States",
			"woeid": "12522192",
			"tz": "America/New_York",
			"phone": "423-325-6000",
			"type": "Airports",
			"email": "",
			"url": "http://www.triflight.com/",
			"runway_length": null,
			"elev": null,
			"icao": "KTRI",
			"direct_flights": "9",
			"carriers": "12"
	},
	{
			"code": "TSS",
			"lat": "40.7474",
			"lon": "-73.9912",
			"name": "East 34th Street Heliport",
			"city": "New York",
			"state": "New York",
			"country": "United States",
			"woeid": "12523248",
			"tz": "America/New_York",
			"phone": "",
			"type": "Heliport2",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "TUL",
			"lat": "36.1877",
			"lon": "-95.8892",
			"name": "Tulsa International Airport",
			"city": "Tulsa",
			"state": "Oklahoma",
			"country": "United States",
			"woeid": "12522219",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTUL",
			"direct_flights": "26",
			"carriers": "21"
	},
	{
			"code": "TUP",
			"lat": "34.2662",
			"lon": "-88.766",
			"name": "Tupelo Municipal-C D Lemons Airport",
			"city": "Tupelo",
			"state": "Mississippi",
			"country": "United States",
			"woeid": "12522222",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTUP",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "TUS",
			"lat": "32.1204",
			"lon": "-110.936",
			"name": "Tucson International Airport",
			"city": "Tucson",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12522214",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": "2643",
			"icao": "KTUS",
			"direct_flights": "25",
			"carriers": "26"
	},
	{
			"code": "TVC",
			"lat": "44.7365",
			"lon": "-85.5796",
			"name": "Cherry Capital Airport",
			"city": "Traverse City",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12519167",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "http://www.tvcairport.com/",
			"runway_length": "6501",
			"elev": "624",
			"icao": "KTVC",
			"direct_flights": "6",
			"carriers": "9"
	},
	{
			"code": "TVF",
			"lat": "48.0655",
			"lon": "-96.1791",
			"name": "Thief River Falls Regional Airport",
			"city": "Thief River Falls",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12522121",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTVF",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "TWA",
			"lat": "36.8259",
			"lon": "-83.3212",
			"name": "Twin Hills",
			"city": "Twin Hills",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2509121",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "TWF",
			"lat": "42.4838",
			"lon": "-114.485",
			"name": "Twin Falls-Sun Valley Regional Airport",
			"city": "Twin Falls",
			"state": "Idaho",
			"country": "United States",
			"woeid": "12522233",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTWF",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "TXK",
			"lat": "33.457",
			"lon": "-93.9943",
			"name": "Texarkana Regional Airport",
			"city": "Texarkana",
			"state": "Arkansas",
			"country": "United States",
			"woeid": "12522107",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KTXK",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "TYR",
			"lat": "32.3506",
			"lon": "-95.4118",
			"name": "Tyler Pounds Field Airport",
			"city": "Tyler",
			"state": "Texas",
			"country": "United States",
			"woeid": "12522238",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7200",
			"elev": "544",
			"icao": "KTYR",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "TYS",
			"lat": "35.8064",
			"lon": "-83.9889",
			"name": "Mcghee Tyson Airport",
			"city": "Knoxville",
			"state": "Tennessee",
			"country": "United States",
			"woeid": "12520857",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9008",
			"elev": "981",
			"icao": "KTYS",
			"direct_flights": "25",
			"carriers": "25"
	},
	{
			"code": "UGB",
			"lat": "57.4253",
			"lon": "-157.74",
			"name": "Ugashik Bay Airport",
			"city": "Pilot Point",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12523252",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1245",
			"elev": "25",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "UGI",
			"lat": "57.8838",
			"lon": "-153.369",
			"name": "Uganik Airport",
			"city": "Kodiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522240",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "UIN",
			"lat": "39.9348",
			"lon": "-91.196",
			"name": "Quincy Municipal Airport-Baldwin Field",
			"city": "Quincy",
			"state": "Illinois",
			"country": "United States",
			"woeid": "12521511",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7097",
			"elev": "769",
			"icao": "KUIN",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "UNK",
			"lat": "63.8833",
			"lon": "-160.783",
			"name": "Unalakleet",
			"city": "Unalakleet",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799735",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6004",
			"elev": "21",
			"icao": "PAUN",
			"direct_flights": "4",
			"carriers": "8"
	},
	{
			"code": "VAK",
			"lat": "61.5338",
			"lon": "-165.584",
			"name": "Chevak Airport",
			"city": "Hooper Bay",
			"state": "Alaska",
			"country": "United States",
			"woeid": "29388570",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2689",
			"elev": "75",
			"icao": "PAVA",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "VBM",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Blue Mountain",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "VCT",
			"lat": "28.8449",
			"lon": "-96.9201",
			"name": "Victoria Regional Airport",
			"city": "Victoria",
			"state": "Texas",
			"country": "United States",
			"woeid": "12522283",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "9102",
			"elev": "115",
			"icao": "KVCT",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "VCV",
			"lat": "34.588",
			"lon": "-117.373",
			"name": "Southern California Logistics Airport",
			"city": "Victorville",
			"state": "California",
			"country": "United States",
			"woeid": "12519884",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Military Airport",
			"email": "",
			"url": "",
			"runway_length": "15050",
			"elev": "2885",
			"icao": "KVCV",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "VDZ",
			"lat": "61.1294",
			"lon": "-146.256",
			"name": "Valdez Airport",
			"city": "Valdez",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522264",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "5000",
			"elev": "120",
			"icao": "PAVD",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "VEE",
			"lat": "67.009",
			"lon": "-146.406",
			"name": "Venetie",
			"city": "Venetie",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2511598",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4100",
			"elev": "550",
			"icao": "",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "VEL",
			"lat": "40.4485",
			"lon": "-109.514",
			"name": "Vernal Airport",
			"city": "Vernal",
			"state": "Utah",
			"country": "United States",
			"woeid": "12522278",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6601",
			"elev": "5274",
			"icao": "KVEL",
			"direct_flights": "1",
			"carriers": "3"
	},
	{
			"code": "VIS",
			"lat": "36.3253",
			"lon": "-119.394",
			"name": "Visalia Municipal Airport",
			"city": "Visalia",
			"state": "California",
			"country": "United States",
			"woeid": "12522291",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6556",
			"elev": "292",
			"icao": "KVIS",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "VLD",
			"lat": "30.7892",
			"lon": "-83.2787",
			"name": "Valdosta Regional Airport",
			"city": "Valdosta",
			"state": "Georgia",
			"country": "United States",
			"woeid": "12522265",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "6302",
			"elev": "204",
			"icao": "KVLD",
			"direct_flights": "1",
			"carriers": "2"
	},
	{
			"code": "VPS",
			"lat": "30.496",
			"lon": "-86.55",
			"name": "Eglin Air Force Base",
			"city": "Eglin Village",
			"state": "Florida",
			"country": "United States",
			"woeid": "12519601",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "12000",
			"elev": "85",
			"icao": "KVPS",
			"direct_flights": "8",
			"carriers": "12"
	},
	{
			"code": "VQS",
			"lat": "18.1355",
			"lon": "-65.487",
			"name": "Aeropuerto Antonio Rivera Rodríguez",
			"city": "Puerto Ferro",
			"state": "Puerto Rico",
			"country": "United States",
			"woeid": "12524420",
			"tz": "America/Puerto_Rico",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2500",
			"elev": "46",
			"icao": "TJVQ",
			"direct_flights": "4",
			"carriers": "4"
	},
	{
			"code": "WAA",
			"lat": "65.6112",
			"lon": "-168.098",
			"name": "Wales",
			"city": "Wales",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2513417",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2600",
			"elev": "25",
			"icao": "",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "WBB",
			"lat": "63.52",
			"lon": "-162.279",
			"name": "Stebbins",
			"city": "Stebbins",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2499397",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2800",
			"elev": "26",
			"icao": "",
			"direct_flights": "4",
			"carriers": "3"
	},
	{
			"code": "WBQ",
			"lat": "66.359",
			"lon": "-147.396",
			"name": "Alaska",
			"city": "Beaver",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "3800",
			"elev": "365",
			"icao": "PAWB",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "WKK",
			"lat": "59.2667",
			"lon": "-158.633",
			"name": "Aleknagik",
			"city": "Aleknagik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12799627",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1800",
			"elev": "75",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "WLK",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Selawik",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1900",
			"elev": "25",
			"icao": "PASK",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "WMK",
			"lat": "55.7389",
			"lon": "-132.258",
			"name": "Meyers Chuck",
			"city": "Meyers Chuck",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2449996",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "WMO",
			"lat": "64.6811",
			"lon": "-163.408",
			"name": "White Mountain",
			"city": "White Mountain",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2519364",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "1900",
			"elev": "262",
			"icao": "",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "WNA",
			"lat": "60.7049",
			"lon": "-161.766",
			"name": "Napaskiak",
			"city": "Napakiak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2456992",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2142",
			"elev": "20",
			"icao": "",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "WRG",
			"lat": "56.4876",
			"lon": "-132.378",
			"name": "Wrangell Airport",
			"city": "Wrangell",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522517",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Sea Plane Base",
			"email": "",
			"url": "",
			"runway_length": "6003",
			"elev": "44",
			"icao": "PAWG",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "WRL",
			"lat": "43.9747",
			"lon": "-107.953",
			"name": "Worland Municipal Airport",
			"city": "Worland",
			"state": "Wyoming",
			"country": "United States",
			"woeid": "12522515",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7004",
			"elev": "4245",
			"icao": "KWRL",
			"direct_flights": "3",
			"carriers": "3"
	},
	{
			"code": "WSN",
			"lat": "58.7285",
			"lon": "-157.014",
			"name": "Naknek",
			"city": "South Naknek",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2456884",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2200",
			"elev": "130",
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "WST",
			"lat": "41.3492",
			"lon": "-71.8115",
			"name": "Westerly State Airport",
			"city": "Westerly",
			"state": "Rhode Island",
			"country": "United States",
			"woeid": "12522397",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "4000",
			"elev": "81",
			"icao": "KWST",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "WSX",
			"lat": "48.8907",
			"lon": "-116.982",
			"name": "United States",
			"city": "Westsound",
			"state": "Washington",
			"country": "United States",
			"woeid": "23424977",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "WTK",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Noatak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2200",
			"elev": "99",
			"icao": "PAWN",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "WTL",
			"lat": "60.3432",
			"lon": "-162.664",
			"name": "Tuntutuliak",
			"city": "Tuntutuliak",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2508647",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "4"
	},
	{
			"code": "WWP",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Whale Pass",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Juneau",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "WWT",
			"lat": "62.8903",
			"lon": "-149.054",
			"name": "Alaska",
			"city": "Newtok",
			"state": "Alaska",
			"country": "United States",
			"woeid": "2347560",
			"tz": "America/Nome",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "2153",
			"elev": "25",
			"icao": "",
			"direct_flights": "3",
			"carriers": "4"
	},
	{
			"code": "WYS",
			"lat": "44.6876",
			"lon": "-111.114",
			"name": "Yellowstone Airport",
			"city": "West Yellowstone",
			"state": "Montana",
			"country": "United States",
			"woeid": "12522531",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "8399",
			"elev": "6644",
			"icao": "KWYS",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "XNA",
			"lat": "36.2756",
			"lon": "-94.2955",
			"name": "Northwest Arkansas Regional Airport",
			"city": "Bentonville",
			"state": "Arkansas",
			"country": "United States",
			"woeid": "29388192",
			"tz": "America/Chicago",
			"phone": "479-205-1000",
			"type": "Airports",
			"email": "",
			"url": "http://www.nwara.com/",
			"runway_length": "8800",
			"elev": "1286",
			"icao": "KXNA",
			"direct_flights": "15",
			"carriers": "13"
	},
	{
			"code": "XNY",
			"lat": "42.8767",
			"lon": "-77.8826",
			"name": "York",
			"city": "New York",
			"state": "New York",
			"country": "United States",
			"woeid": "2524848",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "XVG",
			"lat": "46.9929",
			"lon": "-94.2075",
			"name": "Longville Municipal Airport",
			"city": "Longville",
			"state": "Minnesota",
			"country": "United States",
			"woeid": "12520699",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KXVG",
			"direct_flights": "4",
			"carriers": "1"
	},
	{
			"code": "XZU",
			"lat": "37.2997",
			"lon": "-92.3047",
			"name": "Off line Point",
			"city": "Rail (Generic)",
			"state": "Missouri",
			"country": "United States",
			"woeid": "2478178",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Off-line Point",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "YAK",
			"lat": "59.5103",
			"lon": "-139.668",
			"name": "Yakutat Airport",
			"city": "Yakutat",
			"state": "Alaska",
			"country": "United States",
			"woeid": "12522527",
			"tz": "America/Anchorage",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7813",
			"elev": "33",
			"icao": "PAYA",
			"direct_flights": "2",
			"carriers": "3"
	},
	{
			"code": "YIP",
			"lat": "42.2385",
			"lon": "-83.5467",
			"name": "Willow Run Airport",
			"city": "Ypsilanti",
			"state": "Michigan",
			"country": "United States",
			"woeid": "12522472",
			"tz": "America/New_York",
			"phone": "",
			"type": "Other Airport",
			"email": "",
			"url": "",
			"runway_length": "7522",
			"elev": "716",
			"icao": "KYIP",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "YKM",
			"lat": "46.5703",
			"lon": "-120.54",
			"name": "Yakima Air Terminal",
			"city": "Yakima",
			"state": "Washington",
			"country": "United States",
			"woeid": "12522526",
			"tz": "America/Los_Angeles",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7603",
			"elev": "1095",
			"icao": "KYKM",
			"direct_flights": "2",
			"carriers": "7"
	},
	{
			"code": "YNG",
			"lat": "41.2576",
			"lon": "-80.6648",
			"name": "Youngstown-Warren Regional Airport",
			"city": "Vienna",
			"state": "Ohio",
			"country": "United States",
			"woeid": "12522541",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "7492",
			"elev": "1196",
			"icao": "KYNG",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "YUM",
			"lat": "32.6685",
			"lon": "-114.599",
			"name": "Yuma International Airport",
			"city": "Yuma",
			"state": "Arizona",
			"country": "United States",
			"woeid": "12522544",
			"tz": "America/Phoenix",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": "13299",
			"elev": "213",
			"icao": "KYUM",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "ZBP",
			"lat": "39.3117",
			"lon": "-76.6183",
			"name": "",
			"city": "Baltimore",
			"state": "Maryland",
			"country": "United States",
			"woeid": "2358820",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZFV",
			"lat": "40.9946",
			"lon": "-77.6045",
			"name": "Philadelphia Rail",
			"city": "Philadelphia",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "2347597",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "6",
			"carriers": "2"
	},
	{
			"code": "ZFZ",
			"lat": "40.7145",
			"lon": "-74.0071",
			"name": "New York",
			"city": "Buffalo",
			"state": "New York",
			"country": "United States",
			"woeid": "2459115",
			"tz": "America/New_York",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZGD",
			"lat": "41.3564",
			"lon": "-72.0965",
			"name": "New London",
			"city": "Groton",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "2458689",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZHO",
			"lat": "29.7605",
			"lon": "-95.3698",
			"name": "Bus Station",
			"city": "Houston",
			"state": "Texas",
			"country": "United States",
			"woeid": "2424766",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Bus Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZLY",
			"lat": "42.7426",
			"lon": "-73.809",
			"name": "Albany International Airport",
			"city": "Albany",
			"state": "New York",
			"country": "United States",
			"woeid": "12518554",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZME",
			"lat": "40.1428",
			"lon": "-74.7267",
			"name": "New Jersey",
			"city": "Newark",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "2347589",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "6",
			"carriers": "2"
	},
	{
			"code": "ZML",
			"lat": "42.9471",
			"lon": "-87.9051",
			"name": "General Mitchell International Airport",
			"city": "Milwaukee",
			"state": "Wisconsin",
			"country": "United States",
			"woeid": "12519880",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ZRD",
			"lat": "37.5406",
			"lon": "-77.4334",
			"name": "Richmond",
			"city": "Richmond",
			"state": "Virginia",
			"country": "United States",
			"woeid": "2480894",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZRL",
			"lat": "40.038",
			"lon": "-76.3013",
			"name": "Lancaster",
			"city": "Lancaster",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "2436076",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZRP",
			"lat": "40.7333",
			"lon": "-74.1667",
			"name": "Pennsylvania Station",
			"city": "Newark",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "12760686",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "7",
			"carriers": "2"
	},
	{
			"code": "ZRT",
			"lat": "41.7633",
			"lon": "-72.674",
			"name": "Hartford",
			"city": "Hartford",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "2418244",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZRU",
			"lat": "42.322",
			"lon": "-71.0918",
			"name": "",
			"city": "Boston",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "2367105",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZRV",
			"lat": "41.8238",
			"lon": "-71.412",
			"name": "Providence",
			"city": "Providence",
			"state": "Rhode Island",
			"country": "United States",
			"woeid": "2477058",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "4",
			"carriers": "1"
	},
	{
			"code": "ZSF",
			"lat": "42.1039",
			"lon": "-72.592",
			"name": "Springfield MA RR",
			"city": "Springfield",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "12758361",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZTD",
			"lat": "42.8161",
			"lon": "-73.9442",
			"name": "",
			"city": "Schenectady",
			"state": "New York",
			"country": "United States",
			"woeid": "2489634",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZTE",
			"lat": "43.1531",
			"lon": "-77.6177",
			"name": "",
			"city": "Rochester",
			"state": "New York",
			"country": "United States",
			"woeid": "2482949",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZTF",
			"lat": "41.0464",
			"lon": "-73.5429",
			"name": "",
			"city": "Stamford",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "2498846",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "4",
			"carriers": "2"
	},
	{
			"code": "ZTJ",
			"lat": "40.1428",
			"lon": "-74.7267",
			"name": "New Jersey",
			"city": "Princeton",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "2347589",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZTN",
			"lat": "40.217",
			"lon": "-74.7551",
			"name": "",
			"city": "Philadelphia",
			"state": "New Jersey",
			"country": "United States",
			"woeid": "2347589",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "5",
			"carriers": "1"
	},
	{
			"code": "ZTO",
			"lat": "42.3374",
			"lon": "-71.0591",
			"name": "",
			"city": "Boston",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "2367105",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ZTV",
			"lat": "38.1865",
			"lon": "-85.7462",
			"name": "Louisville International Airport",
			"city": "Louisville",
			"state": "Kentucky",
			"country": "United States",
			"woeid": "12521983",
			"tz": "America/Kentucky/Louisville",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZTY",
			"lat": "42.3433",
			"lon": "-71.0506",
			"name": "",
			"city": "Boston",
			"state": "Massachusetts",
			"country": "United States",
			"woeid": "2367105",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZUA",
			"lat": "43.0958",
			"lon": "-75.2428",
			"name": "Utica",
			"city": "Utica",
			"state": "New York",
			"country": "United States",
			"woeid": "2510530",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZUG",
			"lat": "47.1715",
			"lon": "8.51622",
			"name": "",
			"city": "Harrisburg",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "2418046",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ZUN",
			"lat": "35.0843",
			"lon": "-108.789",
			"name": "Black Rock Airport",
			"city": "Zuni",
			"state": "New Mexico",
			"country": "United States",
			"woeid": "12518848",
			"tz": "America/Denver",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "KZUN",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ZVE",
			"lat": "41.3071",
			"lon": "-72.9249",
			"name": "New Haven",
			"city": "New Haven",
			"state": "Connecticut",
			"country": "United States",
			"woeid": "2458410",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "5",
			"carriers": "2"
	},
	{
			"code": "ZWB",
			"lat": "37.0294",
			"lon": "-76.3467",
			"name": "Williamsburg Rail",
			"city": "Hampton",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12767461",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZWI",
			"lat": "41.1418",
			"lon": "-80.3211",
			"name": "Wilmington Rail",
			"city": "Wilmington",
			"state": "Pennsylvania",
			"country": "United States",
			"woeid": "28744866",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "2"
	},
	{
			"code": "ZWU",
			"lat": "38.9",
			"lon": "-77.25",
			"name": "Union Station",
			"city": "Washington",
			"state": "Virginia",
			"country": "United States",
			"woeid": "12766844",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "3",
			"carriers": "1"
	},
	{
			"code": "ZWV",
			"lat": "39.7393",
			"lon": "-89.5041",
			"name": "Illinois",
			"city": "Glenview",
			"state": "Illinois",
			"country": "United States",
			"woeid": "2347572",
			"tz": "America/Chicago",
			"phone": "",
			"type": "Airports",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	},
	{
			"code": "ZWW",
			"lat": "36.9805",
			"lon": "-76.4295",
			"name": "Newport News",
			"city": "Hampton",
			"state": "Virginia",
			"country": "United States",
			"woeid": "2459618",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "1",
			"carriers": "1"
	},
	{
			"code": "ZYP",
			"lat": "40.7501",
			"lon": "40.7501",
			"name": "Penn Station",
			"city": "New York",
			"state": "New York",
			"country": "United States",
			"woeid": "23682829",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "5",
			"carriers": "1"
	},
	{
			"code": "ZYQ",
			"lat": "43.05",
			"lon": "-76.1474",
			"name": "Syracuse",
			"city": "Syracuse",
			"state": "New York",
			"country": "United States",
			"woeid": "2503418",
			"tz": "America/New_York",
			"phone": "",
			"type": "Railway Stations",
			"email": "",
			"url": "",
			"runway_length": null,
			"elev": null,
			"icao": "",
			"direct_flights": "2",
			"carriers": "1"
	}
];

// From:  http://datasets.flowingdata.com/tuts/maparcs/flights.csv
var flights = [
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SJU",
		"cnt": "120"
	},
	{
		"airline": "AA",
		"airport1": "MSP",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "AA",
		"airport1": "LGA",
		"airport2": "ORD",
		"cnt": "860"
	},
	{
		"airline": "AA",
		"airport1": "TPA",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "STT",
		"airport2": "BOS",
		"cnt": "44"
	},
	{
		"airline": "AA",
		"airport1": "PHX",
		"airport2": "DFW",
		"cnt": "550"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "LAX",
		"cnt": "496"
	},
	{
		"airline": "AA",
		"airport1": "DCA",
		"airport2": "STL",
		"cnt": "200"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "XNA",
		"airport2": "DFW",
		"cnt": "50"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "DFW",
		"cnt": "825"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "LAS",
		"cnt": "280"
	},
	{
		"airline": "AA",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "558"
	},
	{
		"airline": "AA",
		"airport1": "HDN",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "DFW",
		"cnt": "914"
	},
	{
		"airline": "AA",
		"airport1": "BNA",
		"airport2": "LGA",
		"cnt": "102"
	},
	{
		"airline": "AA",
		"airport1": "FAT",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "AUS",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "PHL",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "SFO",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "LAS",
		"cnt": "569"
	},
	{
		"airline": "AA",
		"airport1": "RNO",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ELP",
		"cnt": "434"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "336"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "SFO",
		"cnt": "326"
	},
	{
		"airline": "AA",
		"airport1": "MCO",
		"airport2": "DFW",
		"cnt": "500"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "EGE",
		"cnt": "64"
	},
	{
		"airline": "AA",
		"airport1": "MCO",
		"airport2": "ORD",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "IAH",
		"airport2": "DFW",
		"cnt": "324"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "BOS",
		"cnt": "422"
	},
	{
		"airline": "AA",
		"airport1": "MTJ",
		"airport2": "DFW",
		"cnt": "16"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "SNA",
		"cnt": "152"
	},
	{
		"airline": "AA",
		"airport1": "OKC",
		"airport2": "DFW",
		"cnt": "390"
	},
	{
		"airline": "AA",
		"airport1": "HSV",
		"airport2": "DFW",
		"cnt": "158"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "RDU",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "BHM",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "PHX",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "MSY",
		"cnt": "149"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PDX",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "160"
	},
	{
		"airline": "AA",
		"airport1": "FLL",
		"airport2": "ORD",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "IAD",
		"cnt": "308"
	},
	{
		"airline": "AA",
		"airport1": "CMH",
		"airport2": "DFW",
		"cnt": "104"
	},
	{
		"airline": "AA",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MCI",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SNA",
		"cnt": "578"
	},
	{
		"airline": "AA",
		"airport1": "AUS",
		"airport2": "LAX",
		"cnt": "162"
	},
	{
		"airline": "AA",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "OGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "LGA",
		"cnt": "776"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "DFW",
		"cnt": "560"
	},
	{
		"airline": "AA",
		"airport1": "LGA",
		"airport2": "MIA",
		"cnt": "615"
	},
	{
		"airline": "AA",
		"airport1": "TUL",
		"airport2": "MIA",
		"cnt": "4"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "JFK",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "BOS",
		"cnt": "430"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "BDL",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SLC",
		"airport2": "DFW",
		"cnt": "280"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "JAC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ONT",
		"cnt": "222"
	},
	{
		"airline": "AA",
		"airport1": "ATL",
		"airport2": "MIA",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "DTW",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PIT",
		"cnt": "170"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "TPA",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "SAT",
		"airport2": "DFW",
		"cnt": "826"
	},
	{
		"airline": "AA",
		"airport1": "EWR",
		"airport2": "DFW",
		"cnt": "310"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "COS",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "DFW",
		"cnt": "486"
	},
	{
		"airline": "AA",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "MIA",
		"cnt": "48"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "324"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "HDN",
		"cnt": "64"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "IND",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "SAN",
		"airport2": "ORD",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "JAX",
		"cnt": "216"
	},
	{
		"airline": "AA",
		"airport1": "SAN",
		"airport2": "DFW",
		"cnt": "500"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "222"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "ORD",
		"cnt": "483"
	},
	{
		"airline": "AA",
		"airport1": "DTW",
		"airport2": "DFW",
		"cnt": "260"
	},
	{
		"airline": "AA",
		"airport1": "AUS",
		"airport2": "DFW",
		"cnt": "820"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "TPA",
		"cnt": "298"
	},
	{
		"airline": "AA",
		"airport1": "FLL",
		"airport2": "DFW",
		"cnt": "336"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ICT",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "LAS",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "SAT",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "526"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "CLT",
		"cnt": "360"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "BOS",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "BDL",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PSP",
		"cnt": "64"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "BNA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "HNL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "EWR",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "DFW",
		"cnt": "136"
	},
	{
		"airline": "AA",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PBI",
		"cnt": "150"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SEA",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "IAD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SJC",
		"airport2": "DFW",
		"cnt": "318"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "EWR",
		"cnt": "54"
	},
	{
		"airline": "AA",
		"airport1": "RNO",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SMF",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "RIC",
		"airport2": "DFW",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "BWI",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SJC",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SDF",
		"airport2": "DFW",
		"cnt": "164"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "BDL",
		"cnt": "162"
	},
	{
		"airline": "AA",
		"airport1": "BNA",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "AA",
		"airport1": "IAD",
		"airport2": "SJU",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "JAC",
		"cnt": "24"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "BWI",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "AA",
		"airport1": "MFE",
		"airport2": "DFW",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "AA",
		"airport1": "PHL",
		"airport2": "DFW",
		"cnt": "322"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "STT",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "BUR",
		"airport2": "DFW",
		"cnt": "208"
	},
	{
		"airline": "AA",
		"airport1": "TUS",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DCA",
		"airport2": "MIA",
		"cnt": "504"
	},
	{
		"airline": "AA",
		"airport1": "HNL",
		"airport2": "ORD",
		"cnt": "46"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "STX",
		"cnt": "62"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "AUS",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "IAD",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ABQ",
		"cnt": "444"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "MCO",
		"cnt": "448"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "MIA",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "216"
	},
	{
		"airline": "AA",
		"airport1": "RDU",
		"airport2": "ORD",
		"cnt": "156"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "TUL",
		"cnt": "390"
	},
	{
		"airline": "AA",
		"airport1": "MCO",
		"airport2": "JFK",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "TUS",
		"cnt": "419"
	},
	{
		"airline": "AA",
		"airport1": "OMA",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "LGA",
		"airport2": "EGE",
		"cnt": "8"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "548"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "TPA",
		"cnt": "150"
	},
	{
		"airline": "AA",
		"airport1": "STT",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "MEM",
		"airport2": "DFW",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "MSY",
		"cnt": "336"
	},
	{
		"airline": "AA",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "DAY",
		"cnt": "104"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "SJU",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "580"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "SJU",
		"cnt": "16"
	},
	{
		"airline": "AA",
		"airport1": "SEA",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "110"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "MSY",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "MIA",
		"cnt": "448"
	},
	{
		"airline": "AA",
		"airport1": "SFO",
		"airport2": "JFK",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "MSP",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "LAX",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PHX",
		"cnt": "280"
	},
	{
		"airline": "AA",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "MIA",
		"cnt": "505"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "DCA",
		"cnt": "588"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "MKE",
		"cnt": "416"
	},
	{
		"airline": "OO",
		"airport1": "MRY",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "AUS",
		"airport2": "ORD",
		"cnt": "40"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "ABQ",
		"cnt": "139"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "SFO",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "STL",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "LAX",
		"cnt": "90"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "JAC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "CAK",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "SAT",
		"airport2": "LAX",
		"cnt": "145"
	},
	{
		"airline": "OO",
		"airport1": "IDA",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "BUR",
		"cnt": "280"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "MKE",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "29"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "BHM",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "DEN",
		"cnt": "656"
	},
	{
		"airline": "OO",
		"airport1": "BHM",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "ACV",
		"airport2": "SFO",
		"cnt": "340"
	},
	{
		"airline": "OO",
		"airport1": "GCC",
		"airport2": "RKS",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "DSM",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "FAR",
		"cnt": "70"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "MEM",
		"cnt": "54"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "36"
	},
	{
		"airline": "OO",
		"airport1": "SEA",
		"airport2": "SFO",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "GEG",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "CID",
		"cnt": "61"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "IAD",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "STL",
		"cnt": "46"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "IAH",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "BFL",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "ORD",
		"cnt": "57"
	},
	{
		"airline": "OO",
		"airport1": "BZN",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "BZN",
		"cnt": "220"
	},
	{
		"airline": "OO",
		"airport1": "ICT",
		"airport2": "MEM",
		"cnt": "50"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "57"
	},
	{
		"airline": "OO",
		"airport1": "GTF",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "TWF",
		"cnt": "225"
	},
	{
		"airline": "OO",
		"airport1": "AVL",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "3"
	},
	{
		"airline": "OO",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "100"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "84"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GJT",
		"cnt": "285"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "EUG",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "DEN",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SBP",
		"airport2": "SFO",
		"cnt": "274"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SAT",
		"cnt": "6"
	},
	{
		"airline": "OO",
		"airport1": "BIS",
		"airport2": "CLE",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "54"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "LEX",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "MMH",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "LAX",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "ORD",
		"cnt": "236"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "SLC",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "30"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MTJ",
		"airport2": "ORD",
		"cnt": "64"
	},
	{
		"airline": "OO",
		"airport1": "LIT",
		"airport2": "DEN",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MEM",
		"cnt": "9"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "ATL",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "GRB",
		"airport2": "ORD",
		"cnt": "84"
	},
	{
		"airline": "OO",
		"airport1": "EUG",
		"airport2": "PDX",
		"cnt": "212"
	},
	{
		"airline": "OO",
		"airport1": "CLD",
		"airport2": "LAX",
		"cnt": "324"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "6"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SMF",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "RAP",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "PSP",
		"airport2": "LAX",
		"cnt": "354"
	},
	{
		"airline": "OO",
		"airport1": "CIC",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "10"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SMX",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "PAH",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "RKS",
		"airport2": "SLC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "GJT",
		"airport2": "ASE",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "TYS",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "RDM",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "HSV",
		"airport2": "DEN",
		"cnt": "90"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "MFR",
		"cnt": "300"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "CPR",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "IND",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MAF",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "PDX",
		"cnt": "190"
	},
	{
		"airline": "OO",
		"airport1": "BFL",
		"airport2": "LAX",
		"cnt": "100"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "85"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "DEN",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "TUS",
		"cnt": "230"
	},
	{
		"airline": "OO",
		"airport1": "OAK",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "IDA",
		"cnt": "264"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "PIT",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "MCI",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SNA",
		"cnt": "44"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "COD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "MAF",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "SYR",
		"airport2": "ORD",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "SDF",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "BNA",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "IAD",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "PSC",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "HPN",
		"cnt": "172"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "ORD",
		"cnt": "227"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "DAY",
		"cnt": "68"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "CWA",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "44"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "RNO",
		"cnt": "163"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SGF",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "GFK",
		"cnt": "246"
	},
	{
		"airline": "OO",
		"airport1": "AUS",
		"airport2": "SLC",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "BOS",
		"airport2": "CLE",
		"cnt": "19"
	},
	{
		"airline": "OO",
		"airport1": "SEA",
		"airport2": "SLC",
		"cnt": "128"
	},
	{
		"airline": "OO",
		"airport1": "TUS",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "FWA",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "CEC",
		"airport2": "ACV",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "AUS",
		"cnt": "111"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "LGB",
		"airport2": "SLC",
		"cnt": "270"
	},
	{
		"airline": "OO",
		"airport1": "SAN",
		"airport2": "DEN",
		"cnt": "7"
	},
	{
		"airline": "OO",
		"airport1": "MKG",
		"airport2": "ORD",
		"cnt": "120"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "DEN",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "LAS",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "MSN",
		"airport2": "MSP",
		"cnt": "38"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "RST",
		"cnt": "37"
	},
	{
		"airline": "OO",
		"airport1": "BTM",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "COS",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "GJT",
		"airport2": "SLC",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "ASE",
		"cnt": "610"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "ICT",
		"cnt": "138"
	},
	{
		"airline": "OO",
		"airport1": "DRO",
		"airport2": "DEN",
		"cnt": "363"
	},
	{
		"airline": "OO",
		"airport1": "CMX",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SGU",
		"airport2": "SLC",
		"cnt": "248"
	},
	{
		"airline": "OO",
		"airport1": "GJT",
		"airport2": "LAX",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SJC",
		"cnt": "125"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "IND",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "RAP",
		"cnt": "184"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "36"
	},
	{
		"airline": "OO",
		"airport1": "SMF",
		"airport2": "ACV",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "389"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "HLN",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "BIS",
		"airport2": "SLC",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "CRW",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "SMF",
		"cnt": "392"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "MTJ",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "OKC",
		"cnt": "109"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "OMA",
		"cnt": "49"
	},
	{
		"airline": "OO",
		"airport1": "PSC",
		"airport2": "DEN",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "ABQ",
		"cnt": "298"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "OKC",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "72"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MSP",
		"cnt": "17"
	},
	{
		"airline": "OO",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "31"
	},
	{
		"airline": "OO",
		"airport1": "DSM",
		"airport2": "DEN",
		"cnt": "33"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "RDM",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "100"
	},
	{
		"airline": "OO",
		"airport1": "SAN",
		"airport2": "SFO",
		"cnt": "64"
	},
	{
		"airline": "OO",
		"airport1": "MTJ",
		"airport2": "DEN",
		"cnt": "166"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "BOI",
		"cnt": "219"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "DEN",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "IPL",
		"airport2": "LAX",
		"cnt": "77"
	},
	{
		"airline": "OO",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "123"
	},
	{
		"airline": "OO",
		"airport1": "SJC",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "PIA",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "IYK",
		"cnt": "146"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "BIS",
		"airport2": "MSP",
		"cnt": "139"
	},
	{
		"airline": "OO",
		"airport1": "RKS",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "LMT",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "PIT",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "PSP",
		"airport2": "SFO",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "ONT",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "LSE",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "FAR",
		"cnt": "138"
	},
	{
		"airline": "OO",
		"airport1": "ONT",
		"airport2": "DEN",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "JAC",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "DSM",
		"airport2": "IAH",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "SDF",
		"airport2": "ORD",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "LAX",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "ABQ",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CMH",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "SFO",
		"cnt": "494"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "AUS",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "ABQ",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "CEC",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "30"
	},
	{
		"airline": "OO",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "DTW",
		"airport2": "DEN",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "DEN",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "DEN",
		"cnt": "244"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "TUS",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "SNA",
		"airport2": "SLC",
		"cnt": "88"
	},
	{
		"airline": "OO",
		"airport1": "SEA",
		"airport2": "LAX",
		"cnt": "209"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SLC",
		"cnt": "324"
	},
	{
		"airline": "OO",
		"airport1": "FSD",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "SFO",
		"cnt": "244"
	},
	{
		"airline": "OO",
		"airport1": "HLN",
		"airport2": "MSP",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "BNA",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "SLC",
		"cnt": "198"
	},
	{
		"airline": "OO",
		"airport1": "COD",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "JAC",
		"airport2": "SLC",
		"cnt": "91"
	},
	{
		"airline": "OO",
		"airport1": "CMH",
		"airport2": "MSP",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "TUS",
		"cnt": "139"
	},
	{
		"airline": "OO",
		"airport1": "CWA",
		"airport2": "EAU",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "19"
	},
	{
		"airline": "OO",
		"airport1": "BZN",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GCC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SBA",
		"airport2": "SFO",
		"cnt": "430"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "SEA",
		"cnt": "468"
	},
	{
		"airline": "OO",
		"airport1": "ELP",
		"airport2": "DEN",
		"cnt": "72"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "SNA",
		"cnt": "176"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "RDD",
		"cnt": "248"
	},
	{
		"airline": "OO",
		"airport1": "MSO",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "OO",
		"airport1": "BNA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "51"
	},
	{
		"airline": "OO",
		"airport1": "MBS",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "170"
	},
	{
		"airline": "OO",
		"airport1": "DLH",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "RDM",
		"airport2": "PSP",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CPR",
		"cnt": "208"
	},
	{
		"airline": "OO",
		"airport1": "PIA",
		"airport2": "DEN",
		"cnt": "11"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "YUM",
		"cnt": "268"
	},
	{
		"airline": "OO",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "58"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "LMT",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "ONT",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MCI",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "HLN",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "BUR",
		"airport2": "SLC",
		"cnt": "158"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "232"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "RAP",
		"cnt": "214"
	},
	{
		"airline": "OO",
		"airport1": "LAS",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "51"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "MKE",
		"cnt": "8"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "63"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "PIT",
		"cnt": "6"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "IND",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "BNA",
		"airport2": "ORD",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SBA",
		"cnt": "434"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "HDN",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "SMF",
		"airport2": "RNO",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MLI",
		"cnt": "69"
	},
	{
		"airline": "OO",
		"airport1": "FCA",
		"airport2": "SLC",
		"cnt": "166"
	},
	{
		"airline": "OO",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "DSM",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "BZN",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "IAH",
		"cnt": "155"
	},
	{
		"airline": "OO",
		"airport1": "PHX",
		"airport2": "SLC",
		"cnt": "159"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "RNO",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "IPL",
		"airport2": "YUM",
		"cnt": "31"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "BIS",
		"cnt": "163"
	},
	{
		"airline": "OO",
		"airport1": "SBP",
		"airport2": "LAX",
		"cnt": "326"
	},
	{
		"airline": "OO",
		"airport1": "LNK",
		"airport2": "ORD",
		"cnt": "95"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SGF",
		"cnt": "70"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "FSD",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "XNA",
		"airport2": "ORD",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "BIL",
		"airport2": "DEN",
		"cnt": "120"
	},
	{
		"airline": "OO",
		"airport1": "MLI",
		"airport2": "ORD",
		"cnt": "105"
	},
	{
		"airline": "OO",
		"airport1": "MSN",
		"airport2": "DEN",
		"cnt": "82"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "MSP",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "TYS",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CLE",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "OTH",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "OMA",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SBA",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "GEG",
		"cnt": "188"
	},
	{
		"airline": "OO",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "CVG",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GUC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "IAH",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "PIH",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "CDC",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "OMA",
		"airport2": "SLC",
		"cnt": "132"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "LWS",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "208"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "DLH",
		"cnt": "58"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "FCA",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "LAS",
		"cnt": "87"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "XNA",
		"cnt": "27"
	},
	{
		"airline": "OO",
		"airport1": "EAU",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "MSP",
		"cnt": "11"
	},
	{
		"airline": "OO",
		"airport1": "GCC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "XNA",
		"airport2": "IAH",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "SLC",
		"cnt": "70"
	},
	{
		"airline": "OO",
		"airport1": "SAT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "BIL",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "TUL",
		"airport2": "LAX",
		"cnt": "35"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "MRY",
		"cnt": "330"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "SUN",
		"airport2": "SLC",
		"cnt": "392"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "MOT",
		"cnt": "202"
	},
	{
		"airline": "OO",
		"airport1": "PIT",
		"airport2": "MSP",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "OTH",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "FAR",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "TVC",
		"cnt": "44"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MFR",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "RDM",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "LAS",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "PSC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "LAX",
		"cnt": "294"
	},
	{
		"airline": "OO",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "159"
	},
	{
		"airline": "OO",
		"airport1": "RNO",
		"airport2": "DEN",
		"cnt": "73"
	},
	{
		"airline": "OO",
		"airport1": "CLT",
		"airport2": "IAH",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "PAH",
		"airport2": "LIT",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "LAN",
		"airport2": "ORD",
		"cnt": "169"
	},
	{
		"airline": "OO",
		"airport1": "SAN",
		"airport2": "SLC",
		"cnt": "76"
	},
	{
		"airline": "OO",
		"airport1": "CID",
		"airport2": "ORD",
		"cnt": "126"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "CAK",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "GRR",
		"airport2": "DEN",
		"cnt": "3"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "EGE",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "RAP",
		"cnt": "10"
	},
	{
		"airline": "OO",
		"airport1": "DAY",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "IAH",
		"cnt": "22"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "MCI",
		"cnt": "81"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "FCA",
		"cnt": "34"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "TYS",
		"cnt": "33"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "ICT",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "MSO",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "PSP",
		"airport2": "DEN",
		"cnt": "192"
	},
	{
		"airline": "OO",
		"airport1": "SMF",
		"airport2": "SLC",
		"cnt": "209"
	},
	{
		"airline": "OO",
		"airport1": "OMA",
		"airport2": "DEN",
		"cnt": "36"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SAN",
		"cnt": "1044"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "LNK",
		"cnt": "127"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "IND",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "BFL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "LEX",
		"cnt": "138"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "PIT",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "64"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "SLC",
		"cnt": "110"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MCI",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "ELP",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MCI",
		"airport2": "MSP",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "GRR",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "124"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "PSC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "EKO",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "CID",
		"airport2": "DEN",
		"cnt": "45"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "GRR",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MOD",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "COS",
		"cnt": "604"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "IAH",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "SFO",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "72"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "MKE",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "ORD",
		"cnt": "326"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "DCA",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "RNO",
		"cnt": "269"
	},
	{
		"airline": "OO",
		"airport1": "CMH",
		"airport2": "ORD",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "BOI",
		"cnt": "10"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "203"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GTF",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "EUG",
		"cnt": "328"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "EUG",
		"cnt": "105"
	},
	{
		"airline": "OO",
		"airport1": "LAS",
		"airport2": "DEN",
		"cnt": "42"
	},
	{
		"airline": "OO",
		"airport1": "SDF",
		"airport2": "DEN",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "DAY",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "BUR",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "SFO",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SPI",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "MSP",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "CLE",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "RDM",
		"airport2": "SFO",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "TUS",
		"airport2": "DEN",
		"cnt": "315"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "MRY",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MOT",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "CMH",
		"airport2": "IAH",
		"cnt": "46"
	},
	{
		"airline": "OO",
		"airport1": "MFR",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "AUS",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "IAH",
		"cnt": "3"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MOB",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "STL",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MLI",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "RSW",
		"cnt": "284"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "XNA",
		"airport2": "DFW",
		"cnt": "437"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "BWI",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "LAX",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MHT",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "ORD",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "HNL",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "STL",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "AGS",
		"airport2": "ATL",
		"cnt": "512"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "451"
	},
	{
		"airline": "all",
		"airport1": "LBB",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "ORD",
		"cnt": "353"
	},
	{
		"airline": "all",
		"airport1": "MFE",
		"airport2": "MEM",
		"cnt": "45"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "DFW",
		"cnt": "661"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BOS",
		"cnt": "422"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SAT",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "ACV",
		"airport2": "SFO",
		"cnt": "340"
	},
	{
		"airline": "all",
		"airport1": "GCC",
		"airport2": "RKS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "LEX",
		"cnt": "346"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "IAD",
		"cnt": "418"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "OAK",
		"cnt": "472"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "966"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LAX",
		"cnt": "263"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ROC",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TRI",
		"cnt": "347"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LGA",
		"cnt": "776"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "PSP",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "CLE",
		"cnt": "22"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SBP",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "CLT",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "AVP",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "RIC",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "PBI",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "JAC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "DAL",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "FLG",
		"airport2": "PHX",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "DTW",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "EWR",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "STT",
		"cnt": "17"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "SLC",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SNA",
		"cnt": "479"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "GEG",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "AGS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "OGG",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MYR",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MSY",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "PHX",
		"cnt": "575"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "LGA",
		"cnt": "394"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MDW",
		"cnt": "528"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MDT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "BUF",
		"cnt": "124"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DCA",
		"cnt": "343"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "ORD",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "ONT",
		"cnt": "421"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "OAK",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "JAX",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "JAX",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "CLE",
		"cnt": "341"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "MEM",
		"cnt": "218"
	},
	{
		"airline": "all",
		"airport1": "BRO",
		"airport2": "IAH",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "MSP",
		"cnt": "432"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "CLE",
		"cnt": "71"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ILM",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "CLT",
		"cnt": "476"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SDF",
		"cnt": "70"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "296"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DAY",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "RST",
		"airport2": "ORD",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "BLI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "DEN",
		"cnt": "153"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "YUM",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "STL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "OKC",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "DFW",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "HRL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CLD",
		"airport2": "LAX",
		"cnt": "324"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "CLT",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "ORD",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SJU",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "MEM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "288"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PDX",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RDM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "TPA",
		"cnt": "362"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TLH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "ATL",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SAT",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ROA",
		"airport2": "ORD",
		"cnt": "73"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "1018"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "BWI",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "JFK",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PHX",
		"cnt": "767"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "AVL",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MQT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "468"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CLT",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "EWR",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SFO",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "ATL",
		"cnt": "97"
	},
	{
		"airline": "all",
		"airport1": "MOB",
		"airport2": "IAH",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ILM",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "IAH",
		"cnt": "252"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SJU",
		"cnt": "371"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "429"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "DFW",
		"cnt": "1028"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "EWR",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "LIH",
		"airport2": "PHX",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "IAH",
		"cnt": "449"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "IAD",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ITO",
		"airport2": "HNL",
		"cnt": "1016"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DBQ",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "319"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "IAD",
		"cnt": "559"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "FWA",
		"airport2": "ORD",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "CEC",
		"airport2": "ACV",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "TYS",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "CVG",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MCI",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MCO",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "ATL",
		"cnt": "977"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "ROC",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MCI",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ONT",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "830"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "STL",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "1759"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "ORD",
		"cnt": "456"
	},
	{
		"airline": "all",
		"airport1": "AEX",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "ASE",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "RDU",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "IND",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "CMX",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "LGA",
		"cnt": "479"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "EVV",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SGU",
		"airport2": "SLC",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "FSD",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "DFW",
		"cnt": "336"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BIL",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SRQ",
		"cnt": "446"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "628"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "ACV",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "HLN",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "SLC",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "OAK",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SRQ",
		"cnt": "68"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "HSV",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DAB",
		"airport2": "ATL",
		"cnt": "247"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BTR",
		"cnt": "420"
	},
	{
		"airline": "all",
		"airport1": "TLH",
		"airport2": "MIA",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "MHT",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "CLE",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SFO",
		"cnt": "167"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "DEN",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "BWI",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "JAX",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DTW",
		"cnt": "400"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PHX",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "TPA",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "MFE",
		"airport2": "DFW",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "DEN",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SAN",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "STT",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MIA",
		"cnt": "616"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ALB",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MLI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "MTJ",
		"airport2": "DEN",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SAT",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "FLL",
		"cnt": "802"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "CMH",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MIA",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PHL",
		"cnt": "539"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PIA",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "STL",
		"cnt": "147"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "STL",
		"cnt": "464"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "LMT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BRW",
		"airport2": "ANC",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "LSE",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "EWR",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "IAH",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SAN",
		"cnt": "376"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "CMH",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "IAH",
		"cnt": "550"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MKE",
		"cnt": "186"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "RSW",
		"cnt": "297"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CMH",
		"cnt": "68"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SLC",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "DTW",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "DFW",
		"cnt": "414"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "FAT",
		"cnt": "558"
	},
	{
		"airline": "all",
		"airport1": "VPS",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "190"
	},
	{
		"airline": "all",
		"airport1": "ABY",
		"airport2": "ATL",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PBI",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DFW",
		"cnt": "1053"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "JAN",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "MIA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "RSW",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "JAC",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "LAX",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "JAX",
		"cnt": "852"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "XNA",
		"cnt": "93"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "TUL",
		"cnt": "232"
	},
	{
		"airline": "all",
		"airport1": "FSD",
		"airport2": "DEN",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "SFO",
		"cnt": "244"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "DTW",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "MSP",
		"cnt": "20"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "TUS",
		"cnt": "232"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "PNS",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GCC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "SEA",
		"cnt": "468"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "OMA",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "DEN",
		"cnt": "161"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "SNA",
		"cnt": "686"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ORF",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ORD",
		"cnt": "525"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "RDD",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "BWI",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "FLL",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "PHF",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "BWI",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DLH",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CRW",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "RDM",
		"airport2": "PSP",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "ATL",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CRP",
		"cnt": "492"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CMI",
		"cnt": "306"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CMH",
		"cnt": "714"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MKE",
		"cnt": "118"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SEA",
		"cnt": "765"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "CLE",
		"cnt": "186"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "IAD",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "IAH",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "KOA",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PIT",
		"cnt": "173"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "323"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PIA",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CLE",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "1149"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "716"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "IAH",
		"cnt": "97"
	},
	{
		"airline": "all",
		"airport1": "LBB",
		"airport2": "IAH",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "PHL",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SFO",
		"cnt": "204"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "PDX",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "TPA",
		"cnt": "298"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BTV",
		"airport2": "JFK",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TPA",
		"cnt": "1033"
	},
	{
		"airline": "all",
		"airport1": "IDA",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ICT",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MIA",
		"cnt": "615"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SEA",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PIT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MSY",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MSP",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "ROC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MCO",
		"cnt": "772"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "BWI",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "DEN",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "GPT",
		"airport2": "TPA",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "IAD",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "IAH",
		"cnt": "351"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MHT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PWM",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "ATL",
		"cnt": "1162"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "JAC",
		"cnt": "190"
	},
	{
		"airline": "all",
		"airport1": "PBI",
		"airport2": "DTW",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "IPL",
		"airport2": "YUM",
		"cnt": "31"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "CLT",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "FLL",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "IAH",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "ORD",
		"cnt": "236"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "TUS",
		"cnt": "271"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "RSW",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MCO",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "TUL",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MCI",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "SRQ",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MEM",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "MSP",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "RSW",
		"cnt": "18"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "ELM",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "PBI",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SBA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "ECP",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "685"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MEI",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "RSW",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "380"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "334"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "LAS",
		"cnt": "126"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SNA",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "JFK",
		"cnt": "145"
	},
	{
		"airline": "all",
		"airport1": "EAU",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "CMH",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "GRK",
		"airport2": "IAH",
		"cnt": "29"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "233"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PBI",
		"cnt": "712"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LIH",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "FAR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SBN",
		"airport2": "DTW",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "LAS",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "MTJ",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "GSP",
		"cnt": "82"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BQN",
		"airport2": "JFK",
		"cnt": "81"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "118"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MSY",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "IAD",
		"cnt": "526"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "IAH",
		"cnt": "530"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "789"
	},
	{
		"airline": "all",
		"airport1": "BKG",
		"airport2": "MCO",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "YAK",
		"airport2": "CDV",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AZO",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "ATL",
		"cnt": "594"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "DEN",
		"cnt": "11"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "EGE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "376"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SDF",
		"cnt": "207"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "FLL",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "CVG",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "EUG",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "STL",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "IAD",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "IAH",
		"cnt": "582"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BMI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MCO",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "FCA",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "FNT",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "LRD",
		"cnt": "180"
	},
	{
		"airline": "all",
		"airport1": "JAC",
		"airport2": "ORD",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ICT",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "RIC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RDU",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PDX",
		"cnt": "290"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "DEN",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "DFW",
		"cnt": "486"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "MEM",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "PHX",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SJU",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "JFK",
		"cnt": "327"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "ORD",
		"cnt": "529"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "RDU",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "JFK",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SAT",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SAN",
		"cnt": "648"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PVD",
		"cnt": "454"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "BDL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "RNO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "CLT",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "LAX",
		"cnt": "249"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "LGB",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ORD",
		"cnt": "386"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SBN",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MHK",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CHO",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SDF",
		"cnt": "142"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MKE",
		"cnt": "265"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SLC",
		"cnt": "473"
	},
	{
		"airline": "all",
		"airport1": "BQN",
		"airport2": "MCO",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "LAX",
		"cnt": "241"
	},
	{
		"airline": "all",
		"airport1": "MOD",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BDL",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PDX",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "IAH",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CLT",
		"cnt": "915"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "SFO",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "VPS",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "DAL",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "EWR",
		"cnt": "236"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "754"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "BOS",
		"cnt": "30"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BOI",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "779"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MDT",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "ATL",
		"cnt": "595"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MDW",
		"cnt": "668"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "PNS",
		"airport2": "ATL",
		"cnt": "574"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "874"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SMF",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "EUG",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "CLE",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "BIL",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SJC",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "337"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "1014"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "XNA",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SJU",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ABE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "LAS",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "LGA",
		"cnt": "772"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "DCA",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "HDN",
		"airport2": "EWR",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MFR",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "CLE",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "LGA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "ASE",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TUS",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SEA",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "ATL",
		"cnt": "334"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "ABQ",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "BOS",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "IAD",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "SFO",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MKE",
		"cnt": "99"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "IAH",
		"cnt": "163"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GSP",
		"cnt": "332"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "LAX",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "580"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "LAS",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "MEM",
		"cnt": "137"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "CLE",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "PHL",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PWM",
		"cnt": "63"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "IAH",
		"cnt": "348"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "HOU",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "PIT",
		"cnt": "474"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "SAN",
		"cnt": "644"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "FLL",
		"cnt": "688"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "LBB",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PDX",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PDX",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "DSM",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "LGB",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "PDX",
		"cnt": "106"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MDW",
		"cnt": "357"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "CID",
		"cnt": "61"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "647"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "DTW",
		"cnt": "107"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SAV",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SAT",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "RIC",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "KOA",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "RNO",
		"cnt": "546"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "MCO",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "250"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "CLT",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "SAT",
		"cnt": "709"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SAN",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SMF",
		"cnt": "427"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "SCC",
		"airport2": "BRW",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "GUM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "DTW",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "ANC",
		"cnt": "750"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "CLE",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "CLL",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "BWI",
		"cnt": "464"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "DFW",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "FLL",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DAY",
		"cnt": "379"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "DEN",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "SBP",
		"airport2": "SFO",
		"cnt": "274"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "LIH",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "CLE",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MMH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "IAH",
		"cnt": "414"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "TPA",
		"cnt": "366"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "LIH",
		"cnt": "1264"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "DCA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SEA",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "CLT",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "DFW",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "LCH",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MSY",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GUC",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MSN",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SMF",
		"cnt": "646"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "OAK",
		"cnt": "169"
	},
	{
		"airline": "all",
		"airport1": "RAP",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "LAX",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "AUS",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "DTW",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SMX",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PAH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "EWR",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TOL",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BWI",
		"cnt": "849"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MSY",
		"cnt": "521"
	},
	{
		"airline": "all",
		"airport1": "BRO",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "CMH",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CID",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "HOU",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "DEN",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "CPR",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "HOU",
		"cnt": "1286"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MCO",
		"cnt": "600"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "ONT",
		"cnt": "419"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "DCA",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "PDX",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MDW",
		"cnt": "439"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "TUS",
		"cnt": "497"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "BOS",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ROA",
		"cnt": "87"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "ORD",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "194"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PIT",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "TUL",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LIT",
		"cnt": "550"
	},
	{
		"airline": "all",
		"airport1": "EYW",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "IAD",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "HDN",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MHT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "GRB",
		"airport2": "MSP",
		"cnt": "75"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "IAH",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "ORD",
		"cnt": "407"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "BOS",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PIT",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BNA",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SWF",
		"cnt": "47"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MGM",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "DAL",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "247"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SNA",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "EWR",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "DFW",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SJC",
		"cnt": "410"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CWA",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MEM",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "IAH",
		"cnt": "416"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "IAD",
		"cnt": "417"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "GFK",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "DEN",
		"cnt": "590"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "STL",
		"cnt": "244"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SNA",
		"cnt": "578"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "DFW",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "PHX",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "LAS",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "SRQ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "IND",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "MKG",
		"airport2": "ORD",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "VLD",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LGA",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "SBA",
		"airport2": "SFO",
		"cnt": "430"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PIH",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "CLE",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "FAR",
		"airport2": "MSP",
		"cnt": "254"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TPA",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MSY",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "COS",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "SLC",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "EWR",
		"cnt": "236"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "TPA",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GRR",
		"cnt": "122"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PWM",
		"cnt": "167"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "SNA",
		"cnt": "365"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "ICT",
		"cnt": "261"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "EWR",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "DRO",
		"airport2": "DEN",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "CMH",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "DCA",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GRK",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MLU",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BTR",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SJC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MDT",
		"cnt": "196"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SAV",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ORD",
		"cnt": "203"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "IND",
		"cnt": "403"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "SMF",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PBI",
		"cnt": "174"
	},
	{
		"airline": "all",
		"airport1": "FSD",
		"airport2": "ORD",
		"cnt": "418"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "ORD",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MTJ",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "MHK",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "OMA",
		"cnt": "63"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "YAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "802"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "ABQ",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "IAD",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ATL",
		"cnt": "584"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "CLE",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "582"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "CLT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "TPA",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "DFW",
		"cnt": "179"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "DCA",
		"cnt": "29"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "DTW",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "PSG",
		"airport2": "JNU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MSP",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "EVV",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "619"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "STL",
		"cnt": "255"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "TLH",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "711"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "IAD",
		"cnt": "124"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "IAH",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PIT",
		"cnt": "213"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "MSP",
		"cnt": "139"
	},
	{
		"airline": "all",
		"airport1": "RKS",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "DFW",
		"cnt": "251"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "1443"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "ONT",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "IAH",
		"cnt": "227"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SAN",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "PHX",
		"cnt": "430"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MGM",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "RNO",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "ABQ",
		"cnt": "114"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CEC",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "PHX",
		"cnt": "576"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CHS",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "DAY",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "FAY",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "TYS",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "DEN",
		"cnt": "450"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MKE",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "DEN",
		"cnt": "420"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "TUS",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "OAK",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "BMI",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "ORD",
		"cnt": "6"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "IAD",
		"cnt": "74"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MTJ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BTR",
		"airport2": "MEM",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "COD",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "FNT",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "TPA",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "DFW",
		"cnt": "390"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "SFO",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "DAY",
		"cnt": "45"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TXK",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "IAH",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CIC",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "MSP",
		"cnt": "286"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "LAS",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "CAE",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "DTW",
		"cnt": "219"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "HPN",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ISP",
		"cnt": "292"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MBS",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "EWR",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "KTN",
		"airport2": "WRG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MEM",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "RSW",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "SHV",
		"airport2": "DFW",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "BDL",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "LIH",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "PDX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "JFK",
		"cnt": "113"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "FNT",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OKC",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CMH",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "EWR",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MSY",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "LAS",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JAN",
		"cnt": "440"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "MHT",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "COD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "522"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "ORD",
		"cnt": "462"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JAX",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "HOU",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "CDV",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "CVG",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "TUS",
		"cnt": "209"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "TUS",
		"cnt": "534"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RAP",
		"cnt": "322"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MSP",
		"cnt": "338"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "526"
	},
	{
		"airline": "all",
		"airport1": "GGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "VPS",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "IND",
		"cnt": "163"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "ORD",
		"cnt": "588"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MAF",
		"cnt": "302"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "192"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "RNO",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MLI",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MDT",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PVD",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "VPS",
		"airport2": "ATL",
		"cnt": "522"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "PDX",
		"cnt": "149"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "IAD",
		"cnt": "199"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "DCA",
		"cnt": "602"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "414"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SMF",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "IAH",
		"cnt": "378"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "CLE",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "586"
	},
	{
		"airline": "all",
		"airport1": "TVC",
		"airport2": "ORD",
		"cnt": "257"
	},
	{
		"airline": "all",
		"airport1": "TRI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "IAD",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "LNK",
		"airport2": "ORD",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SAV",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SMF",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "BWI",
		"cnt": "288"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JAC",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "JFK",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "STL",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "ATL",
		"cnt": "794"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "FWA",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "GRR",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SAT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "BWI",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GUC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "SDF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "CLE",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "SLC",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "LWS",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "RDU",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "DLH",
		"cnt": "58"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "LAS",
		"cnt": "555"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "JFK",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "JFK",
		"cnt": "347"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "LAX",
		"cnt": "1050"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "JFK",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SMF",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "SLC",
		"cnt": "122"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "255"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "TPA",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "595"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PVD",
		"cnt": "155"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "ELP",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "PSP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "ATL",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "CLT",
		"cnt": "442"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "BOS",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "EVV",
		"airport2": "MEM",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "SLC",
		"cnt": "409"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "MAF",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "189"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PHL",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "PAH",
		"airport2": "LIT",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CYS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SGF",
		"cnt": "147"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "ORD",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PDX",
		"cnt": "424"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BKG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "CAK",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ATL",
		"cnt": "826"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "GRR",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "HNL",
		"cnt": "1720"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CLT",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "PHX",
		"cnt": "393"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "SNA",
		"cnt": "371"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BOS",
		"cnt": "938"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GRB",
		"airport2": "MQT",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "OKC",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "ATL",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "SJU",
		"cnt": "25"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "RDU",
		"cnt": "153"
	},
	{
		"airline": "all",
		"airport1": "MSO",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "COS",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "BOS",
		"cnt": "191"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SAF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "ELP",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SLC",
		"cnt": "494"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "456"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "DFW",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "STL",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "DTW",
		"cnt": "359"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DFW",
		"cnt": "820"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "OAK",
		"cnt": "680"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SJC",
		"cnt": "381"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "SLC",
		"cnt": "356"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "MSP",
		"cnt": "384"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MSY",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "DEN",
		"cnt": "223"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MDW",
		"cnt": "265"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "DEN",
		"cnt": "405"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "CLT",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "MYR",
		"airport2": "EWR",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "RIC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "GRR",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "IAH",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MHT",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "OGG",
		"cnt": "118"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "CLT",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "EWR",
		"cnt": "374"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CID",
		"airport2": "DEN",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "EWR",
		"cnt": "27"
	},
	{
		"airline": "all",
		"airport1": "FCA",
		"airport2": "SLC",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "WRG",
		"airport2": "PSG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "GEG",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "ATL",
		"cnt": "582"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "JAX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "MEM",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "BNA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SDF",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "FLL",
		"cnt": "26"
	},
	{
		"airline": "all",
		"airport1": "LSE",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "LAX",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "MDW",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "STL",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GTF",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "BTV",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "PWM",
		"cnt": "143"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CAE",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "DAY",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "LAX",
		"cnt": "275"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GRK",
		"cnt": "234"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SJU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "OAK",
		"cnt": "739"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "CLE",
		"cnt": "247"
	},
	{
		"airline": "all",
		"airport1": "RDM",
		"airport2": "SFO",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MRY",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "SFO",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "MSY",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "JFK",
		"cnt": "1026"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "IAH",
		"cnt": "115"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "IND",
		"cnt": "221"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "MKE",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DTW",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "IAD",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "MRY",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SBA",
		"cnt": "254"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "HNL",
		"cnt": "1268"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DAL",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SEA",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SRQ",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "OKC",
		"cnt": "106"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "EWR",
		"cnt": "603"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MSN",
		"cnt": "186"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "900"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MKE",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "311"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CLE",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MAF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SLC",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SPS",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ATW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "IAD",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "SIT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BHM",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MHT",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "LAS",
		"cnt": "1377"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "STL",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "STT",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "STX",
		"cnt": "10"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "RDU",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ELP",
		"cnt": "586"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "STL",
		"cnt": "576"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "CLT",
		"cnt": "460"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SAN",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AEX",
		"airport2": "ATL",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "TWF",
		"cnt": "225"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "SFO",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "TPA",
		"cnt": "482"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "EGE",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SMF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "AVP",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "IAD",
		"cnt": "126"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "1051"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BZN",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TUL",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TUS",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "HOU",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MCI",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "JAX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PHL",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MSP",
		"cnt": "277"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "DAY",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "DTW",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SJC",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "RSW",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "CVG",
		"cnt": "130"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "EGE",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MSN",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "HOU",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "LEX",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PSP",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "MSP",
		"cnt": "58"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "LGA",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "717"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "PHL",
		"cnt": "395"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "FLL",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MCO",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "JAX",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "MSY",
		"cnt": "147"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "JAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "TPA",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "ATL",
		"cnt": "1224"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "FAR",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "EUG",
		"airport2": "PDX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "ECP",
		"airport2": "ATL",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "STT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "BWI",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "307"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "CLT",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "SCC",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "STX",
		"cnt": "62"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EYW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ROC",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "323"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ROA",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "SEA",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ATL",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "JFK",
		"cnt": "916"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "XNA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SAF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "EGE",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BTV",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MIA",
		"cnt": "584"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "DEN",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "DAY",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "FLL",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SDF",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "ATL",
		"cnt": "793"
	},
	{
		"airline": "all",
		"airport1": "SGF",
		"airport2": "DFW",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "HOU",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "TPA",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MEM",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "RDU",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "EWR",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "PHL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "ELP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SMF",
		"cnt": "415"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CSG",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "PHX",
		"cnt": "966"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MGM",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "GSP",
		"cnt": "17"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "TPA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MLB",
		"airport2": "ATL",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MSN",
		"cnt": "67"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "GRB",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MSY",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "ORD",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "DTW",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "SNA",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "DTW",
		"cnt": "75"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "DEN",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "EWR",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SEA",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "PHL",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "OTZ",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "CLT",
		"cnt": "466"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "BOS",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "SEA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "338"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SLC",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "JFK",
		"cnt": "664"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MCO",
		"cnt": "194"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TPA",
		"cnt": "181"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "BHM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MLU",
		"airport2": "MEM",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "LAX",
		"cnt": "488"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "MCO",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "MSP",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "MEM",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RSW",
		"cnt": "213"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RST",
		"cnt": "37"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "DFW",
		"cnt": "826"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "HNL",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MOT",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "966"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CAE",
		"cnt": "578"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "IAH",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SYR",
		"cnt": "189"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BMI",
		"cnt": "370"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "LGA",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MLI",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SJC",
		"cnt": "404"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MCO",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MCI",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "IAH",
		"cnt": "295"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "IND",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "SEA",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MCO",
		"cnt": "1393"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "TPA",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MCI",
		"cnt": "560"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "OKC",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MSP",
		"cnt": "261"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MDW",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "LGB",
		"cnt": "35"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "BUF",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "RDM",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "454"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "ATL",
		"cnt": "380"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "OKC",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "OAK",
		"cnt": "511"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "MCO",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "TYS",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MDW",
		"cnt": "315"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "IYK",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "CAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "SFO",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "DEN",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "JAC",
		"cnt": "172"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "OAJ",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "LIT",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "LAX",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "LFT",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MDW",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "RIC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MIA",
		"cnt": "593"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "CLT",
		"cnt": "821"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "DFW",
		"cnt": "838"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "ICT",
		"airport2": "MEM",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "HNL",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "SJU",
		"cnt": "135"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ACY",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "LAX",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "PHL",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "LAX",
		"cnt": "732"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "IND",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "BUF",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ELP",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "458"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "LAX",
		"cnt": "1700"
	},
	{
		"airline": "all",
		"airport1": "CHA",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "PDX",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "LAX",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "DAY",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "SEA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "BTV",
		"airport2": "IAD",
		"cnt": "138"
	},
	{
		"airline": "all",
		"airport1": "CWA",
		"airport2": "EAU",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BUF",
		"cnt": "460"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "IAD",
		"cnt": "126"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "MEM",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "PHX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "SAT",
		"cnt": "257"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "LAS",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LGB",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LGA",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "XNA",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PNS",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "263"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "OAK",
		"cnt": "309"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "GUC",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "JFK",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "GRB",
		"cnt": "27"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PBI",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "MSY",
		"cnt": "369"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "YUM",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "ISP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SJC",
		"cnt": "479"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "MDW",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "ANC",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ABQ",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "SCC",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MCO",
		"cnt": "503"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "1055"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MSY",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CMI",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SLC",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "DCA",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "STL",
		"cnt": "97"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CLT",
		"cnt": "786"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "JFK",
		"cnt": "663"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "DFW",
		"cnt": "578"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "CVG",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "HDN",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "345"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "1039"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MTJ",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "EGE",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SFO",
		"cnt": "880"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "352"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "180"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "RSW",
		"cnt": "172"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "BNA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "LAS",
		"cnt": "263"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "IAH",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "EUG",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "PHL",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "RDU",
		"cnt": "371"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "BIS",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "PNS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "LGA",
		"cnt": "545"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "STL",
		"cnt": "203"
	},
	{
		"airline": "all",
		"airport1": "SBP",
		"airport2": "LAX",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "DFW",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MLI",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "SBA",
		"airport2": "LAX",
		"cnt": "706"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MLU",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "STL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "FLL",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "MSP",
		"cnt": "676"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "PHL",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "BIL",
		"airport2": "DEN",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DAY",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MHT",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RSW",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TUL",
		"cnt": "446"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "OAK",
		"cnt": "106"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TUS",
		"cnt": "419"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SLC",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "MEM",
		"cnt": "63"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BNA",
		"cnt": "386"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "JFK",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OGG",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MSP",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PBI",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PVD",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MSY",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "ORD",
		"cnt": "443"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "SAN",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "SAN",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "FWA",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MDW",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "FCA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "EWR",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "LAX",
		"cnt": "759"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "ORD",
		"cnt": "1618"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "LAS",
		"cnt": "789"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "PHX",
		"cnt": "808"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "IAH",
		"cnt": "250"
	},
	{
		"airline": "all",
		"airport1": "XNA",
		"airport2": "IAH",
		"cnt": "170"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "SMF",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "ECP",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "PIA",
		"airport2": "DEN",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "LAX",
		"cnt": "35"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "RSW",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MDW",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "MOT",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "MSP",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "OGG",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "PNS",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "IND",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "DFW",
		"cnt": "544"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "LGA",
		"cnt": "770"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "358"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BDL",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "784"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "453"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "DEN",
		"cnt": "285"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SFO",
		"cnt": "374"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MCI",
		"cnt": "130"
	},
	{
		"airline": "all",
		"airport1": "LAN",
		"airport2": "ORD",
		"cnt": "195"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "FWA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "IAH",
		"cnt": "306"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "ANC",
		"cnt": "410"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SDF",
		"cnt": "177"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SIT",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "RAP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "SJU",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HSV",
		"cnt": "522"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "FLL",
		"cnt": "125"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "IAH",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "PHX",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "TUL",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MAF",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "CVG",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "LAX",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "JAX",
		"cnt": "183"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "PHX",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "ORD",
		"cnt": "322"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "MCO",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PHX",
		"cnt": "363"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LNK",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "ATL",
		"cnt": "113"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "ATL",
		"cnt": "676"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "BOS",
		"cnt": "1732"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "800"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "PIT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "CLE",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DFW",
		"cnt": "294"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "PIE",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "838"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SYR",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "FAY",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MCI",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "TEX",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "RAP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "CLT",
		"cnt": "355"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MEM",
		"cnt": "185"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SAT",
		"cnt": "556"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "SHV",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "MDW",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "CLE",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "RSW",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "TPA",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "ROW",
		"airport2": "DFW",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ROC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "GRR",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "HLN",
		"airport2": "MSP",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "GPT",
		"airport2": "IAH",
		"cnt": "254"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SJU",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "BNA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MSY",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "PDX",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "SLC",
		"cnt": "57"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "RNO",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "HSV",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "LFT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "TPA",
		"cnt": "155"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "RSW",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "LAS",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PHL",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CAE",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MCO",
		"cnt": "219"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "DCA",
		"cnt": "1567"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PHX",
		"cnt": "975"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JFK",
		"cnt": "57"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PWM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BTV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SJC",
		"cnt": "432"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "SFO",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SYR",
		"cnt": "123"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "EWR",
		"cnt": "65"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CSG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "ABE",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TYR",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "LAX",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "XNA",
		"cnt": "230"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "RIC",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SPI",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "FNT",
		"airport2": "TPA",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "TUL",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "ATL",
		"cnt": "1615"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "MCO",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "STL",
		"cnt": "352"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "OKC",
		"cnt": "409"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "EWR",
		"cnt": "348"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PSE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "UTM",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "DEN",
		"cnt": "672"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "PBI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "346"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "702"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "877"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "RDU",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "BUR",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "PSE",
		"airport2": "JFK",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SMF",
		"cnt": "586"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "BRW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "TUL",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "BET",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MOB",
		"cnt": "440"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SFO",
		"cnt": "838"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "DEN",
		"cnt": "1218"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "BQN",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "406"
	},
	{
		"airline": "all",
		"airport1": "SHV",
		"airport2": "IAH",
		"cnt": "124"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PHF",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "1381"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "GEG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "TPA",
		"cnt": "442"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "MSP",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MSP",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "MCI",
		"cnt": "521"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "ORD",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "IAH",
		"cnt": "352"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "all",
		"airport1": "BPT",
		"airport2": "IAH",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "BZN",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "SEA",
		"cnt": "710"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SFO",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "LGA",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "IAH",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "PHX",
		"cnt": "577"
	},
	{
		"airline": "all",
		"airport1": "GTF",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "ATL",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "ATL",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SNA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "696"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LAX",
		"cnt": "1383"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "KOA",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GJT",
		"cnt": "341"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LAS",
		"cnt": "1221"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "SNA",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "DEN",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "SFO",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "SJC",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PVD",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "BWI",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LEX",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "ATL",
		"cnt": "556"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GPT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "ORD",
		"cnt": "229"
	},
	{
		"airline": "all",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "357"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "BOS",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MTJ",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "SFO",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ABQ",
		"cnt": "744"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "LFT",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MOB",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "GRR",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HPN",
		"cnt": "324"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "EWR",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "FLL",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SJC",
		"cnt": "261"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MEM",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "TPA",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ABI",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "DFW",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "DAY",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "PVD",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MCO",
		"cnt": "673"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DHN",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MRY",
		"airport2": "PHX",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "PBI",
		"airport2": "DCA",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "193"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "DFW",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CRP",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LRD",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "ATL",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "DTW",
		"cnt": "301"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ABQ",
		"cnt": "444"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "BMI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "HOU",
		"cnt": "205"
	},
	{
		"airline": "all",
		"airport1": "BMI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "548"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "DEN",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "STT",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "1395"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "GRB",
		"cnt": "488"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MFR",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DEN",
		"cnt": "62"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "IAD",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TYS",
		"cnt": "384"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "TPA",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "CHA",
		"airport2": "ATL",
		"cnt": "518"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "STL",
		"cnt": "413"
	},
	{
		"airline": "all",
		"airport1": "ICT",
		"airport2": "IAH",
		"cnt": "234"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MDW",
		"cnt": "488"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "PVD",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MCO",
		"cnt": "275"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GUM",
		"airport2": "SPN",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PWM",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "633"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "LAS",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SMF",
		"cnt": "405"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "ATL",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "IDA",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PIT",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "MIA",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "HSV",
		"cnt": "142"
	},
	{
		"airline": "all",
		"airport1": "ADQ",
		"airport2": "ANC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "IAH",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SEA",
		"cnt": "534"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LBB",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "SEA",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MSY",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "PSC",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "HPN",
		"cnt": "172"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PBI",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "ATL",
		"cnt": "722"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "TPA",
		"cnt": "426"
	},
	{
		"airline": "all",
		"airport1": "DAB",
		"airport2": "CLT",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "EWR",
		"cnt": "169"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ATL",
		"cnt": "769"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "ATL",
		"cnt": "529"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OAK",
		"cnt": "439"
	},
	{
		"airline": "all",
		"airport1": "LCH",
		"airport2": "IAH",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "DTW",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SGF",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "BWI",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MTJ",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "CLT",
		"cnt": "619"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "JNU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "LAS",
		"cnt": "652"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "PHX",
		"cnt": "170"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "JAX",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SYR",
		"cnt": "22"
	},
	{
		"airline": "all",
		"airport1": "MQT",
		"airport2": "TVC",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "CRP",
		"airport2": "HOU",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "PHX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PBI",
		"cnt": "336"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "CLT",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "BTM",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DFW",
		"cnt": "544"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "ORD",
		"cnt": "450"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "BHM",
		"cnt": "302"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "CLE",
		"cnt": "39"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "ATL",
		"cnt": "440"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "DEN",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "FLL",
		"cnt": "420"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "RKS",
		"airport2": "SLC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "DEN",
		"cnt": "637"
	},
	{
		"airline": "all",
		"airport1": "MYR",
		"airport2": "CLT",
		"cnt": "204"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "LAX",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MEM",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "PHL",
		"cnt": "251"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "IND",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RAP",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "PBI",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "CLE",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MCO",
		"cnt": "548"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MCI",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "EWR",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "DFW",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "CLT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SEA",
		"cnt": "547"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "PHX",
		"cnt": "205"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "DFW",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PSC",
		"airport2": "DEN",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "TPA",
		"cnt": "113"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "ANC",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SMF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EWN",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EWR",
		"cnt": "824"
	},
	{
		"airline": "all",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "410"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "ATL",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "PIT",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "ORD",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "RSW",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "ATL",
		"cnt": "585"
	},
	{
		"airline": "all",
		"airport1": "IPL",
		"airport2": "LAX",
		"cnt": "77"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "RNO",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "BNA",
		"cnt": "253"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CID",
		"cnt": "313"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "MCO",
		"cnt": "446"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "JFK",
		"cnt": "307"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CHS",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PWM",
		"cnt": "81"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "DTW",
		"cnt": "466"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "PHX",
		"cnt": "232"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "PIT",
		"cnt": "6"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "MIA",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SFO",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SFO",
		"cnt": "518"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "AUS",
		"cnt": "73"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TLH",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "RSW",
		"cnt": "70"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "GPT",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "ATL",
		"cnt": "478"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BQK",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "1025"
	},
	{
		"airline": "all",
		"airport1": "ADK",
		"airport2": "ANC",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "HDN",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MAF",
		"cnt": "99"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "JFK",
		"cnt": "179"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "839"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LAS",
		"cnt": "711"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "RSW",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "PHX",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "OAK",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "ORD",
		"cnt": "550"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "TPA",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "AEX",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "SAN",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "CAE",
		"airport2": "IAD",
		"cnt": "188"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "LAX",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "381"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "XNA",
		"cnt": "482"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "OAK",
		"cnt": "107"
	},
	{
		"airline": "all",
		"airport1": "CHA",
		"airport2": "DTW",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "ATL",
		"cnt": "512"
	},
	{
		"airline": "all",
		"airport1": "MSO",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "PIT",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "491"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DEN",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "HRL",
		"airport2": "IAH",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "DAY",
		"cnt": "174"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MSP",
		"cnt": "62"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "DFW",
		"cnt": "560"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HRL",
		"airport2": "SAT",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "JAX",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "OTZ",
		"airport2": "OME",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CPR",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "EWR",
		"cnt": "178"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MIA",
		"cnt": "944"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "DTW",
		"cnt": "274"
	},
	{
		"airline": "all",
		"airport1": "SGF",
		"airport2": "MEM",
		"cnt": "58"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "LMT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MKE",
		"cnt": "317"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "OMA",
		"cnt": "210"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MDW",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DCA",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SLC",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ATL",
		"cnt": "1043"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PDX",
		"cnt": "632"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "OKC",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "ATL",
		"cnt": "579"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "OMA",
		"cnt": "86"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MSY",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "TPA",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "STX",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "OKC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CLE",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "TPA",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "CLE",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EVV",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "EWR",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "RSW",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "ECP",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "DTW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "RDU",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ICT",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "435"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "FLL",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "RNO",
		"cnt": "322"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "OGG",
		"cnt": "6"
	},
	{
		"airline": "all",
		"airport1": "LIH",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "IAH",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MFE",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "KTN",
		"airport2": "SEA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "TUL",
		"cnt": "193"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "ONT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MLI",
		"airport2": "ORD",
		"cnt": "161"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "PHX",
		"cnt": "598"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "OAK",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "OTH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "OMA",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PNS",
		"cnt": "226"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "BWI",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CVG",
		"cnt": "376"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SJC",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "TUL",
		"cnt": "67"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ORF",
		"cnt": "204"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "CVG",
		"cnt": "26"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "CLT",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "CDC",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SJU",
		"cnt": "538"
	},
	{
		"airline": "all",
		"airport1": "FAY",
		"airport2": "ATL",
		"cnt": "482"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MSY",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "EWR",
		"cnt": "203"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MDW",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SMF",
		"cnt": "430"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MSP",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "GCC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "BWI",
		"cnt": "251"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "OKC",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "LGB",
		"cnt": "209"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MRY",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "SUN",
		"airport2": "SLC",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "1991"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SHV",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "JFK",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "OTH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "GRB",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MFR",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DCA",
		"cnt": "30"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "LAS",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MLI",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "RDM",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "PHL",
		"cnt": "76"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MLU",
		"cnt": "18"
	},
	{
		"airline": "all",
		"airport1": "PBI",
		"airport2": "TPA",
		"cnt": "201"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "PSC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "PHL",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "RDU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BWI",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "394"
	},
	{
		"airline": "all",
		"airport1": "ITO",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "RDU",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "JAX",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CHA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "MCO",
		"cnt": "95"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "MDW",
		"cnt": "304"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MEM",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "EWR",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "TPA",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CAK",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "EWR",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SGF",
		"airport2": "ORD",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MHT",
		"cnt": "35"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "MIA",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TYS",
		"cnt": "269"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BDL",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SDF",
		"cnt": "404"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "DFW",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "DFW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "KOA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SNA",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "BOS",
		"cnt": "302"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SJC",
		"cnt": "127"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "284"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TYS",
		"cnt": "33"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "GSP",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SJU",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "LGA",
		"cnt": "163"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "TPA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "DEN",
		"cnt": "399"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "ATL",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LFT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "827"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "IND",
		"cnt": "107"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "LGA",
		"cnt": "737"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "CLE",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "640"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "CLT",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "CLE",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "BTR",
		"cnt": "237"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PNS",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "IAD",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "PSP",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OMA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "PSC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "IAD",
		"cnt": "141"
	},
	{
		"airline": "all",
		"airport1": "EKO",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MDT",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "PDX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "IAH",
		"cnt": "383"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "COS",
		"cnt": "604"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "HRL",
		"cnt": "358"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "DEN",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "FSM",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ACT",
		"airport2": "DFW",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "HLN",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "FSD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "444"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "IAH",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "PBI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "IAD",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "470"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "LWB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "MCO",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "IAD",
		"cnt": "570"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "IAH",
		"cnt": "483"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "MSP",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "CLT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "XNA",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "DRO",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SLC",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MSY",
		"cnt": "336"
	},
	{
		"airline": "all",
		"airport1": "GNV",
		"airport2": "ATL",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "DTW",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MSN",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "OME",
		"airport2": "ANC",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "RNO",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PHL",
		"cnt": "1162"
	},
	{
		"airline": "all",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "386"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "PBI",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "EWR",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "245"
	},
	{
		"airline": "HA",
		"airport1": "HNL",
		"airport2": "LIH",
		"cnt": "940"
	},
	{
		"airline": "HA",
		"airport1": "LAS",
		"airport2": "OGG",
		"cnt": "16"
	},
	{
		"airline": "HA",
		"airport1": "SFO",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "SJC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "PDX",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "ITO",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "PDX",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "OGG",
		"airport2": "HNL",
		"cnt": "1344"
	},
	{
		"airline": "HA",
		"airport1": "SMF",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "OAK",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "HA",
		"airport1": "PHX",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "ITO",
		"airport2": "HNL",
		"cnt": "768"
	},
	{
		"airline": "HA",
		"airport1": "KOA",
		"airport2": "HNL",
		"cnt": "956"
	},
	{
		"airline": "HA",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "80"
	},
	{
		"airline": "HA",
		"airport1": "SAN",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "SEA",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "LIH",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "HA",
		"airport1": "KOA",
		"airport2": "OGG",
		"cnt": "112"
	},
	{
		"airline": "HA",
		"airport1": "LAS",
		"airport2": "HNL",
		"cnt": "136"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "CLT",
		"cnt": "134"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "BOS",
		"cnt": "8"
	},
	{
		"airline": "CO",
		"airport1": "SNA",
		"airport2": "IAH",
		"cnt": "252"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SMF",
		"cnt": "164"
	},
	{
		"airline": "CO",
		"airport1": "PHX",
		"airport2": "EWR",
		"cnt": "180"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "PBI",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "HNL",
		"airport2": "GUM",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "EWR",
		"cnt": "603"
	},
	{
		"airline": "CO",
		"airport1": "PDX",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "55"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "BOS",
		"cnt": "408"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "GUC",
		"cnt": "42"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "TUL",
		"cnt": "48"
	},
	{
		"airline": "CO",
		"airport1": "OKC",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "ORD",
		"airport2": "EWR",
		"cnt": "346"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "ORD",
		"airport2": "FLL",
		"cnt": "52"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "TUS",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "EWR",
		"cnt": "300"
	},
	{
		"airline": "CO",
		"airport1": "SEA",
		"airport2": "IAH",
		"cnt": "295"
	},
	{
		"airline": "CO",
		"airport1": "MCO",
		"airport2": "IAH",
		"cnt": "324"
	},
	{
		"airline": "CO",
		"airport1": "PHL",
		"airport2": "IAH",
		"cnt": "250"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "SJU",
		"cnt": "12"
	},
	{
		"airline": "CO",
		"airport1": "SFO",
		"airport2": "IAH",
		"cnt": "368"
	},
	{
		"airline": "CO",
		"airport1": "OMA",
		"airport2": "IAH",
		"cnt": "77"
	},
	{
		"airline": "CO",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "33"
	},
	{
		"airline": "CO",
		"airport1": "DEN",
		"airport2": "IAH",
		"cnt": "460"
	},
	{
		"airline": "CO",
		"airport1": "BOS",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "CO",
		"airport1": "MIA",
		"airport2": "EWR",
		"cnt": "280"
	},
	{
		"airline": "CO",
		"airport1": "AUS",
		"airport2": "EWR",
		"cnt": "134"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "DEN",
		"cnt": "170"
	},
	{
		"airline": "CO",
		"airport1": "IND",
		"airport2": "EWR",
		"cnt": "2"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "SAT",
		"cnt": "92"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "JAX",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "MSY",
		"airport2": "IAH",
		"cnt": "556"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "SFO",
		"cnt": "272"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "MCO",
		"cnt": "156"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "BQN",
		"cnt": "54"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "CLE",
		"cnt": "130"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "PBI",
		"cnt": "80"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SJC",
		"cnt": "127"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "128"
	},
	{
		"airline": "CO",
		"airport1": "MCI",
		"airport2": "IAH",
		"cnt": "29"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MIA",
		"cnt": "210"
	},
	{
		"airline": "CO",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "100"
	},
	{
		"airline": "CO",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "196"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SJU",
		"cnt": "60"
	},
	{
		"airline": "CO",
		"airport1": "EGE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "156"
	},
	{
		"airline": "CO",
		"airport1": "DEN",
		"airport2": "LAS",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "SNA",
		"airport2": "EWR",
		"cnt": "120"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "518"
	},
	{
		"airline": "CO",
		"airport1": "SEA",
		"airport2": "EWR",
		"cnt": "128"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "CLE",
		"cnt": "330"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "PHX",
		"cnt": "80"
	},
	{
		"airline": "CO",
		"airport1": "MIA",
		"airport2": "CLE",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "DFW",
		"cnt": "234"
	},
	{
		"airline": "CO",
		"airport1": "SAN",
		"airport2": "IAH",
		"cnt": "318"
	},
	{
		"airline": "CO",
		"airport1": "PDX",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "DCA",
		"cnt": "408"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "DEN",
		"cnt": "88"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "TPA",
		"cnt": "266"
	},
	{
		"airline": "CO",
		"airport1": "RNO",
		"airport2": "IAH",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "MTJ",
		"cnt": "14"
	},
	{
		"airline": "CO",
		"airport1": "LGA",
		"airport2": "IAH",
		"cnt": "414"
	},
	{
		"airline": "CO",
		"airport1": "LGA",
		"airport2": "CLE",
		"cnt": "64"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SAT",
		"cnt": "412"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "TPA",
		"cnt": "310"
	},
	{
		"airline": "CO",
		"airport1": "FLL",
		"airport2": "EWR",
		"cnt": "408"
	},
	{
		"airline": "CO",
		"airport1": "RSW",
		"airport2": "CLE",
		"cnt": "105"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "TPA",
		"cnt": "78"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MTJ",
		"cnt": "44"
	},
	{
		"airline": "CO",
		"airport1": "ORD",
		"airport2": "PBI",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "EGE",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "OGG",
		"cnt": "40"
	},
	{
		"airline": "CO",
		"airport1": "SAN",
		"airport2": "EWR",
		"cnt": "160"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "EWR",
		"cnt": "320"
	},
	{
		"airline": "CO",
		"airport1": "ANC",
		"airport2": "SEA",
		"cnt": "80"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "IAH",
		"cnt": "383"
	},
	{
		"airline": "CO",
		"airport1": "DFW",
		"airport2": "IAH",
		"cnt": "108"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "MSY",
		"cnt": "96"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "62"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "262"
	},
	{
		"airline": "CO",
		"airport1": "ATL",
		"airport2": "EWR",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MFE",
		"cnt": "168"
	},
	{
		"airline": "CO",
		"airport1": "RDU",
		"airport2": "IAH",
		"cnt": "102"
	},
	{
		"airline": "CO",
		"airport1": "SFO",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "IAH",
		"cnt": "483"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "ONT",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "33"
	},
	{
		"airline": "CO",
		"airport1": "HNL",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "STT",
		"airport2": "EWR",
		"cnt": "64"
	},
	{
		"airline": "CO",
		"airport1": "MCO",
		"airport2": "EWR",
		"cnt": "492"
	},
	{
		"airline": "CO",
		"airport1": "FLL",
		"airport2": "IAH",
		"cnt": "266"
	},
	{
		"airline": "CO",
		"airport1": "GUM",
		"airport2": "SPN",
		"cnt": "2"
	},
	{
		"airline": "CO",
		"airport1": "FLL",
		"airport2": "CLE",
		"cnt": "101"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "PBI",
		"cnt": "388"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "SJU",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "EWR",
		"cnt": "318"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "14"
	},
	{
		"airline": "CO",
		"airport1": "AUS",
		"airport2": "IAH",
		"cnt": "416"
	},
	{
		"airline": "CO",
		"airport1": "HDN",
		"airport2": "EWR",
		"cnt": "8"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "BWI",
		"cnt": "202"
	},
	{
		"airline": "CO",
		"airport1": "CMH",
		"airport2": "IAH",
		"cnt": "25"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "IND",
		"cnt": "82"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "RSW",
		"cnt": "185"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "CLE",
		"cnt": "108"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "DEN",
		"cnt": "92"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "AUS",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "LAS",
		"cnt": "275"
	},
	{
		"airline": "UA",
		"airport1": "MSP",
		"airport2": "ORD",
		"cnt": "240"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "276"
	},
	{
		"airline": "UA",
		"airport1": "LGA",
		"airport2": "ORD",
		"cnt": "758"
	},
	{
		"airline": "UA",
		"airport1": "MSY",
		"airport2": "DEN",
		"cnt": "123"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SNA",
		"cnt": "214"
	},
	{
		"airline": "UA",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "CVG",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "LIH",
		"airport2": "LAX",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "166"
	},
	{
		"airline": "UA",
		"airport1": "PHX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "494"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "UA",
		"airport1": "OKC",
		"airport2": "DEN",
		"cnt": "89"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "ORD",
		"cnt": "6"
	},
	{
		"airline": "UA",
		"airport1": "DFW",
		"airport2": "LAX",
		"cnt": "2"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "FSD",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "SFO",
		"cnt": "512"
	},
	{
		"airline": "UA",
		"airport1": "ICT",
		"airport2": "DEN",
		"cnt": "52"
	},
	{
		"airline": "UA",
		"airport1": "MCO",
		"airport2": "ORD",
		"cnt": "326"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "BDL",
		"cnt": "164"
	},
	{
		"airline": "UA",
		"airport1": "CMH",
		"airport2": "DEN",
		"cnt": "66"
	},
	{
		"airline": "UA",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "TPA",
		"cnt": "164"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "108"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "33"
	},
	{
		"airline": "UA",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "327"
	},
	{
		"airline": "UA",
		"airport1": "RNO",
		"airport2": "DEN",
		"cnt": "123"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "SFO",
		"cnt": "270"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "LAX",
		"cnt": "798"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "90"
	},
	{
		"airline": "UA",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "68"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "IAD",
		"cnt": "414"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "IAD",
		"cnt": "417"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "DEN",
		"cnt": "460"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "IAH",
		"cnt": "44"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "PHL",
		"cnt": "96"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "140"
	},
	{
		"airline": "UA",
		"airport1": "EWR",
		"airport2": "DEN",
		"cnt": "76"
	},
	{
		"airline": "UA",
		"airport1": "MCI",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "SJU",
		"cnt": "96"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "STT",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "MIA",
		"cnt": "35"
	},
	{
		"airline": "UA",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "BOI",
		"airport2": "ORD",
		"cnt": "12"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "BZN",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "MSY",
		"airport2": "IAD",
		"cnt": "90"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "BOS",
		"cnt": "360"
	},
	{
		"airline": "UA",
		"airport1": "SNA",
		"airport2": "SFO",
		"cnt": "190"
	},
	{
		"airline": "UA",
		"airport1": "JAC",
		"airport2": "ORD",
		"cnt": "54"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SLC",
		"cnt": "82"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "SEA",
		"cnt": "308"
	},
	{
		"airline": "UA",
		"airport1": "EWR",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "OAK",
		"cnt": "98"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "BDL",
		"cnt": "136"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "LIH",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "LGA",
		"cnt": "250"
	},
	{
		"airline": "UA",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "14"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "ORD",
		"cnt": "554"
	},
	{
		"airline": "UA",
		"airport1": "OGG",
		"airport2": "SFO",
		"cnt": "120"
	},
	{
		"airline": "UA",
		"airport1": "PDX",
		"airport2": "SFO",
		"cnt": "146"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "STT",
		"cnt": "17"
	},
	{
		"airline": "UA",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "88"
	},
	{
		"airline": "UA",
		"airport1": "EGE",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PDX",
		"cnt": "244"
	},
	{
		"airline": "UA",
		"airport1": "PSP",
		"airport2": "DEN",
		"cnt": "32"
	},
	{
		"airline": "UA",
		"airport1": "SMF",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "311"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "LAX",
		"cnt": "207"
	},
	{
		"airline": "UA",
		"airport1": "MIA",
		"airport2": "DEN",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "582"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "MSY",
		"cnt": "23"
	},
	{
		"airline": "UA",
		"airport1": "DFW",
		"airport2": "DEN",
		"cnt": "185"
	},
	{
		"airline": "UA",
		"airport1": "SAN",
		"airport2": "ORD",
		"cnt": "238"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "176"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "BOI",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "248"
	},
	{
		"airline": "UA",
		"airport1": "JFK",
		"airport2": "SFO",
		"cnt": "384"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "SLC",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "BWI",
		"cnt": "198"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "LIH",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "BUF",
		"airport2": "ORD",
		"cnt": "72"
	},
	{
		"airline": "UA",
		"airport1": "SJC",
		"airport2": "DEN",
		"cnt": "127"
	},
	{
		"airline": "UA",
		"airport1": "MCO",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "66"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "DFW",
		"cnt": "84"
	},
	{
		"airline": "UA",
		"airport1": "BWI",
		"airport2": "DEN",
		"cnt": "198"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "ORD",
		"cnt": "386"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "71"
	},
	{
		"airline": "UA",
		"airport1": "HNL",
		"airport2": "SFO",
		"cnt": "212"
	},
	{
		"airline": "UA",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "IAD",
		"cnt": "273"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "212"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "SJU",
		"cnt": "72"
	},
	{
		"airline": "UA",
		"airport1": "SMF",
		"airport2": "DEN",
		"cnt": "158"
	},
	{
		"airline": "UA",
		"airport1": "MSP",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "315"
	},
	{
		"airline": "UA",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "IAD",
		"cnt": "141"
	},
	{
		"airline": "UA",
		"airport1": "SEA",
		"airport2": "IAD",
		"cnt": "168"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "MDT",
		"cnt": "52"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "530"
	},
	{
		"airline": "UA",
		"airport1": "GEG",
		"airport2": "DEN",
		"cnt": "106"
	},
	{
		"airline": "UA",
		"airport1": "TPA",
		"airport2": "DEN",
		"cnt": "116"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "MTJ",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "MCO",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "HNL",
		"airport2": "DEN",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "CLT",
		"cnt": "81"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "OGG",
		"cnt": "6"
	},
	{
		"airline": "UA",
		"airport1": "PDX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "137"
	},
	{
		"airline": "UA",
		"airport1": "TUL",
		"airport2": "DEN",
		"cnt": "100"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "RNO",
		"cnt": "39"
	},
	{
		"airline": "UA",
		"airport1": "CMH",
		"airport2": "ORD",
		"cnt": "82"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "263"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "86"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "1"
	},
	{
		"airline": "UA",
		"airport1": "PSP",
		"airport2": "ORD",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "IAD",
		"cnt": "404"
	},
	{
		"airline": "UA",
		"airport1": "SAT",
		"airport2": "IAD",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "32"
	},
	{
		"airline": "UA",
		"airport1": "PDX",
		"airport2": "DEN",
		"cnt": "170"
	},
	{
		"airline": "UA",
		"airport1": "MCO",
		"airport2": "DEN",
		"cnt": "228"
	},
	{
		"airline": "UA",
		"airport1": "SNA",
		"airport2": "ORD",
		"cnt": "162"
	},
	{
		"airline": "UA",
		"airport1": "BIL",
		"airport2": "DEN",
		"cnt": "100"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "DEN",
		"cnt": "295"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "OMA",
		"cnt": "182"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "MCO",
		"cnt": "286"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "CLE",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "SAN",
		"cnt": "352"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "123"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "TPA",
		"cnt": "212"
	},
	{
		"airline": "UA",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "DSM",
		"cnt": "88"
	},
	{
		"airline": "UA",
		"airport1": "STL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "OGG",
		"airport2": "KOA",
		"cnt": "6"
	},
	{
		"airline": "UA",
		"airport1": "STT",
		"airport2": "SJU",
		"cnt": "25"
	},
	{
		"airline": "UA",
		"airport1": "SMF",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "DCA",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "ONT",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "UA",
		"airport1": "PHX",
		"airport2": "DEN",
		"cnt": "296"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "PHL",
		"cnt": "52"
	},
	{
		"airline": "UA",
		"airport1": "IAH",
		"airport2": "SFO",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "RDU",
		"airport2": "ORD",
		"cnt": "28"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PHX",
		"cnt": "205"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "108"
	},
	{
		"airline": "UA",
		"airport1": "MSY",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "40"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "JAC",
		"airport2": "DEN",
		"cnt": "68"
	},
	{
		"airline": "UA",
		"airport1": "DFW",
		"airport2": "ORD",
		"cnt": "100"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "37"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "242"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "CAK",
		"cnt": "72"
	},
	{
		"airline": "F9",
		"airport1": "FLL",
		"airport2": "MKE",
		"cnt": "2"
	},
	{
		"airline": "F9",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "60"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "MCO",
		"cnt": "82"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "TUS",
		"cnt": "110"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "BOS",
		"cnt": "120"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "DTW",
		"cnt": "152"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "PIE",
		"cnt": "52"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "150"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "152"
	},
	{
		"airline": "F9",
		"airport1": "MDW",
		"airport2": "DEN",
		"cnt": "192"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "230"
	},
	{
		"airline": "F9",
		"airport1": "DCA",
		"airport2": "DEN",
		"cnt": "167"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "DAY",
		"cnt": "104"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "OKC",
		"cnt": "2"
	},
	{
		"airline": "F9",
		"airport1": "STL",
		"airport2": "DEN",
		"cnt": "128"
	},
	{
		"airline": "F9",
		"airport1": "LAS",
		"airport2": "DEN",
		"cnt": "374"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "RSW",
		"cnt": "32"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MSN",
		"cnt": "48"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "196"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "137"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "LGA",
		"cnt": "110"
	},
	{
		"airline": "F9",
		"airport1": "MCI",
		"airport2": "DEN",
		"cnt": "82"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "DEN",
		"cnt": "162"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "4"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PHF",
		"cnt": "24"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "92"
	},
	{
		"airline": "F9",
		"airport1": "SLC",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "LAX",
		"cnt": "280"
	},
	{
		"airline": "F9",
		"airport1": "DCA",
		"airport2": "MKE",
		"cnt": "101"
	},
	{
		"airline": "F9",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "98"
	},
	{
		"airline": "F9",
		"airport1": "SNA",
		"airport2": "DEN",
		"cnt": "222"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MCO",
		"cnt": "115"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "F9",
		"airport1": "TPA",
		"airport2": "DEN",
		"cnt": "80"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "40"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "LAX",
		"cnt": "16"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "104"
	},
	{
		"airline": "F9",
		"airport1": "HOU",
		"airport2": "DEN",
		"cnt": "106"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "285"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "224"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "LGA",
		"cnt": "148"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PDX",
		"cnt": "205"
	},
	{
		"airline": "AS",
		"airport1": "YAK",
		"airport2": "CDV",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "ANC",
		"cnt": "410"
	},
	{
		"airline": "AS",
		"airport1": "ATL",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SNA",
		"cnt": "438"
	},
	{
		"airline": "AS",
		"airport1": "BUR",
		"airport2": "SEA",
		"cnt": "160"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "SCC",
		"cnt": "28"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SJC",
		"cnt": "280"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "OTZ",
		"cnt": "84"
	},
	{
		"airline": "AS",
		"airport1": "LAS",
		"airport2": "SEA",
		"cnt": "390"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "OAK",
		"cnt": "208"
	},
	{
		"airline": "AS",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "143"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "DFW",
		"cnt": "155"
	},
	{
		"airline": "AS",
		"airport1": "ORD",
		"airport2": "PDX",
		"cnt": "46"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "KTN",
		"airport2": "SEA",
		"cnt": "168"
	},
	{
		"airline": "AS",
		"airport1": "KTN",
		"airport2": "WRG",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SCC",
		"airport2": "BRW",
		"cnt": "36"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "KOA",
		"cnt": "32"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "MIA",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "SIT",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "JNU",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "PSP",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "PHX",
		"cnt": "152"
	},
	{
		"airline": "AS",
		"airport1": "ADK",
		"airport2": "ANC",
		"cnt": "16"
	},
	{
		"airline": "AS",
		"airport1": "SJC",
		"airport2": "OGG",
		"cnt": "24"
	},
	{
		"airline": "AS",
		"airport1": "SFO",
		"airport2": "SEA",
		"cnt": "376"
	},
	{
		"airline": "AS",
		"airport1": "AUS",
		"airport2": "SEA",
		"cnt": "52"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "LAX",
		"cnt": "523"
	},
	{
		"airline": "AS",
		"airport1": "OTZ",
		"airport2": "OME",
		"cnt": "84"
	},
	{
		"airline": "AS",
		"airport1": "AUS",
		"airport2": "SJC",
		"cnt": "94"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "BRW",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SMF",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "AS",
		"airport1": "ADQ",
		"airport2": "ANC",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "PHX",
		"airport2": "SEA",
		"cnt": "264"
	},
	{
		"airline": "AS",
		"airport1": "HNL",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "BET",
		"cnt": "160"
	},
	{
		"airline": "AS",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "266"
	},
	{
		"airline": "AS",
		"airport1": "TUS",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SMF",
		"cnt": "216"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "PSP",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "LAS",
		"airport2": "BLI",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "OAK",
		"airport2": "KOA",
		"cnt": "24"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "KOA",
		"cnt": "80"
	},
	{
		"airline": "AS",
		"airport1": "SIT",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "MCO",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "SJC",
		"airport2": "PDX",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "ANC",
		"cnt": "168"
	},
	{
		"airline": "AS",
		"airport1": "CDV",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "YAK",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "SNA",
		"cnt": "224"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "SCC",
		"cnt": "40"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "EWR",
		"cnt": "108"
	},
	{
		"airline": "AS",
		"airport1": "LAS",
		"airport2": "PDX",
		"cnt": "160"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "ANC",
		"cnt": "24"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "GEG",
		"cnt": "136"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SAN",
		"cnt": "376"
	},
	{
		"airline": "AS",
		"airport1": "BOS",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "ANC",
		"cnt": "670"
	},
	{
		"airline": "AS",
		"airport1": "SFO",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "PSG",
		"airport2": "JNU",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "WRG",
		"airport2": "PSG",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "BRW",
		"airport2": "ANC",
		"cnt": "36"
	},
	{
		"airline": "AS",
		"airport1": "ONT",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "AS",
		"airport1": "DCA",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "DCA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "OAK",
		"airport2": "OGG",
		"cnt": "32"
	},
	{
		"airline": "AS",
		"airport1": "SAN",
		"airport2": "PDX",
		"cnt": "168"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "164"
	},
	{
		"airline": "AS",
		"airport1": "PSP",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "OME",
		"airport2": "ANC",
		"cnt": "84"
	},
	{
		"airline": "US",
		"airport1": "DFW",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "SAN",
		"airport2": "PHL",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "SNA",
		"airport2": "PHX",
		"cnt": "320"
	},
	{
		"airline": "US",
		"airport1": "TUS",
		"airport2": "PHX",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "DFW",
		"airport2": "PHL",
		"cnt": "256"
	},
	{
		"airline": "US",
		"airport1": "SAN",
		"airport2": "PHX",
		"cnt": "344"
	},
	{
		"airline": "US",
		"airport1": "IND",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "EWR",
		"airport2": "CLT",
		"cnt": "432"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "LAX",
		"cnt": "224"
	},
	{
		"airline": "US",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "470"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "RSW",
		"cnt": "80"
	},
	{
		"airline": "US",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "272"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "LAS",
		"cnt": "280"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "RSW",
		"cnt": "192"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MCI",
		"cnt": "160"
	},
	{
		"airline": "US",
		"airport1": "MSY",
		"airport2": "PHL",
		"cnt": "100"
	},
	{
		"airline": "US",
		"airport1": "EWR",
		"airport2": "PHX",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "RDU",
		"cnt": "232"
	},
	{
		"airline": "US",
		"airport1": "PBI",
		"airport2": "DCA",
		"cnt": "164"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "PIT",
		"cnt": "188"
	},
	{
		"airline": "US",
		"airport1": "SJC",
		"airport2": "PHX",
		"cnt": "276"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "PHX",
		"cnt": "336"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "LGA",
		"cnt": "500"
	},
	{
		"airline": "US",
		"airport1": "FLL",
		"airport2": "DCA",
		"cnt": "212"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "PHL",
		"cnt": "76"
	},
	{
		"airline": "US",
		"airport1": "SYR",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "FLL",
		"airport2": "PHL",
		"cnt": "280"
	},
	{
		"airline": "US",
		"airport1": "DAB",
		"airport2": "CLT",
		"cnt": "32"
	},
	{
		"airline": "US",
		"airport1": "TPA",
		"airport2": "CLT",
		"cnt": "448"
	},
	{
		"airline": "US",
		"airport1": "TPA",
		"airport2": "PHX",
		"cnt": "120"
	},
	{
		"airline": "US",
		"airport1": "LAS",
		"airport2": "BOS",
		"cnt": "54"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "SJU",
		"cnt": "200"
	},
	{
		"airline": "US",
		"airport1": "STT",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "BDL",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "OGG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "TPA",
		"cnt": "274"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MHT",
		"cnt": "32"
	},
	{
		"airline": "US",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "LAS",
		"cnt": "554"
	},
	{
		"airline": "US",
		"airport1": "SYR",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "BNA",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "US",
		"airport1": "RDU",
		"airport2": "CLT",
		"cnt": "390"
	},
	{
		"airline": "US",
		"airport1": "LAS",
		"airport2": "DFW",
		"cnt": "142"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ELP",
		"cnt": "33"
	},
	{
		"airline": "US",
		"airport1": "BOS",
		"airport2": "CLT",
		"cnt": "498"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "DTW",
		"cnt": "204"
	},
	{
		"airline": "US",
		"airport1": "SFO",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "RNO",
		"airport2": "PHX",
		"cnt": "241"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PIT",
		"airport2": "PHX",
		"cnt": "114"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "JAX",
		"cnt": "100"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PIT",
		"airport2": "CLT",
		"cnt": "444"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "STT",
		"cnt": "64"
	},
	{
		"airline": "US",
		"airport1": "SFO",
		"airport2": "LAS",
		"cnt": "104"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "KOA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "JAX",
		"airport2": "CLT",
		"cnt": "336"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "BWI",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PBI",
		"cnt": "336"
	},
	{
		"airline": "US",
		"airport1": "IND",
		"airport2": "CLT",
		"cnt": "72"
	},
	{
		"airline": "US",
		"airport1": "ROC",
		"airport2": "CLT",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "HNL",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "DTW",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PIT",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "JFK",
		"cnt": "170"
	},
	{
		"airline": "US",
		"airport1": "PVD",
		"airport2": "PHL",
		"cnt": "184"
	},
	{
		"airline": "US",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "344"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "CLT",
		"cnt": "504"
	},
	{
		"airline": "US",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "326"
	},
	{
		"airline": "US",
		"airport1": "SMF",
		"airport2": "PHX",
		"cnt": "256"
	},
	{
		"airline": "US",
		"airport1": "MIA",
		"airport2": "CLT",
		"cnt": "360"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "DEN",
		"cnt": "98"
	},
	{
		"airline": "US",
		"airport1": "BDL",
		"airport2": "DCA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "LAX",
		"airport2": "PHL",
		"cnt": "220"
	},
	{
		"airline": "US",
		"airport1": "LGA",
		"airport2": "BOS",
		"cnt": "760"
	},
	{
		"airline": "US",
		"airport1": "LAS",
		"airport2": "PHL",
		"cnt": "272"
	},
	{
		"airline": "US",
		"airport1": "MHT",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "STX",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "FLL",
		"cnt": "448"
	},
	{
		"airline": "US",
		"airport1": "STL",
		"airport2": "CLT",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "BUF",
		"cnt": "72"
	},
	{
		"airline": "US",
		"airport1": "BDL",
		"airport2": "CLT",
		"cnt": "256"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "DCA",
		"cnt": "262"
	},
	{
		"airline": "US",
		"airport1": "MEM",
		"airport2": "CLT",
		"cnt": "32"
	},
	{
		"airline": "US",
		"airport1": "LGA",
		"airport2": "PHL",
		"cnt": "52"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MDT",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "RSW",
		"airport2": "CLT",
		"cnt": "355"
	},
	{
		"airline": "US",
		"airport1": "BUF",
		"airport2": "CLT",
		"cnt": "204"
	},
	{
		"airline": "US",
		"airport1": "PVD",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "DFW",
		"cnt": "14"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "IND",
		"cnt": "64"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ABQ",
		"cnt": "39"
	},
	{
		"airline": "US",
		"airport1": "MIA",
		"airport2": "PHL",
		"cnt": "192"
	},
	{
		"airline": "US",
		"airport1": "SYR",
		"airport2": "CLT",
		"cnt": "144"
	},
	{
		"airline": "US",
		"airport1": "ALB",
		"airport2": "CLT",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "CLT",
		"cnt": "476"
	},
	{
		"airline": "US",
		"airport1": "ATL",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "US",
		"airport1": "MYR",
		"airport2": "CLT",
		"cnt": "152"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "DCA",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "263"
	},
	{
		"airline": "US",
		"airport1": "SEA",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "BUF",
		"cnt": "24"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "JAX",
		"cnt": "156"
	},
	{
		"airline": "US",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "230"
	},
	{
		"airline": "US",
		"airport1": "MSY",
		"airport2": "CLT",
		"cnt": "200"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PVD",
		"cnt": "240"
	},
	{
		"airline": "US",
		"airport1": "BOI",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "CHS",
		"airport2": "CLT",
		"cnt": "40"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "RIC",
		"airport2": "CLT",
		"cnt": "188"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "PHX",
		"cnt": "120"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "PDX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "MKE",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "BWI",
		"cnt": "120"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "SJU",
		"cnt": "152"
	},
	{
		"airline": "US",
		"airport1": "SFO",
		"airport2": "CLT",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "386"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "MSP",
		"cnt": "232"
	},
	{
		"airline": "US",
		"airport1": "MSP",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "BOS",
		"cnt": "176"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PHL",
		"cnt": "539"
	},
	{
		"airline": "US",
		"airport1": "DEN",
		"airport2": "CLT",
		"cnt": "280"
	},
	{
		"airline": "US",
		"airport1": "GEG",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "SLC",
		"airport2": "PHX",
		"cnt": "264"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PWM",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "CMH",
		"cnt": "110"
	},
	{
		"airline": "US",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "154"
	},
	{
		"airline": "US",
		"airport1": "LIH",
		"airport2": "PHX",
		"cnt": "42"
	},
	{
		"airline": "US",
		"airport1": "JFK",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "DFW",
		"cnt": "426"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ABE",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ORD",
		"cnt": "282"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "LGA",
		"cnt": "772"
	},
	{
		"airline": "US",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "372"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "CLT",
		"cnt": "392"
	},
	{
		"airline": "US",
		"airport1": "BOS",
		"airport2": "PHL",
		"cnt": "746"
	},
	{
		"airline": "US",
		"airport1": "ATL",
		"airport2": "PHL",
		"cnt": "216"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "TPA",
		"airport2": "DCA",
		"cnt": "212"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ORD",
		"cnt": "440"
	},
	{
		"airline": "US",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "108"
	},
	{
		"airline": "US",
		"airport1": "SAT",
		"airport2": "CLT",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "DTW",
		"cnt": "176"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "BOS",
		"cnt": "744"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ATL",
		"cnt": "408"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "152"
	},
	{
		"airline": "XE",
		"airport1": "AVL",
		"airport2": "EWR",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "BNA",
		"airport2": "EWR",
		"cnt": "260"
	},
	{
		"airline": "XE",
		"airport1": "BNA",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "XE",
		"airport1": "CHS",
		"airport2": "ORD",
		"cnt": "55"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "MHT",
		"cnt": "5"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "XNA",
		"cnt": "66"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "COS",
		"cnt": "103"
	},
	{
		"airline": "XE",
		"airport1": "MOB",
		"airport2": "IAH",
		"cnt": "260"
	},
	{
		"airline": "XE",
		"airport1": "AVP",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "87"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "OKC",
		"cnt": "117"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "STL",
		"cnt": "137"
	},
	{
		"airline": "XE",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "222"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "GRB",
		"cnt": "90"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "TYS",
		"cnt": "50"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "IAD",
		"cnt": "70"
	},
	{
		"airline": "XE",
		"airport1": "CAK",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "DEN",
		"cnt": "85"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "IAD",
		"cnt": "224"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "ROC",
		"cnt": "132"
	},
	{
		"airline": "XE",
		"airport1": "GSP",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "47"
	},
	{
		"airline": "XE",
		"airport1": "JAX",
		"airport2": "EWR",
		"cnt": "200"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "39"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MAF",
		"cnt": "249"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "DAY",
		"cnt": "91"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "HSV",
		"cnt": "142"
	},
	{
		"airline": "XE",
		"airport1": "CHS",
		"airport2": "EWR",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "PIA",
		"cnt": "39"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "OMA",
		"cnt": "21"
	},
	{
		"airline": "XE",
		"airport1": "AMA",
		"airport2": "IAH",
		"cnt": "198"
	},
	{
		"airline": "XE",
		"airport1": "AVL",
		"airport2": "IAH",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "FSD",
		"cnt": "24"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "TUL",
		"cnt": "184"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "BUF",
		"cnt": "99"
	},
	{
		"airline": "XE",
		"airport1": "VPS",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CVG",
		"cnt": "212"
	},
	{
		"airline": "XE",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "53"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "TVC",
		"cnt": "109"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "EWR",
		"cnt": "203"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "28"
	},
	{
		"airline": "XE",
		"airport1": "ABE",
		"airport2": "ORD",
		"cnt": "195"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "EWR",
		"cnt": "14"
	},
	{
		"airline": "XE",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "21"
	},
	{
		"airline": "XE",
		"airport1": "TUL",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "BHM",
		"airport2": "ORD",
		"cnt": "128"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "81"
	},
	{
		"airline": "XE",
		"airport1": "CLT",
		"airport2": "EWR",
		"cnt": "135"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "50"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "GSP",
		"cnt": "82"
	},
	{
		"airline": "XE",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "77"
	},
	{
		"airline": "XE",
		"airport1": "CAE",
		"airport2": "IAD",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "LIT",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "MSN",
		"cnt": "141"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "28"
	},
	{
		"airline": "XE",
		"airport1": "GRB",
		"airport2": "ORD",
		"cnt": "188"
	},
	{
		"airline": "XE",
		"airport1": "GRR",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "XE",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "44"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "142"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "SDF",
		"cnt": "177"
	},
	{
		"airline": "XE",
		"airport1": "MSN",
		"airport2": "CLE",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "EWR",
		"cnt": "232"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "SAV",
		"cnt": "84"
	},
	{
		"airline": "XE",
		"airport1": "LCH",
		"airport2": "IAH",
		"cnt": "54"
	},
	{
		"airline": "XE",
		"airport1": "LAN",
		"airport2": "ORD",
		"cnt": "26"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "XE",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "68"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "IAH",
		"cnt": "248"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "131"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "SGF",
		"cnt": "51"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "MSY",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "LIT",
		"airport2": "IAH",
		"cnt": "306"
	},
	{
		"airline": "XE",
		"airport1": "GRK",
		"airport2": "IAH",
		"cnt": "29"
	},
	{
		"airline": "XE",
		"airport1": "MHT",
		"airport2": "EWR",
		"cnt": "208"
	},
	{
		"airline": "XE",
		"airport1": "SHV",
		"airport2": "IAH",
		"cnt": "124"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "IAD",
		"cnt": "50"
	},
	{
		"airline": "XE",
		"airport1": "RAP",
		"airport2": "ORD",
		"cnt": "46"
	},
	{
		"airline": "XE",
		"airport1": "BOS",
		"airport2": "CLE",
		"cnt": "76"
	},
	{
		"airline": "XE",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "6"
	},
	{
		"airline": "XE",
		"airport1": "DFW",
		"airport2": "IAH",
		"cnt": "127"
	},
	{
		"airline": "XE",
		"airport1": "CAE",
		"airport2": "ORD",
		"cnt": "40"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "XNA",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MSY",
		"cnt": "34"
	},
	{
		"airline": "XE",
		"airport1": "HRL",
		"airport2": "IAH",
		"cnt": "258"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MSY",
		"cnt": "26"
	},
	{
		"airline": "XE",
		"airport1": "PVD",
		"airport2": "EWR",
		"cnt": "216"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MSP",
		"cnt": "143"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "EWR",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "SAV",
		"cnt": "148"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "168"
	},
	{
		"airline": "XE",
		"airport1": "BNA",
		"airport2": "IAH",
		"cnt": "352"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "DSM",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "HSV",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "TUS",
		"airport2": "IAH",
		"cnt": "73"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MKE",
		"cnt": "186"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CRW",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CMH",
		"cnt": "44"
	},
	{
		"airline": "XE",
		"airport1": "JAX",
		"airport2": "CLE",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "TYS",
		"cnt": "34"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CRP",
		"cnt": "492"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "SYR",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MCI",
		"cnt": "154"
	},
	{
		"airline": "XE",
		"airport1": "OKC",
		"airport2": "DEN",
		"cnt": "77"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MCO",
		"cnt": "6"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MCI",
		"cnt": "390"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "ELP",
		"cnt": "89"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "EWR",
		"cnt": "176"
	},
	{
		"airline": "XE",
		"airport1": "PBI",
		"airport2": "CLE",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "ROC",
		"cnt": "159"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "LRD",
		"cnt": "180"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PBI",
		"cnt": "126"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "15"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "XNA",
		"cnt": "126"
	},
	{
		"airline": "XE",
		"airport1": "MCI",
		"airport2": "IAD",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "CVG",
		"cnt": "54"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "GSP",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "2"
	},
	{
		"airline": "XE",
		"airport1": "BWI",
		"airport2": "EWR",
		"cnt": "132"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "RDU",
		"cnt": "153"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "BTV",
		"cnt": "49"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "XE",
		"airport1": "LNK",
		"airport2": "DEN",
		"cnt": "33"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "IAH",
		"cnt": "97"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SDF",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "BHM",
		"cnt": "302"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "MCI",
		"cnt": "105"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "CLE",
		"cnt": "39"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "AEX",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "IAD",
		"cnt": "24"
	},
	{
		"airline": "XE",
		"airport1": "COS",
		"airport2": "ORD",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "IAD",
		"cnt": "42"
	},
	{
		"airline": "XE",
		"airport1": "GRR",
		"airport2": "CLE",
		"cnt": "150"
	},
	{
		"airline": "XE",
		"airport1": "MIA",
		"airport2": "CLE",
		"cnt": "20"
	},
	{
		"airline": "XE",
		"airport1": "ORF",
		"airport2": "ORD",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "DSM",
		"airport2": "DEN",
		"cnt": "25"
	},
	{
		"airline": "XE",
		"airport1": "DRO",
		"airport2": "DEN",
		"cnt": "49"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "266"
	},
	{
		"airline": "XE",
		"airport1": "GSP",
		"airport2": "IAD",
		"cnt": "68"
	},
	{
		"airline": "XE",
		"airport1": "ROA",
		"airport2": "ORD",
		"cnt": "73"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "BNA",
		"cnt": "179"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "STL",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "111"
	},
	{
		"airline": "XE",
		"airport1": "BDL",
		"airport2": "CLE",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MLU",
		"cnt": "23"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "CID",
		"cnt": "49"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "MSN",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "DCA",
		"cnt": "343"
	},
	{
		"airline": "XE",
		"airport1": "BUF",
		"airport2": "ORD",
		"cnt": "122"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "JAX",
		"cnt": "262"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "RAP",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "65"
	},
	{
		"airline": "XE",
		"airport1": "BWI",
		"airport2": "ORD",
		"cnt": "114"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "BTR",
		"cnt": "237"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SAV",
		"cnt": "70"
	},
	{
		"airline": "XE",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "145"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "CVG",
		"cnt": "85"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "IAH",
		"cnt": "60"
	},
	{
		"airline": "XE",
		"airport1": "MHT",
		"airport2": "CLE",
		"cnt": "134"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "BTV",
		"airport2": "ORD",
		"cnt": "174"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "EWR",
		"cnt": "96"
	},
	{
		"airline": "XE",
		"airport1": "ALB",
		"airport2": "CLE",
		"cnt": "64"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "LGA",
		"cnt": "121"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "SAV",
		"cnt": "94"
	},
	{
		"airline": "XE",
		"airport1": "LNK",
		"airport2": "ORD",
		"cnt": "117"
	},
	{
		"airline": "XE",
		"airport1": "BRO",
		"airport2": "IAH",
		"cnt": "262"
	},
	{
		"airline": "XE",
		"airport1": "FSD",
		"airport2": "ORD",
		"cnt": "232"
	},
	{
		"airline": "XE",
		"airport1": "SDF",
		"airport2": "CLE",
		"cnt": "71"
	},
	{
		"airline": "XE",
		"airport1": "ORF",
		"airport2": "EWR",
		"cnt": "84"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "11"
	},
	{
		"airline": "XE",
		"airport1": "BUF",
		"airport2": "CLE",
		"cnt": "46"
	},
	{
		"airline": "XE",
		"airport1": "MYR",
		"airport2": "EWR",
		"cnt": "40"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "SDF",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MTJ",
		"cnt": "16"
	},
	{
		"airline": "XE",
		"airport1": "MSP",
		"airport2": "EWR",
		"cnt": "220"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "PIT",
		"cnt": "30"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "RDU",
		"cnt": "138"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "LEX",
		"airport2": "IAH",
		"cnt": "92"
	},
	{
		"airline": "XE",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "123"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "OKC",
		"cnt": "284"
	},
	{
		"airline": "XE",
		"airport1": "TYS",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "XE",
		"airport1": "TYS",
		"airport2": "IAH",
		"cnt": "163"
	},
	{
		"airline": "XE",
		"airport1": "CRW",
		"airport2": "ORD",
		"cnt": "98"
	},
	{
		"airline": "XE",
		"airport1": "BDL",
		"airport2": "EWR",
		"cnt": "27"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "ATL",
		"cnt": "134"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "DAY",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "GRR",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "MTJ",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "TPA",
		"cnt": "2"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "PVD",
		"cnt": "92"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "FAR",
		"cnt": "145"
	},
	{
		"airline": "XE",
		"airport1": "LEX",
		"airport2": "ORD",
		"cnt": "72"
	},
	{
		"airline": "XE",
		"airport1": "ROC",
		"airport2": "CLE",
		"cnt": "102"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "BIS",
		"cnt": "45"
	},
	{
		"airline": "XE",
		"airport1": "GPT",
		"airport2": "IAH",
		"cnt": "254"
	},
	{
		"airline": "XE",
		"airport1": "DAL",
		"airport2": "IAH",
		"cnt": "295"
	},
	{
		"airline": "XE",
		"airport1": "MDT",
		"airport2": "ORD",
		"cnt": "92"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "18"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "EWR",
		"cnt": "132"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "MSN",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "ICT",
		"cnt": "71"
	},
	{
		"airline": "XE",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "215"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "DCA",
		"cnt": "138"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "XE",
		"airport1": "LBB",
		"airport2": "IAH",
		"cnt": "202"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "CLE",
		"cnt": "263"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MFE",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "CMH",
		"airport2": "ORD",
		"cnt": "85"
	},
	{
		"airline": "XE",
		"airport1": "GSP",
		"airport2": "IAH",
		"cnt": "104"
	},
	{
		"airline": "XE",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "77"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "RIC",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "DAY",
		"airport2": "IAD",
		"cnt": "172"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "DAY",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SGF",
		"cnt": "95"
	},
	{
		"airline": "XE",
		"airport1": "MCI",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "XE",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "65"
	},
	{
		"airline": "XE",
		"airport1": "SAT",
		"airport2": "IAH",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "226"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "DAY",
		"cnt": "96"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "GRR",
		"cnt": "88"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "BTV",
		"cnt": "40"
	},
	{
		"airline": "XE",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "154"
	},
	{
		"airline": "XE",
		"airport1": "PHL",
		"airport2": "CLE",
		"cnt": "42"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "PIA",
		"cnt": "153"
	},
	{
		"airline": "XE",
		"airport1": "GJT",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CAE",
		"cnt": "94"
	},
	{
		"airline": "XE",
		"airport1": "SDF",
		"airport2": "DEN",
		"cnt": "12"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "TYS",
		"cnt": "190"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "FLL",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "PNS",
		"cnt": "54"
	},
	{
		"airline": "XE",
		"airport1": "CMH",
		"airport2": "EWR",
		"cnt": "169"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "ROA",
		"cnt": "27"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "LIT",
		"cnt": "100"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CHS",
		"cnt": "120"
	},
	{
		"airline": "XE",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "162"
	},
	{
		"airline": "XE",
		"airport1": "STL",
		"airport2": "EWR",
		"cnt": "236"
	},
	{
		"airline": "XE",
		"airport1": "HSV",
		"airport2": "IAD",
		"cnt": "20"
	},
	{
		"airline": "XE",
		"airport1": "BUF",
		"airport2": "EWR",
		"cnt": "65"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PNS",
		"cnt": "226"
	},
	{
		"airline": "XE",
		"airport1": "RIC",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "FSD",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "ALB",
		"airport2": "IAD",
		"cnt": "59"
	},
	{
		"airline": "XE",
		"airport1": "JAN",
		"airport2": "IAH",
		"cnt": "227"
	},
	{
		"airline": "XE",
		"airport1": "MKE",
		"airport2": "IAH",
		"cnt": "189"
	},
	{
		"airline": "XE",
		"airport1": "CID",
		"airport2": "ORD",
		"cnt": "45"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SYR",
		"cnt": "113"
	},
	{
		"airline": "XE",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "14"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "12"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "XNA",
		"cnt": "169"
	},
	{
		"airline": "XE",
		"airport1": "AUS",
		"airport2": "IAH",
		"cnt": "114"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "CLT",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "XE",
		"airport1": "OKC",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "LFT",
		"cnt": "382"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "ORD",
		"cnt": "63"
	},
	{
		"airline": "XE",
		"airport1": "BPT",
		"airport2": "IAH",
		"cnt": "2"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "IND",
		"cnt": "139"
	},
	{
		"airline": "XE",
		"airport1": "BIS",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "CVG",
		"cnt": "200"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "57"
	},
	{
		"airline": "XE",
		"airport1": "ICT",
		"airport2": "IAH",
		"cnt": "234"
	},
	{
		"airline": "XE",
		"airport1": "MKE",
		"airport2": "EWR",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "RIC",
		"cnt": "134"
	},
	{
		"airline": "XE",
		"airport1": "CMH",
		"airport2": "IAD",
		"cnt": "90"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "PBI",
		"cnt": "272"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SFO",
		"cnt": "204"
	},
	{
		"airline": "B6",
		"airport1": "BUR",
		"airport2": "JFK",
		"cnt": "108"
	},
	{
		"airline": "B6",
		"airport1": "JAX",
		"airport2": "JFK",
		"cnt": "145"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "SJU",
		"cnt": "135"
	},
	{
		"airline": "B6",
		"airport1": "PHX",
		"airport2": "LGB",
		"cnt": "1"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "JFK",
		"cnt": "123"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "OAK",
		"cnt": "69"
	},
	{
		"airline": "B6",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "OAK",
		"cnt": "24"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "FLL",
		"cnt": "280"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "RSW",
		"cnt": "324"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PDX",
		"cnt": "24"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BQN",
		"airport2": "JFK",
		"cnt": "81"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "LAS",
		"airport2": "LGB",
		"cnt": "264"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "PDX",
		"cnt": "106"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "LGB",
		"cnt": "50"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "IAD",
		"cnt": "286"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "PSE",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "246"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "HPN",
		"cnt": "168"
	},
	{
		"airline": "B6",
		"airport1": "DEN",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "CLT",
		"cnt": "121"
	},
	{
		"airline": "B6",
		"airport1": "BUR",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "MCO",
		"cnt": "470"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "MCO",
		"cnt": "216"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SYR",
		"cnt": "189"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "RIC",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SMF",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PWM",
		"cnt": "167"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "OAK",
		"cnt": "169"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "JFK",
		"cnt": "103"
	},
	{
		"airline": "B6",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SFO",
		"cnt": "92"
	},
	{
		"airline": "B6",
		"airport1": "DCA",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "HOU",
		"airport2": "JFK",
		"cnt": "98"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "PWM",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "BUF",
		"cnt": "124"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SJC",
		"cnt": "34"
	},
	{
		"airline": "B6",
		"airport1": "BTV",
		"airport2": "JFK",
		"cnt": "200"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SJU",
		"cnt": "135"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "SYR",
		"cnt": "80"
	},
	{
		"airline": "B6",
		"airport1": "LGA",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "JFK",
		"cnt": "379"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "LGB",
		"cnt": "100"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "MSY",
		"cnt": "46"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "B6",
		"airport1": "PSE",
		"airport2": "JFK",
		"cnt": "46"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SRQ",
		"cnt": "60"
	},
	{
		"airline": "B6",
		"airport1": "BDL",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "RSW",
		"cnt": "101"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "LGA",
		"cnt": "278"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "88"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "MCO",
		"cnt": "280"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "MSY",
		"cnt": "147"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "80"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BQN",
		"airport2": "MCO",
		"cnt": "46"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "RDU",
		"cnt": "147"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PHX",
		"cnt": "88"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "TPA",
		"cnt": "235"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "JFK",
		"cnt": "368"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "JFK",
		"cnt": "522"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "LGB",
		"cnt": "35"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SMF",
		"cnt": "32"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "ROC",
		"cnt": "184"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "IAD",
		"cnt": "124"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SEA",
		"cnt": "48"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SEA",
		"cnt": "44"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "DCA",
		"cnt": "376"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "MCO",
		"cnt": "160"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "184"
	},
	{
		"airline": "B6",
		"airport1": "CLT",
		"airport2": "JFK",
		"cnt": "147"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SLC",
		"cnt": "168"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "148"
	},
	{
		"airline": "B6",
		"airport1": "BTV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "SJU",
		"cnt": "259"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "MCO",
		"cnt": "388"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "SFO",
		"cnt": "32"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "FLL",
		"cnt": "360"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SJC",
		"cnt": "40"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "RSW",
		"cnt": "276"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PBI",
		"cnt": "408"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "PBI",
		"cnt": "172"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "RSW",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SJU",
		"cnt": "258"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "RDU",
		"cnt": "216"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "LAS",
		"cnt": "72"
	},
	{
		"airline": "MQ",
		"airport1": "IND",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "ATL",
		"cnt": "368"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "FAT",
		"cnt": "264"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MOB",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MQT",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "BOS",
		"airport2": "LGA",
		"cnt": "350"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CID",
		"cnt": "142"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "OKC",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MDT",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MGM",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CHS",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "CLE",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "XNA",
		"airport2": "DFW",
		"cnt": "387"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "BOS",
		"cnt": "280"
	},
	{
		"airline": "MQ",
		"airport1": "FAY",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MEM",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "GSO",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "CMH",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "ROC",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "ELP",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GPT",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "RDU",
		"cnt": "382"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "314"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "HOU",
		"cnt": "372"
	},
	{
		"airline": "MQ",
		"airport1": "BMI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "GRB",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "MQ",
		"airport1": "SAN",
		"airport2": "LAX",
		"cnt": "656"
	},
	{
		"airline": "MQ",
		"airport1": "CHA",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "ATL",
		"cnt": "370"
	},
	{
		"airline": "MQ",
		"airport1": "LBB",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "MQ",
		"airport1": "ABE",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MLU",
		"cnt": "18"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "BDL",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "MTJ",
		"airport2": "DFW",
		"cnt": "40"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "AEX",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "SPS",
		"cnt": "50"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "220"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "BUF",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "TXK",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "FWA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "BHM",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "DEN",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "268"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "DTW",
		"cnt": "258"
	},
	{
		"airline": "MQ",
		"airport1": "ORF",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "AZO",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "FNT",
		"cnt": "34"
	},
	{
		"airline": "MQ",
		"airport1": "BWI",
		"airport2": "ORD",
		"cnt": "213"
	},
	{
		"airline": "MQ",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "268"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "16"
	},
	{
		"airline": "MQ",
		"airport1": "CHS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MKE",
		"airport2": "DFW",
		"cnt": "274"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MTJ",
		"cnt": "8"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "HDN",
		"cnt": "8"
	},
	{
		"airline": "MQ",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "MQ",
		"airport1": "SGF",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "BNA",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "PNS",
		"cnt": "276"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "LIT",
		"cnt": "550"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "328"
	},
	{
		"airline": "MQ",
		"airport1": "TVC",
		"airport2": "ORD",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "114"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "TYR",
		"cnt": "110"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MAF",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "SHV",
		"airport2": "DFW",
		"cnt": "156"
	},
	{
		"airline": "MQ",
		"airport1": "BNA",
		"airport2": "LGA",
		"cnt": "110"
	},
	{
		"airline": "MQ",
		"airport1": "LEX",
		"airport2": "DFW",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "MQT",
		"airport2": "TVC",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CMI",
		"cnt": "306"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CMH",
		"cnt": "509"
	},
	{
		"airline": "MQ",
		"airport1": "RNO",
		"airport2": "LAX",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "GRB",
		"airport2": "MQT",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "CMH",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LEX",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "JFK",
		"cnt": "57"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "XNA",
		"cnt": "340"
	},
	{
		"airline": "MQ",
		"airport1": "ATL",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CHA",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "220"
	},
	{
		"airline": "MQ",
		"airport1": "RDU",
		"airport2": "JFK",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "MKE",
		"airport2": "ORD",
		"cnt": "34"
	},
	{
		"airline": "MQ",
		"airport1": "CRW",
		"airport2": "ORD",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "RAP",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "AVP",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "PIA",
		"cnt": "150"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CYS",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "AGS",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "SAF",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "JAN",
		"cnt": "440"
	},
	{
		"airline": "MQ",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "208"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "JFK",
		"cnt": "39"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "149"
	},
	{
		"airline": "MQ",
		"airport1": "CLL",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "RIC",
		"cnt": "252"
	},
	{
		"airline": "MQ",
		"airport1": "LSE",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "CMI",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "RDU",
		"airport2": "LGA",
		"cnt": "479"
	},
	{
		"airline": "MQ",
		"airport1": "PIT",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "LFT",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "EVV",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "GSP",
		"airport2": "DFW",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "JAX",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "BTR",
		"cnt": "438"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "DFW",
		"cnt": "273"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DBQ",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "TYS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "IND",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "SAT",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "262"
	},
	{
		"airline": "MQ",
		"airport1": "GGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "TUL",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "CLE",
		"cnt": "156"
	},
	{
		"airline": "MQ",
		"airport1": "BNA",
		"airport2": "ORD",
		"cnt": "379"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "RDU",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "FSD",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MHK",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CMH",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "RST",
		"airport2": "ORD",
		"cnt": "110"
	},
	{
		"airline": "MQ",
		"airport1": "TLH",
		"airport2": "MIA",
		"cnt": "144"
	},
	{
		"airline": "MQ",
		"airport1": "GJT",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "MQ",
		"airport1": "MHK",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ROW",
		"airport2": "DFW",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DTW",
		"cnt": "390"
	},
	{
		"airline": "MQ",
		"airport1": "GRR",
		"airport2": "DFW",
		"cnt": "148"
	},
	{
		"airline": "MQ",
		"airport1": "LCH",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "SBA",
		"airport2": "LAX",
		"cnt": "272"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "SAV",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "EVV",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GUC",
		"cnt": "116"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "ABQ",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CLT",
		"cnt": "212"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "VPS",
		"cnt": "276"
	},
	{
		"airline": "MQ",
		"airport1": "TRI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "FSM",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "ACT",
		"airport2": "DFW",
		"cnt": "100"
	},
	{
		"airline": "MQ",
		"airport1": "PIT",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "PNS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "FSD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MSP",
		"airport2": "LGA",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "AMA",
		"airport2": "DFW",
		"cnt": "179"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CRP",
		"cnt": "434"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "HSV",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "220"
	},
	{
		"airline": "MQ",
		"airport1": "TYS",
		"airport2": "ORD",
		"cnt": "206"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "LRD",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "ABI",
		"cnt": "382"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "AUS",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "RIC",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "CLT",
		"airport2": "MIA",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CAE",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "MLI",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "TOL",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "BNA",
		"cnt": "253"
	},
	{
		"airline": "MQ",
		"airport1": "DSM",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "SAF",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "BRO",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GRK",
		"cnt": "234"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CID",
		"cnt": "264"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "GRB",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "CLT",
		"airport2": "LGA",
		"cnt": "270"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "TLH",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "156"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "DAY",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "BMI",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "XNA",
		"cnt": "120"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "SLC",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "FWA",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MLI",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CSG",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MSN",
		"cnt": "150"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "MRY",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "SYR",
		"cnt": "206"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "IND",
		"cnt": "236"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "TYS",
		"cnt": "269"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "260"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "SDF",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "CMH",
		"cnt": "248"
	},
	{
		"airline": "MQ",
		"airport1": "SGF",
		"airport2": "DFW",
		"cnt": "434"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "JFK",
		"cnt": "280"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "SPI",
		"cnt": "98"
	},
	{
		"airline": "MQ",
		"airport1": "MSY",
		"airport2": "ORD",
		"cnt": "19"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "254"
	},
	{
		"airline": "MQ",
		"airport1": "CRW",
		"airport2": "LGA",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "OKC",
		"airport2": "STL",
		"cnt": "90"
	},
	{
		"airline": "WN",
		"airport1": "SDF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "BWI",
		"cnt": "364"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MHT",
		"cnt": "412"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SEA",
		"cnt": "220"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "LAX",
		"cnt": "189"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "210"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "CLE",
		"cnt": "154"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "OKC",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "PIT",
		"cnt": "286"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SAN",
		"cnt": "644"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "LBB",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SAT",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PDX",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "RNO",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "RSW",
		"cnt": "148"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "476"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "TPA",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MDW",
		"cnt": "357"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "MCI",
		"cnt": "521"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "RDU",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "JAN",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "LAX",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DTW",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "CLE",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "JAN",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "OMA",
		"cnt": "259"
	},
	{
		"airline": "WN",
		"airport1": "MSY",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AMA",
		"airport2": "DAL",
		"cnt": "321"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "LAX",
		"cnt": "419"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "TPA",
		"cnt": "326"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SNA",
		"cnt": "427"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "GEG",
		"cnt": "148"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "LAS",
		"cnt": "486"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SLC",
		"cnt": "368"
	},
	{
		"airline": "WN",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "414"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "HOU",
		"cnt": "256"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MCI",
		"cnt": "215"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SJC",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MDW",
		"cnt": "372"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MDW",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PHX",
		"cnt": "759"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "LAX",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "OAK",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "HOU",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "JAX",
		"cnt": "270"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "MSP",
		"cnt": "432"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SMF",
		"cnt": "586"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "HOU",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "JAX",
		"cnt": "221"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "HOU",
		"cnt": "220"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "JAN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SEA",
		"cnt": "102"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "184"
	},
	{
		"airline": "WN",
		"airport1": "MKE",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MCO",
		"cnt": "392"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "HRL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "RDU",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PBI",
		"airport2": "PHL",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SMF",
		"cnt": "422"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "SAT",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "PHX",
		"cnt": "456"
	},
	{
		"airline": "WN",
		"airport1": "AMA",
		"airport2": "DEN",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "CRP",
		"airport2": "HOU",
		"cnt": "248"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "165"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SAT",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "HOU",
		"cnt": "1286"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SDF",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "HOU",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "TPA",
		"cnt": "92"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "STL",
		"cnt": "413"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "ONT",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "SEA",
		"cnt": "144"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "MDW",
		"cnt": "488"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "PVD",
		"cnt": "120"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MCO",
		"cnt": "275"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SFO",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "ELP",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "PHX",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "RSW",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ONT",
		"airport2": "SMF",
		"cnt": "415"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PIT",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "SMF",
		"cnt": "405"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SLC",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SNA",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MHT",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "RDU",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PIT",
		"cnt": "120"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "LBB",
		"cnt": "94"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "STL",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "MSY",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PBI",
		"cnt": "204"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "TPA",
		"cnt": "426"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "DAL",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SMF",
		"airport2": "SNA",
		"cnt": "326"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "SJC",
		"cnt": "410"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "OAK",
		"cnt": "439"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SEA",
		"cnt": "303"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "RNO",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MSY",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "MDW",
		"cnt": "265"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "STL",
		"cnt": "244"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "PHX",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "LAS",
		"cnt": "596"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SMF",
		"cnt": "303"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "STL",
		"cnt": "204"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "TPA",
		"cnt": "215"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "379"
	},
	{
		"airline": "WN",
		"airport1": "MSP",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "PIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "FLL",
		"cnt": "252"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "RDU",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "SFO",
		"airport2": "SNA",
		"cnt": "320"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "CMH",
		"cnt": "206"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MHT",
		"airport2": "PHL",
		"cnt": "203"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "RSW",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MDW",
		"cnt": "480"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "417"
	},
	{
		"airline": "WN",
		"airport1": "MHT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SJC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SJC",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MCO",
		"cnt": "270"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MCI",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "PHX",
		"cnt": "205"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "STL",
		"cnt": "464"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "SEA",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "RDU",
		"airport2": "TPA",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MHT",
		"airport2": "TPA",
		"cnt": "113"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "JAX",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SMF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "CLE",
		"airport2": "MDW",
		"cnt": "320"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SFO",
		"cnt": "464"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "OKC",
		"cnt": "206"
	},
	{
		"airline": "WN",
		"airport1": "DTW",
		"airport2": "STL",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "OAK",
		"cnt": "106"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "RNO",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "IND",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "MAF",
		"cnt": "310"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PIT",
		"cnt": "213"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "OMA",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "OMA",
		"airport2": "STL",
		"cnt": "147"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SAN",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MKE",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "PHX",
		"cnt": "206"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "RNO",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "LIT",
		"cnt": "316"
	},
	{
		"airline": "WN",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "MDW",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "SAT",
		"cnt": "709"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SNA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MAF",
		"cnt": "99"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "RNO",
		"cnt": "89"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SLC",
		"cnt": "165"
	},
	{
		"airline": "WN",
		"airport1": "STL",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SLC",
		"cnt": "361"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MSY",
		"cnt": "521"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "OAK",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MDW",
		"cnt": "439"
	},
	{
		"airline": "WN",
		"airport1": "MSY",
		"airport2": "TPA",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "SAN",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SEA",
		"cnt": "213"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "SAT",
		"cnt": "257"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "IAD",
		"airport2": "MDW",
		"cnt": "304"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LAS",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "OAK",
		"cnt": "107"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "ORF",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "PDX",
		"cnt": "300"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "417"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "TPA",
		"cnt": "140"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "DTW",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AMA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SAN",
		"cnt": "110"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "MSY",
		"cnt": "369"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "SMF",
		"cnt": "211"
	},
	{
		"airline": "WN",
		"airport1": "PIT",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "OAK",
		"cnt": "211"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "MKE",
		"cnt": "118"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "257"
	},
	{
		"airline": "WN",
		"airport1": "HRL",
		"airport2": "SAT",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "ISP",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "OKC",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "MDW",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "CMH",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PHX",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MCI",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MDW",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MSY",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MCO",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "LAX",
		"cnt": "643"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "573"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "HOU",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "TUS",
		"cnt": "209"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MSY",
		"cnt": "106"
	},
	{
		"airline": "WN",
		"airport1": "SDF",
		"airport2": "STL",
		"cnt": "97"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "TUS",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "OKC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "TUS",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "OAK",
		"cnt": "680"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PVD",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ECP",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PVD",
		"cnt": "280"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "PDX",
		"cnt": "149"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "BWI",
		"cnt": "270"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "MHT",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "BNA",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "LAS",
		"cnt": "263"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SJC",
		"cnt": "479"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "DAL",
		"cnt": "610"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MHT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SNA",
		"cnt": "408"
	},
	{
		"airline": "WN",
		"airport1": "MSY",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "STL",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "FLL",
		"cnt": "64"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "STL",
		"cnt": "203"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "DTW",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "TUS",
		"cnt": "271"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "PVD",
		"cnt": "211"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "TUL",
		"cnt": "64"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "PHX",
		"cnt": "306"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "MCI",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "STL",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "TUL",
		"cnt": "193"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "OKC",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "SAT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ECP",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "BWI",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "BWI",
		"cnt": "382"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "OAK",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MSY",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "SAN",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "DTW",
		"airport2": "MDW",
		"cnt": "315"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "STL",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "MDW",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SMF",
		"cnt": "430"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "SEA",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "PHX",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "SMF",
		"cnt": "314"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "BWI",
		"cnt": "251"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "OKC",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MSY",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "320"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PVD",
		"cnt": "155"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "ELP",
		"cnt": "364"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "577"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "LAS",
		"cnt": "84"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SAN",
		"cnt": "622"
	},
	{
		"airline": "WN",
		"airport1": "PBI",
		"airport2": "TPA",
		"cnt": "201"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "PHL",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PHL",
		"cnt": "308"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SJC",
		"cnt": "301"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "IAD",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PHX",
		"cnt": "363"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "ONT",
		"cnt": "421"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "MDW",
		"cnt": "166"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SDF",
		"cnt": "207"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "CLE",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SNA",
		"cnt": "371"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "LAS",
		"cnt": "216"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SLC",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "LAX",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "ORF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "OKC",
		"cnt": "256"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "RNO",
		"cnt": "546"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "MCO",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LGA",
		"cnt": "163"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "ELP",
		"cnt": "198"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "HOU",
		"cnt": "205"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SAT",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "MDW",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "ONT",
		"cnt": "419"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "RDU",
		"cnt": "200"
	},
	{
		"airline": "WN",
		"airport1": "STL",
		"airport2": "TUL",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SAT",
		"cnt": "216"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "SJC",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SAN",
		"cnt": "648"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PVD",
		"cnt": "454"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "BWI",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "SJC",
		"airport2": "SNA",
		"cnt": "365"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "RNO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "LAX",
		"cnt": "137"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "DEN",
		"cnt": "207"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "OMA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "TPA",
		"cnt": "214"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MKE",
		"cnt": "154"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "ISP",
		"cnt": "292"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "DAL",
		"cnt": "412"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "BNA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "PDX",
		"cnt": "153"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "MDW",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "STL",
		"cnt": "200"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "TPA",
		"cnt": "155"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "RSW",
		"cnt": "148"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "308"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LGA",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MCO",
		"cnt": "219"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "SJC",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "OAK",
		"cnt": "739"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "167"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SJC",
		"cnt": "432"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "518"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "SJC",
		"cnt": "200"
	},
	{
		"airline": "WN",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "STL",
		"cnt": "162"
	},
	{
		"airline": "WN",
		"airport1": "CLE",
		"airport2": "STL",
		"cnt": "48"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "TUL",
		"cnt": "256"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "RNO",
		"cnt": "105"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "PHL",
		"cnt": "416"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "HRL",
		"cnt": "358"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ONT",
		"airport2": "SJC",
		"cnt": "261"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "PIT",
		"cnt": "6"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "TUL",
		"cnt": "109"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "RDU",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TLH",
		"cnt": "444"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "OKC",
		"cnt": "106"
	},
	{
		"airline": "EV",
		"airport1": "DSM",
		"airport2": "ATL",
		"cnt": "97"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "SAT",
		"cnt": "27"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "ROA",
		"cnt": "60"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "OMA",
		"cnt": "86"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "83"
	},
	{
		"airline": "EV",
		"airport1": "ABY",
		"airport2": "ATL",
		"cnt": "148"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CSG",
		"cnt": "212"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "GSP",
		"cnt": "17"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "ECP",
		"cnt": "101"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "GPT",
		"cnt": "136"
	},
	{
		"airline": "EV",
		"airport1": "BDL",
		"airport2": "DTW",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BQK",
		"cnt": "140"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "LIT",
		"cnt": "104"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "JAN",
		"cnt": "356"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GSP",
		"cnt": "332"
	},
	{
		"airline": "EV",
		"airport1": "DFW",
		"airport2": "DTW",
		"cnt": "38"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "TPA",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "17"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "JAX",
		"cnt": "71"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "IND",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MDT",
		"cnt": "214"
	},
	{
		"airline": "EV",
		"airport1": "OMA",
		"airport2": "ATL",
		"cnt": "185"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ECP",
		"cnt": "328"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BMI",
		"cnt": "210"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "STL",
		"cnt": "26"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "PWM",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "SYR",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GSO",
		"cnt": "248"
	},
	{
		"airline": "EV",
		"airport1": "AGS",
		"airport2": "ATL",
		"cnt": "512"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "TUL",
		"cnt": "102"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "IAD",
		"cnt": "20"
	},
	{
		"airline": "EV",
		"airport1": "CLT",
		"airport2": "DTW",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MOB",
		"cnt": "440"
	},
	{
		"airline": "EV",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "25"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MTJ",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "BTR",
		"airport2": "MEM",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "XNA",
		"cnt": "152"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "DCA",
		"cnt": "30"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "FWA",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SWF",
		"cnt": "47"
	},
	{
		"airline": "EV",
		"airport1": "EVV",
		"airport2": "MEM",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CLE",
		"cnt": "176"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MGM",
		"cnt": "372"
	},
	{
		"airline": "EV",
		"airport1": "MFE",
		"airport2": "MEM",
		"cnt": "45"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "DCA",
		"airport2": "STL",
		"cnt": "152"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CLT",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "CAE",
		"airport2": "IAD",
		"cnt": "184"
	},
	{
		"airline": "EV",
		"airport1": "CAK",
		"airport2": "ATL",
		"cnt": "316"
	},
	{
		"airline": "EV",
		"airport1": "JAN",
		"airport2": "DTW",
		"cnt": "50"
	},
	{
		"airline": "EV",
		"airport1": "SAV",
		"airport2": "ORD",
		"cnt": "86"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ATW",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "SAV",
		"airport2": "IAD",
		"cnt": "48"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "EWR",
		"cnt": "92"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "BUF",
		"cnt": "10"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "MEM",
		"cnt": "1"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "LEX",
		"cnt": "346"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "PNS",
		"cnt": "69"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SHV",
		"cnt": "256"
	},
	{
		"airline": "EV",
		"airport1": "LEX",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SGF",
		"cnt": "147"
	},
	{
		"airline": "EV",
		"airport1": "CHA",
		"airport2": "DTW",
		"cnt": "23"
	},
	{
		"airline": "EV",
		"airport1": "SAV",
		"airport2": "ATL",
		"cnt": "128"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "PIT",
		"cnt": "12"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "DCA",
		"cnt": "46"
	},
	{
		"airline": "EV",
		"airport1": "CAE",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "HSV",
		"cnt": "466"
	},
	{
		"airline": "EV",
		"airport1": "CLE",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "FLL",
		"airport2": "TLH",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MHT",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TRI",
		"cnt": "347"
	},
	{
		"airline": "EV",
		"airport1": "MSN",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ABE",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "44"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "MCI",
		"cnt": "76"
	},
	{
		"airline": "EV",
		"airport1": "GSO",
		"airport2": "IAD",
		"cnt": "84"
	},
	{
		"airline": "EV",
		"airport1": "GSP",
		"airport2": "CVG",
		"cnt": "1"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "VLD",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "CMH",
		"cnt": "20"
	},
	{
		"airline": "EV",
		"airport1": "MLU",
		"airport2": "MEM",
		"cnt": "100"
	},
	{
		"airline": "EV",
		"airport1": "AEX",
		"airport2": "ATL",
		"cnt": "260"
	},
	{
		"airline": "EV",
		"airport1": "PIT",
		"airport2": "IAD",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "44"
	},
	{
		"airline": "EV",
		"airport1": "JAX",
		"airport2": "MEM",
		"cnt": "32"
	},
	{
		"airline": "EV",
		"airport1": "OMA",
		"airport2": "DTW",
		"cnt": "132"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "62"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "GRR",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "65"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "RDU",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "SGF",
		"airport2": "MEM",
		"cnt": "58"
	},
	{
		"airline": "EV",
		"airport1": "CHS",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "PIT",
		"airport2": "DFW",
		"cnt": "1"
	},
	{
		"airline": "EV",
		"airport1": "BOS",
		"airport2": "DTW",
		"cnt": "17"
	},
	{
		"airline": "EV",
		"airport1": "LIT",
		"airport2": "ATL",
		"cnt": "384"
	},
	{
		"airline": "EV",
		"airport1": "HSV",
		"airport2": "MEM",
		"cnt": "116"
	},
	{
		"airline": "EV",
		"airport1": "MCI",
		"airport2": "MEM",
		"cnt": "74"
	},
	{
		"airline": "EV",
		"airport1": "BWI",
		"airport2": "MEM",
		"cnt": "48"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MYR",
		"cnt": "262"
	},
	{
		"airline": "EV",
		"airport1": "CRW",
		"airport2": "ATL",
		"cnt": "259"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "EWR",
		"cnt": "46"
	},
	{
		"airline": "EV",
		"airport1": "ALB",
		"airport2": "ATL",
		"cnt": "61"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "JFK",
		"cnt": "224"
	},
	{
		"airline": "EV",
		"airport1": "GSP",
		"airport2": "IAD",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "BDL",
		"airport2": "DCA",
		"cnt": "88"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GRK",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "6"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "CLE",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "BWI",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "109"
	},
	{
		"airline": "EV",
		"airport1": "EWR",
		"airport2": "ATL",
		"cnt": "22"
	},
	{
		"airline": "EV",
		"airport1": "GSO",
		"airport2": "ORD",
		"cnt": "38"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "DFW",
		"cnt": "21"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "156"
	},
	{
		"airline": "EV",
		"airport1": "DCA",
		"airport2": "MSN",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "DEN",
		"airport2": "CVG",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "DAB",
		"cnt": "6"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "68"
	},
	{
		"airline": "EV",
		"airport1": "BTV",
		"airport2": "IAD",
		"cnt": "53"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "VPS",
		"cnt": "134"
	},
	{
		"airline": "EV",
		"airport1": "PIT",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "ALB",
		"cnt": "93"
	},
	{
		"airline": "EV",
		"airport1": "EWR",
		"airport2": "MEM",
		"cnt": "89"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "DAY",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "63"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "SHV",
		"cnt": "154"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "LFT",
		"cnt": "156"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "EVV",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MOB",
		"cnt": "160"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SBN",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "IND",
		"airport2": "DCA",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "BUF",
		"airport2": "IAD",
		"cnt": "71"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ORF",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "86"
	},
	{
		"airline": "EV",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "44"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "HPN",
		"cnt": "220"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SDF",
		"cnt": "317"
	},
	{
		"airline": "EV",
		"airport1": "BOS",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "VPS",
		"airport2": "ATL",
		"cnt": "522"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BTR",
		"cnt": "420"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GRR",
		"cnt": "99"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "MHT",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "MHT",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MLI",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "46"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "CLE",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ICT",
		"cnt": "116"
	},
	{
		"airline": "EV",
		"airport1": "DEN",
		"airport2": "MEM",
		"cnt": "64"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CAE",
		"cnt": "578"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "66"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "OKC",
		"cnt": "197"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "PHL",
		"cnt": "32"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "DHN",
		"cnt": "214"
	},
	{
		"airline": "EV",
		"airport1": "OKC",
		"airport2": "MEM",
		"cnt": "48"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "LWB",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "204"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "EWN",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ELP",
		"cnt": "32"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "IAH",
		"cnt": "36"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "30"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CMH",
		"cnt": "38"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MLB",
		"cnt": "74"
	},
	{
		"airline": "EV",
		"airport1": "JAN",
		"airport2": "DCA",
		"cnt": "29"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "LFT",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MLI",
		"cnt": "222"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MLU",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "DFW",
		"airport2": "MEM",
		"cnt": "35"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "EYW",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TUL",
		"cnt": "110"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "DTW",
		"cnt": "53"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ROA",
		"cnt": "214"
	},
	{
		"airline": "EV",
		"airport1": "LEX",
		"airport2": "MEM",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "XNA",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "JAX",
		"cnt": "110"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MSY",
		"cnt": "20"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "MHT",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ILM",
		"cnt": "325"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "PWM",
		"cnt": "109"
	},
	{
		"airline": "EV",
		"airport1": "BOS",
		"airport2": "DCA",
		"cnt": "447"
	},
	{
		"airline": "EV",
		"airport1": "SBN",
		"airport2": "DTW",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BHM",
		"cnt": "430"
	},
	{
		"airline": "EV",
		"airport1": "ELM",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CHO",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "PNS",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "DCA",
		"cnt": "47"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "BTV",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "MCI",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "GNV",
		"airport2": "ATL",
		"cnt": "364"
	},
	{
		"airline": "EV",
		"airport1": "PHL",
		"airport2": "MEM",
		"cnt": "63"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SYR",
		"cnt": "100"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BNA",
		"cnt": "110"
	},
	{
		"airline": "EV",
		"airport1": "BNA",
		"airport2": "MEM",
		"cnt": "64"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "ABE",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "66"
	},
	{
		"airline": "EV",
		"airport1": "HSV",
		"airport2": "IAD",
		"cnt": "84"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MEI",
		"cnt": "104"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "ATL",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "PNS",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MGM",
		"cnt": "154"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "OAJ",
		"cnt": "212"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "TUL",
		"cnt": "67"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TYS",
		"cnt": "384"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "XNA",
		"cnt": "230"
	},
	{
		"airline": "EV",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "26"
	},
	{
		"airline": "EV",
		"airport1": "STL",
		"airport2": "CVG",
		"cnt": "26"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "AVL",
		"cnt": "448"
	},
	{
		"airline": "EV",
		"airport1": "CHA",
		"airport2": "ATL",
		"cnt": "518"
	},
	{
		"airline": "EV",
		"airport1": "ALB",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "FAY",
		"airport2": "ATL",
		"cnt": "482"
	},
	{
		"airline": "EV",
		"airport1": "AUS",
		"airport2": "DTW",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "FWA",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "CMH",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CHS",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ROC",
		"airport2": "RSW",
		"cnt": "18"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "RIC",
		"cnt": "196"
	},
	{
		"airline": "FL",
		"airport1": "LEX",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "MDW",
		"airport2": "RSW",
		"cnt": "136"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PWM",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "MCI",
		"airport2": "MCO",
		"cnt": "26"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "SJU",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "AVL",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "UTM",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "EYW",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "MKE",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "108"
	},
	{
		"airline": "FL",
		"airport1": "DCA",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ACY",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "IND",
		"cnt": "178"
	},
	{
		"airline": "FL",
		"airport1": "ABE",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "JAX",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "ROC",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "TPA",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BMI",
		"cnt": "160"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "156"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "DFW",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "GRR",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "CMH",
		"airport2": "FLL",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "LEX",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "FNT",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "PBI",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "LGA",
		"cnt": "407"
	},
	{
		"airline": "FL",
		"airport1": "DAY",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BUF",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "CLT",
		"cnt": "128"
	},
	{
		"airline": "FL",
		"airport1": "CMH",
		"airport2": "RSW",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "TPA",
		"airport2": "DAY",
		"cnt": "45"
	},
	{
		"airline": "FL",
		"airport1": "CRW",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "DTW",
		"airport2": "MCO",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "MCO",
		"cnt": "95"
	},
	{
		"airline": "FL",
		"airport1": "BKG",
		"airport2": "MCO",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BKG",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "LGA",
		"cnt": "111"
	},
	{
		"airline": "FL",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "147"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "303"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DCA",
		"cnt": "324"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "LAS",
		"cnt": "2"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "SRQ",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "RSW",
		"cnt": "68"
	},
	{
		"airline": "FL",
		"airport1": "GRR",
		"airport2": "RSW",
		"cnt": "42"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "FLL",
		"cnt": "446"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "RDU",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "DSM",
		"airport2": "MCO",
		"cnt": "16"
	},
	{
		"airline": "FL",
		"airport1": "LAX",
		"airport2": "MKE",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "RIC",
		"cnt": "45"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "HPN",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "176"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MIA",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "PHF",
		"cnt": "104"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "STL",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "TPA",
		"cnt": "156"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "RSW",
		"cnt": "228"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "MDT",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "FLL",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "ABE",
		"airport2": "FLL",
		"cnt": "26"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "CAK",
		"cnt": "213"
	},
	{
		"airline": "FL",
		"airport1": "DEN",
		"airport2": "MKE",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "16"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BMI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MSY",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "212"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MDW",
		"cnt": "156"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MDT",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DAY",
		"cnt": "167"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MSP",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "212"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "TPA",
		"cnt": "399"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BUF",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "FNT",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MLI",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "MDW",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "SJU",
		"cnt": "28"
	},
	{
		"airline": "FL",
		"airport1": "DFW",
		"airport2": "MKE",
		"cnt": "2"
	},
	{
		"airline": "FL",
		"airport1": "CLT",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "SRQ",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "ROC",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "GRR",
		"cnt": "111"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "RSW",
		"cnt": "110"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "HPN",
		"cnt": "104"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "IND",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "JAX",
		"cnt": "97"
	},
	{
		"airline": "FL",
		"airport1": "BMI",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "36"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MKE",
		"cnt": "234"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PHL",
		"cnt": "243"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "RSW",
		"cnt": "172"
	},
	{
		"airline": "FL",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "50"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "ICT",
		"cnt": "160"
	},
	{
		"airline": "FL",
		"airport1": "GPT",
		"airport2": "TPA",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MKE",
		"cnt": "111"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "TPA",
		"cnt": "80"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "196"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "PWM",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MCO",
		"cnt": "505"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MCI",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MCO",
		"cnt": "281"
	},
	{
		"airline": "FL",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "PIT",
		"airport2": "TPA",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "LAS",
		"cnt": "155"
	},
	{
		"airline": "FL",
		"airport1": "DCA",
		"airport2": "MKE",
		"cnt": "216"
	},
	{
		"airline": "FL",
		"airport1": "HSV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "LAX",
		"cnt": "154"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "MKE",
		"cnt": "246"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "256"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "CMH",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "PIT",
		"cnt": "88"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MDW",
		"cnt": "294"
	},
	{
		"airline": "FL",
		"airport1": "MLI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "FL",
		"airport1": "PIT",
		"airport2": "RSW",
		"cnt": "80"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "MCO",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "CMH",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "RSW",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BOS",
		"cnt": "214"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "ROC",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PHX",
		"cnt": "92"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "186"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "TYS",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BWI",
		"cnt": "323"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "SEA",
		"cnt": "55"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "CAK",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "180"
	},
	{
		"airline": "FL",
		"airport1": "ROC",
		"airport2": "TPA",
		"cnt": "50"
	},
	{
		"airline": "FL",
		"airport1": "TPA",
		"airport2": "GRR",
		"cnt": "42"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "319"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "196"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "MCO",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SJU",
		"cnt": "76"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MKE",
		"cnt": "178"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PNS",
		"cnt": "160"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "HSV",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SAT",
		"cnt": "164"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "DAY",
		"cnt": "140"
	},
	{
		"airline": "FL",
		"airport1": "HPN",
		"airport2": "PBI",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "MKE",
		"cnt": "108"
	},
	{
		"airline": "FL",
		"airport1": "FNT",
		"airport2": "TPA",
		"cnt": "44"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "ATL",
		"cnt": "840"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "EWR",
		"cnt": "102"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "LAX",
		"cnt": "270"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MSY",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "DFW",
		"cnt": "76"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MSP",
		"cnt": "211"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "JFK",
		"cnt": "55"
	},
	{
		"airline": "DL",
		"airport1": "SAN",
		"airport2": "DTW",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MKE",
		"cnt": "99"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "LAS",
		"cnt": "368"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "MSP",
		"cnt": "277"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "MSP",
		"cnt": "62"
	},
	{
		"airline": "DL",
		"airport1": "CMH",
		"airport2": "ATL",
		"cnt": "328"
	},
	{
		"airline": "DL",
		"airport1": "BUF",
		"airport2": "ATL",
		"cnt": "268"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "SLC",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "ANC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "JAN",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "173"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SAN",
		"cnt": "194"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "250"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "128"
	},
	{
		"airline": "DL",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "308"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PBI",
		"cnt": "544"
	},
	{
		"airline": "DL",
		"airport1": "GRB",
		"airport2": "MSP",
		"cnt": "75"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "JAX",
		"cnt": "644"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "STL",
		"cnt": "54"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "BOS",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "ORF",
		"airport2": "ATL",
		"cnt": "330"
	},
	{
		"airline": "DL",
		"airport1": "PHL",
		"airport2": "ATL",
		"cnt": "518"
	},
	{
		"airline": "DL",
		"airport1": "SAT",
		"airport2": "JFK",
		"cnt": "1"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "290"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "DTW",
		"cnt": "268"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "EGE",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MTJ",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "SAN",
		"airport2": "ATL",
		"cnt": "266"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "CLT",
		"cnt": "158"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "JAC",
		"cnt": "99"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "CLE",
		"cnt": "82"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "IND",
		"cnt": "135"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MSY",
		"cnt": "80"
	},
	{
		"airline": "DL",
		"airport1": "SJU",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "RDU",
		"airport2": "DTW",
		"cnt": "118"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "ATL",
		"cnt": "568"
	},
	{
		"airline": "DL",
		"airport1": "BOI",
		"airport2": "SLC",
		"cnt": "86"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "HNL",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "IAD",
		"airport2": "ATL",
		"cnt": "376"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "RDU",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "DFW",
		"airport2": "DTW",
		"cnt": "27"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "SFO",
		"cnt": "162"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "DCA",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MCI",
		"cnt": "54"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "MSP",
		"cnt": "338"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MCO",
		"cnt": "336"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "DTW",
		"cnt": "160"
	},
	{
		"airline": "DL",
		"airport1": "PHX",
		"airport2": "ATL",
		"cnt": "316"
	},
	{
		"airline": "DL",
		"airport1": "SAT",
		"airport2": "DTW",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "PHL",
		"airport2": "MSP",
		"cnt": "182"
	},
	{
		"airline": "DL",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "117"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "CVG",
		"cnt": "130"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "PDX",
		"cnt": "122"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "GRB",
		"cnt": "27"
	},
	{
		"airline": "DL",
		"airport1": "RIC",
		"airport2": "ATL",
		"cnt": "398"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SEA",
		"cnt": "265"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "ATL",
		"cnt": "618"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "STT",
		"cnt": "84"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "FLL",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "LGA",
		"cnt": "332"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "OAK",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "PIT",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "MEM",
		"cnt": "80"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SEA",
		"cnt": "280"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "TPA",
		"cnt": "321"
	},
	{
		"airline": "DL",
		"airport1": "PHL",
		"airport2": "DTW",
		"cnt": "163"
	},
	{
		"airline": "DL",
		"airport1": "COS",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HSV",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "DTW",
		"cnt": "54"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "FLL",
		"cnt": "125"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "CMH",
		"cnt": "24"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MHT",
		"cnt": "33"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "STL",
		"cnt": "408"
	},
	{
		"airline": "DL",
		"airport1": "SAN",
		"airport2": "JFK",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "DTW",
		"cnt": "107"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "MEM",
		"cnt": "154"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "LAS",
		"cnt": "341"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BDL",
		"cnt": "318"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "MCO",
		"cnt": "222"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "CVG",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "CLT",
		"airport2": "ATL",
		"cnt": "471"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "BWI",
		"cnt": "42"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "BDL",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "TPA",
		"cnt": "181"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MIA",
		"cnt": "162"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "MEM",
		"cnt": "164"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "HNL",
		"cnt": "24"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PWM",
		"cnt": "81"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SNA",
		"cnt": "228"
	},
	{
		"airline": "DL",
		"airport1": "SFO",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "SNA",
		"airport2": "ATL",
		"cnt": "258"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "BOS",
		"cnt": "285"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MSN",
		"airport2": "MSP",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "DL",
		"airport1": "AUS",
		"airport2": "ATL",
		"cnt": "310"
	},
	{
		"airline": "DL",
		"airport1": "SJU",
		"airport2": "ATL",
		"cnt": "288"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MCI",
		"cnt": "10"
	},
	{
		"airline": "DL",
		"airport1": "SFO",
		"airport2": "ATL",
		"cnt": "312"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "RSW",
		"cnt": "213"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "544"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "FAR",
		"airport2": "MSP",
		"cnt": "116"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "MSY",
		"cnt": "152"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "74"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "PHX",
		"cnt": "216"
	},
	{
		"airline": "DL",
		"airport1": "SAT",
		"airport2": "ATL",
		"cnt": "415"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ABQ",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "OMA",
		"cnt": "25"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "LAS",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "GRR",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "LIT",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "LAS",
		"airport2": "SNA",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "ATL",
		"cnt": "838"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "PSP",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SNA",
		"airport2": "MSP",
		"cnt": "146"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "ELP",
		"airport2": "ATL",
		"cnt": "80"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "BWI",
		"cnt": "306"
	},
	{
		"airline": "DL",
		"airport1": "ALB",
		"airport2": "ATL",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "SFO",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "TUS",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "ATL",
		"cnt": "372"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "SLC",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "SFO",
		"cnt": "272"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "JFK",
		"cnt": "128"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "212"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "BOS",
		"cnt": "622"
	},
	{
		"airline": "DL",
		"airport1": "BZN",
		"airport2": "MSP",
		"cnt": "58"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "LGA",
		"cnt": "479"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "LGA",
		"cnt": "329"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "SLC",
		"cnt": "102"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PVD",
		"cnt": "158"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "582"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "DAY",
		"cnt": "212"
	},
	{
		"airline": "DL",
		"airport1": "GEG",
		"airport2": "SLC",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "IND",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "BOI",
		"cnt": "26"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "319"
	},
	{
		"airline": "DL",
		"airport1": "EWR",
		"airport2": "ATL",
		"cnt": "558"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "TPA",
		"cnt": "634"
	},
	{
		"airline": "DL",
		"airport1": "SAV",
		"airport2": "ATL",
		"cnt": "384"
	},
	{
		"airline": "DL",
		"airport1": "MKE",
		"airport2": "ATL",
		"cnt": "322"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SRQ",
		"cnt": "334"
	},
	{
		"airline": "DL",
		"airport1": "DFW",
		"airport2": "JFK",
		"cnt": "1"
	},
	{
		"airline": "DL",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "460"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "JAC",
		"cnt": "12"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "TPA",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "JAX",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "BIL",
		"cnt": "23"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "PBI",
		"cnt": "208"
	},
	{
		"airline": "DL",
		"airport1": "SFO",
		"airport2": "HNL",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "JFK",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SMF",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "DL",
		"airport1": "IAH",
		"airport2": "ATL",
		"cnt": "266"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "LGA",
		"cnt": "154"
	},
	{
		"airline": "DL",
		"airport1": "MLB",
		"airport2": "ATL",
		"cnt": "150"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "MEM",
		"cnt": "106"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "CVG",
		"cnt": "162"
	},
	{
		"airline": "DL",
		"airport1": "DEN",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "114"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "MSP",
		"cnt": "262"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "481"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "STX",
		"cnt": "10"
	},
	{
		"airline": "DL",
		"airport1": "STL",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "50"
	},
	{
		"airline": "DL",
		"airport1": "MCI",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SDF",
		"cnt": "87"
	},
	{
		"airline": "DL",
		"airport1": "JAX",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "GRR",
		"cnt": "125"
	},
	{
		"airline": "DL",
		"airport1": "DAB",
		"airport2": "ATL",
		"cnt": "241"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "FLL",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "GRR",
		"cnt": "23"
	},
	{
		"airline": "DL",
		"airport1": "IND",
		"airport2": "SLC",
		"cnt": "50"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SFO",
		"cnt": "260"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "OMA",
		"cnt": "14"
	},
	{
		"airline": "DL",
		"airport1": "LIT",
		"airport2": "MEM",
		"cnt": "33"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SLC",
		"cnt": "473"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "ATL",
		"cnt": "778"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "OKC",
		"cnt": "19"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MCO",
		"cnt": "888"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MCI",
		"cnt": "392"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "STL",
		"cnt": "155"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "IAD",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "RNO",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "PBI",
		"airport2": "DTW",
		"cnt": "157"
	},
	{
		"airline": "DL",
		"airport1": "EWR",
		"airport2": "DTW",
		"cnt": "76"
	},
	{
		"airline": "DL",
		"airport1": "EWR",
		"airport2": "MSP",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "LAS",
		"cnt": "316"
	},
	{
		"airline": "DL",
		"airport1": "ECP",
		"airport2": "ATL",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "50"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "328"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BZN",
		"cnt": "12"
	},
	{
		"airline": "DL",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "105"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "MSP",
		"cnt": "244"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "DTW",
		"cnt": "312"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "TLH",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "BOS",
		"cnt": "28"
	},
	{
		"airline": "DL",
		"airport1": "EGE",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "158"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SAN",
		"cnt": "164"
	},
	{
		"airline": "DL",
		"airport1": "IND",
		"airport2": "LAX",
		"cnt": "36"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "PBI",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SEA",
		"cnt": "254"
	},
	{
		"airline": "DL",
		"airport1": "PIT",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "CHS",
		"airport2": "ATL",
		"cnt": "372"
	},
	{
		"airline": "DL",
		"airport1": "IND",
		"airport2": "ATL",
		"cnt": "413"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MDW",
		"cnt": "374"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SYR",
		"cnt": "23"
	},
	{
		"airline": "DL",
		"airport1": "SJC",
		"airport2": "ATL",
		"cnt": "46"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "DTW",
		"cnt": "301"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "EYW",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "LAS",
		"airport2": "ATL",
		"cnt": "430"
	},
	{
		"airline": "DL",
		"airport1": "SRQ",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SAT",
		"cnt": "24"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ROC",
		"cnt": "164"
	},
	{
		"airline": "DL",
		"airport1": "PNS",
		"airport2": "ATL",
		"cnt": "412"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "FLL",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "LAS",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MSN",
		"cnt": "67"
	},
	{
		"airline": "DL",
		"airport1": "PHX",
		"airport2": "MSP",
		"cnt": "332"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "523"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "JFK",
		"cnt": "220"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "SEA",
		"cnt": "36"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "ATL",
		"cnt": "448"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "STT",
		"cnt": "8"
	},
	{
		"airline": "DL",
		"airport1": "PDX",
		"airport2": "MSP",
		"cnt": "160"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BWI",
		"cnt": "526"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "TUS",
		"cnt": "40"
	},
	{
		"airline": "DL",
		"airport1": "IAD",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SMF",
		"cnt": "57"
	},
	{
		"airline": "DL",
		"airport1": "RDU",
		"airport2": "ATL",
		"cnt": "586"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "PHX",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "PHX",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "252"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "372"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "PHL",
		"cnt": "98"
	},
	{
		"airline": "DL",
		"airport1": "BWI",
		"airport2": "SLC",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "GSO",
		"airport2": "ATL",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "DTW",
		"cnt": "466"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BNA",
		"cnt": "276"
	},
	{
		"airline": "DL",
		"airport1": "SMF",
		"airport2": "ATL",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "423"
	},
	{
		"airline": "DL",
		"airport1": "GEG",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "BWI",
		"cnt": "128"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "CVG",
		"cnt": "42"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "CVG",
		"cnt": "348"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "ATL",
		"cnt": "579"
	},
	{
		"airline": "DL",
		"airport1": "MSY",
		"airport2": "LAX",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "PDX",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BHM",
		"airport2": "ATL",
		"cnt": "152"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "MSP",
		"cnt": "269"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "DCA",
		"cnt": "108"
	},
	{
		"airline": "DL",
		"airport1": "SJC",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "MSP",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "JFK",
		"cnt": "272"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PDX",
		"cnt": "146"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "ATL",
		"cnt": "608"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "MEM",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MEM",
		"cnt": "218"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "DTW",
		"cnt": "314"
	},
	{
		"airline": "DL",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "89"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "ORD",
		"cnt": "18"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SBA",
		"cnt": "254"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "36"
	},
	{
		"airline": "YV",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SBP",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "EWR",
		"airport2": "IAD",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SRQ",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "ELP",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "BDL",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "29"
	},
	{
		"airline": "YV",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "12"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PWM",
		"cnt": "59"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MYR",
		"cnt": "52"
	},
	{
		"airline": "YV",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "24"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "ITO",
		"cnt": "248"
	},
	{
		"airline": "YV",
		"airport1": "IND",
		"airport2": "ORD",
		"cnt": "22"
	},
	{
		"airline": "YV",
		"airport1": "FAT",
		"airport2": "LAS",
		"cnt": "48"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "166"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "24"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "EWR",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "ATL",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "344"
	},
	{
		"airline": "YV",
		"airport1": "BTV",
		"airport2": "IAD",
		"cnt": "36"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "60"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "CHS",
		"cnt": "42"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "RDU",
		"cnt": "76"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "DAB",
		"cnt": "66"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "PIT",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "BDL",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "118"
	},
	{
		"airline": "YV",
		"airport1": "DSM",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "YV",
		"airport1": "BNA",
		"airport2": "CLT",
		"cnt": "194"
	},
	{
		"airline": "YV",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "141"
	},
	{
		"airline": "YV",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "CVG",
		"cnt": "198"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "OGG",
		"cnt": "376"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SMF",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "PSP",
		"cnt": "320"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "STL",
		"cnt": "96"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "JAX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "KOA",
		"cnt": "312"
	},
	{
		"airline": "YV",
		"airport1": "MIA",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "YV",
		"airport1": "AVP",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "ABQ",
		"airport2": "PHX",
		"cnt": "249"
	},
	{
		"airline": "YV",
		"airport1": "MEM",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "GJT",
		"airport2": "PHX",
		"cnt": "144"
	},
	{
		"airline": "YV",
		"airport1": "FLG",
		"airport2": "PHX",
		"cnt": "310"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "DFW",
		"cnt": "10"
	},
	{
		"airline": "YV",
		"airport1": "DTW",
		"airport2": "IAD",
		"cnt": "3"
	},
	{
		"airline": "YV",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "LAS",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SLC",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "IND",
		"cnt": "41"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "BNA",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "BUF",
		"airport2": "ORD",
		"cnt": "42"
	},
	{
		"airline": "YV",
		"airport1": "LAS",
		"airport2": "PHX",
		"cnt": "64"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SAT",
		"cnt": "55"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SAV",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "MIA",
		"cnt": "52"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "FAY",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "IAH",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MDT",
		"cnt": "100"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "TEX",
		"cnt": "104"
	},
	{
		"airline": "YV",
		"airport1": "BFL",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "PIT",
		"cnt": "82"
	},
	{
		"airline": "YV",
		"airport1": "BUF",
		"airport2": "CLT",
		"cnt": "20"
	},
	{
		"airline": "YV",
		"airport1": "ALB",
		"airport2": "IAD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "ORF",
		"cnt": "145"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "PNS",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "RIC",
		"cnt": "80"
	},
	{
		"airline": "YV",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "89"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "ILM",
		"cnt": "228"
	},
	{
		"airline": "YV",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "69"
	},
	{
		"airline": "YV",
		"airport1": "BUF",
		"airport2": "IAD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "240"
	},
	{
		"airline": "YV",
		"airport1": "LGB",
		"airport2": "PHX",
		"cnt": "208"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "92"
	},
	{
		"airline": "YV",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "11"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "MHT",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SDF",
		"cnt": "142"
	},
	{
		"airline": "YV",
		"airport1": "BHM",
		"airport2": "CLT",
		"cnt": "40"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "YUM",
		"cnt": "328"
	},
	{
		"airline": "YV",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "22"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SNA",
		"cnt": "80"
	},
	{
		"airline": "YV",
		"airport1": "BTV",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "MDT",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "MRY",
		"airport2": "PHX",
		"cnt": "116"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "PVD",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "ELP",
		"airport2": "PHX",
		"cnt": "247"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "72"
	},
	{
		"airline": "YV",
		"airport1": "CHS",
		"airport2": "CLT",
		"cnt": "208"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "LIH",
		"cnt": "324"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SAV",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SAT",
		"cnt": "102"
	},
	{
		"airline": "YV",
		"airport1": "BDL",
		"airport2": "IAD",
		"cnt": "80"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SYR",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "YV",
		"airport1": "SAT",
		"airport2": "IAD",
		"cnt": "34"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "IND",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "MHT",
		"airport2": "ORD",
		"cnt": "55"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "PWM",
		"cnt": "34"
	},
	{
		"airline": "YV",
		"airport1": "DSM",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "88"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PIT",
		"cnt": "22"
	},
	{
		"airline": "YV",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "YV",
		"airport1": "FAT",
		"airport2": "PHX",
		"cnt": "232"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SYR",
		"cnt": "64"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "PHX",
		"cnt": "224"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "RDU",
		"cnt": "125"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "TUS",
		"cnt": "480"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "64"
	},
	{
		"airline": "YV",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "43"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "ORF",
		"cnt": "148"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "ORD",
		"cnt": "174"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "IAD",
		"cnt": "33"
	},
	{
		"airline": "YV",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "36"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "JAX",
		"cnt": "28"
	},
	{
		"airline": "YV",
		"airport1": "DRO",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MSY",
		"cnt": "24"
	},
	{
		"airline": "YV",
		"airport1": "DFW",
		"airport2": "ORD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "4"
	}
];

// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
// using webpack json loader we can import our geojson file like this
import geojson from 'json!./custom.geojson';
// import local components Filter and ForkMe
import Filter from './Filter';
import ForkMe from './ForkMe';

// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
let config = {};
config.params = {
  center: [20.0, 5.0]
};
config.tileLayer = {
  uri: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  params: {
    minZoom: 2,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    id: '',
    accessToken: ''
  }
};

// array to store unique names of Brooklyn subway lines,
// this eventually gets passed down to the Filter component

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      numEntrances: null
    };
    this._mapNode = null;
  }

  componentDidMount() {
    // code to run just after the component "mounts" / DOM elements are created
    // we could make an AJAX request for the GeoJSON data here if it wasn't stored locally
    this.getData();
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate(prevProps, prevState) {
    // code to run when the component receives new props or state
    // check to see if geojson is stored, map is created, and geojson overlay needs to be added
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geojson);
    }

    // check to see if the subway lines filter has changed
    // if (this.state.subwayLinesFilter !== prevState.subwayLinesFilter) {
    //   // filter / re-render the geojson overlay
    //   this.filterGeoJSONLayer();
    // }
  }

  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }

  getData() {
    // could also be an AJAX request that results in setting state with the geojson data
    // for simplicity sake we are just importing the geojson data using webpack's json loader
    this.setState({
      numEntrances: geojson.features.length,
      geojson
    });
  }

  updateMap(e) {
    let subwayLine = e.target.value;
    // change the subway line filter
    if (subwayLine === 'All lines') {
      subwayLine = '*';
    }
    // update our state with the new filter value
    this.setState({
      subwayLinesFilter: subwayLine
    });
  }

  addGeoJSONLayer(geojson) {
    // create a native Leaflet GeoJSON SVG Layer to add as an interactive overlay to the map
    // an options object is passed to define functions for customizing the layer
    const geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
      pointToLayer: this.pointToLayer
    });
    // add our GeoJSON layer to the Leaflet map object
    geojsonLayer.addTo(this.state.map);
    // store the Leaflet GeoJSON layer in our component state for use later
    this.setState({ geojsonLayer });
    // fit the geographic extent of the GeoJSON layer within the map's bounds / viewport
    this.zoomToFeature(geojsonLayer);
  }

  filterGeoJSONLayer() {
    // clear the geojson layer of its data
    this.state.geojsonLayer.clearLayers();
    // re-add the geojson so that it filters out subway lines which do not match state.filter
    this.state.geojsonLayer.addData(geojson);
    // fit the map to the new geojson layer's geographic extent
    this.zoomToFeature(this.state.geojsonLayer);
  }

  zoomToFeature(target) {
    // pad fitBounds() so features aren't hidden under the Filter UI element
    var fitBoundsParams = {
      paddingTopLeft: [200, 10],
      paddingBottomRight: [10, 10]
    };
    // set the map's center & zoom so that it fits the geographic extent of the layer
    //this.state.map.fitBounds(target.getBounds(), fitBoundsParams);
  }

  filterFeatures(feature, layer) {
    // filter the subway entrances based on the map's current search filter
    // returns true only if the filter value matches the value of feature.properties.LINE
    const test = feature.properties.LINE.split('-').indexOf(
      this.state.subwayLinesFilter
    );
    if (this.state.subwayLinesFilter === '*' || test !== -1) {
      return true;
    }
  }

  pointToLayer(feature, latlng) {
    // renders our GeoJSON points as circle markers, rather than Leaflet's default image markers
    // parameters to style the GeoJSON markers
    var markerParams = {
      radius: 4,
      fillColor: 'orange',
      color: '#fff',
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.8
    };

    //map.addLayer(arcedPolyline);

    return L.circleMarker(latlng, markerParams);
  }

  getLocation(context, locationField, fieldValues, callback) {
		let key = fieldValues[0];
		var airportsLookup = L.GeometryUtils.arrayToMap(airports, 'code');
    let airport = airportsLookup[key];
    let location;

    if (airport) {
        var latlng = new L.LatLng(Number(airport.lat), Number(airport.lon));

        location = {
            location: latlng,
            text: key,
            center: latlng
        };
    }

    return location;
};

groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

  init(id) {
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, {
      center: [20.0, 5.0],
      minZoom: 3,
      zoom: 2
    });
    //L.control.zoom({ position: "bottomleft"}).addTo(map);
    //L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(
      config.tileLayer.uri,
      config.tileLayer.params
    ).addTo(map);

    // let latlang = [
    //   [[17.385044, -75.486671], [16.506174, 80.648015], [17.686816, 83.218482]],
    //   [[13.08268, 80.270718], [12.971599, 77.594563], [15.828126, 78.037279]]
    // ];
    // let multiPolyLineOptions = { color: 'red' };
    // let multipolyline = L.multiPolyline(latlang, multiPolyLineOptions);

    var sizeFunction = new L.LinearFunction([1, 16], [253, 48]);

    var options = {
        recordsField: null,
        locationMode: L.LocationModes.CUSTOM,
        fromField: 'airport1',
        toField: 'airport2',
        codeField: null,
        getLocation: this.getLocation,
        getEdge: L.Graph.EDGESTYLE.ARC,
        includeLayer: function (record) {
            return false;
        },
        getIndexKey: function (location, record) {
            return record.airport1 + '_' + record.airport2;
        },
        setHighlight: function (style) {
            style.opacity = 1.0;

            return style;
        },
        unsetHighlight: function (style) {
            style.opacity = 0.5;

            return style;
        },
        layerOptions: {
            fill: false,
            opacity: 0.5,
            weight: 0.5,
            fillOpacity: 1.0,
            distanceToHeight: new L.LinearFunction([0, 20], [1000, 300]),
            markers: {
                end: true
            },

            // Use Q for quadratic and C for cubic
            mode: 'Q'
        },
        legendOptions: {
            width: 200,
            numSegments: 5,
            className: 'legend-line'
        },
        tooltipOptions: {
            iconSize: new L.Point(80, 64),
            iconAnchor: new L.Point(-5, 64),
            className: 'leaflet-div-icon line-legend'
        },
        displayOptions: {
            cnt: {
                weight: new L.LinearFunction([0, 1], [150, 14]),
                color: new L.HSLHueFunction([0, 200], [150, 330], {
                    outputLuminosity: '60%'
                }),
                displayName: 'Flights'
            }
        },
        onEachRecord: function (layer, record) {
            layer.bindPopup($(L.HTMLUtils.buildTable(record)).wrap('<div/>').parent().html());
        }
    };

		map.fitWorld({ animate: false });
    // set our state to include the tile layer
		this.setState({ map, tileLayer });
		
    var allLayer = new L.Graph(flights, options);
		map.addLayer(allLayer);
		var layerControl = L.control.layers().addTo(map);
		// Add a legend control
		var legendControl = L.control.legend({
			autoAdd: false
	}).addTo(map);

		var airlineLookup = this.groupBy(flights, "airline")
		var count = 0;
		for (var key in airlineLookup) {

			if (key !== 'all') {
				var airportOptions = L.extend(options, {
					includeLayer: function (record) {
						return record.airline === key;
					}
			})
			var flightLayer = new L.Graph(flights, airportOptions);
							layerControl.addOverlay(flightLayer, key);
							if (count === 0) {
								// Add the layers we want to display to the legend
								// Since all group lines use the same weight and color scales, just add the first layer to the legend
								legendControl.addLayer(flightLayer);

								// Add each layer to the map
								//map.addLayer(flightLayer);
						}
						count++;
			}
		}
	}
	

  render() {
    return (
      <div id="mapUI">
        <div ref={node => (this._mapNode = node)} id="map" />
      </div>
    );
  }
}

export default Map;
