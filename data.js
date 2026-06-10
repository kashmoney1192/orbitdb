const missionsData = [
    {
        "id": "mercury-redstone-3",
        "name": "Freedom 7",
        "agency": "NASA",
        "launchDate": "1961-05-05",
        "status": "Success",
        "synopsis": "First American in space.",
        "duration": "15 minutes",
        "rocketName": "Redstone MRLV",
        "capsuleName": "Freedom 7",
        "astronauts": [
            "Alan Shepard"
        ]
    },
    {
        "id": "mercury-redstone-4",
        "name": "Liberty Bell 7",
        "agency": "NASA",
        "launchDate": "1961-07-21",
        "status": "Success",
        "synopsis": "Second American in space. Capsule sank after splashdown.",
        "duration": "15 minutes",
        "rocketName": "Redstone MRLV",
        "capsuleName": "Liberty Bell 7",
        "astronauts": [
            "Gus Grissom"
        ]
    },
    {
        "id": "mercury-atlas-7",
        "name": "Aurora 7",
        "agency": "NASA",
        "launchDate": "1962-05-24",
        "status": "Success",
        "synopsis": "Scott Carpenter's orbital flight.",
        "duration": "4 hours, 56 mins",
        "rocketName": "Atlas LV-3B",
        "capsuleName": "Aurora 7",
        "astronauts": [
            "Scott Carpenter"
        ]
    },
    {
        "id": "mercury-atlas-8",
        "name": "Sigma 7",
        "agency": "NASA",
        "launchDate": "1962-10-03",
        "status": "Success",
        "synopsis": "Wally Schirra's 6-orbit flight.",
        "duration": "9 hours, 13 mins",
        "rocketName": "Atlas LV-3B",
        "capsuleName": "Sigma 7",
        "astronauts": [
            "Wally Schirra"
        ]
    },
    {
        "id": "mercury-atlas-9",
        "name": "Faith 7",
        "agency": "NASA",
        "launchDate": "1963-05-15",
        "status": "Success",
        "synopsis": "Final Mercury mission, 22 orbits.",
        "duration": "34 hours, 19 mins",
        "rocketName": "Atlas LV-3B",
        "capsuleName": "Faith 7",
        "astronauts": [
            "Gordon Cooper"
        ]
    },
    {
        "id": "gemini-3",
        "name": "Molly Brown",
        "agency": "NASA",
        "launchDate": "1965-03-23",
        "status": "Success",
        "synopsis": "First crewed Gemini flight.",
        "duration": "4 hours, 52 mins",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 3",
        "astronauts": [
            "Gus Grissom",
            "John Young"
        ]
    },
    {
        "id": "gemini-4",
        "name": "Gemini 4",
        "agency": "NASA",
        "launchDate": "1965-06-03",
        "status": "Success",
        "synopsis": "First American spacewalk by Ed White.",
        "duration": "4 days",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 4",
        "astronauts": [
            "James McDivitt",
            "Ed White"
        ]
    },
    {
        "id": "gemini-5",
        "name": "Gemini 5",
        "agency": "NASA",
        "launchDate": "1965-08-21",
        "status": "Success",
        "synopsis": "First week-long flight.",
        "duration": "7 days, 22 hours",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 5",
        "astronauts": [
            "Gordon Cooper",
            "Pete Conrad"
        ]
    },
    {
        "id": "gemini-6a",
        "name": "Gemini 6A",
        "agency": "NASA",
        "launchDate": "1965-12-15",
        "status": "Success",
        "synopsis": "First rendezvous in space with Gemini 7.",
        "duration": "1 day, 1 hour",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 6A",
        "astronauts": [
            "Wally Schirra",
            "Thomas Stafford"
        ]
    },
    {
        "id": "gemini-7",
        "name": "Gemini 7",
        "agency": "NASA",
        "launchDate": "1965-12-04",
        "status": "Success",
        "synopsis": "Record 14-day flight.",
        "duration": "13 days, 18 hours",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 7",
        "astronauts": [
            "Frank Borman",
            "Jim Lovell"
        ]
    },
    {
        "id": "gemini-9a",
        "name": "Gemini 9A",
        "agency": "NASA",
        "launchDate": "1966-06-03",
        "status": "Success",
        "synopsis": "Rendezvous and complex EVA.",
        "duration": "3 days",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 9A",
        "astronauts": [
            "Thomas Stafford",
            "Eugene Cernan"
        ]
    },
    {
        "id": "gemini-10",
        "name": "Gemini 10",
        "agency": "NASA",
        "launchDate": "1966-07-18",
        "status": "Success",
        "synopsis": "First use of Agena target vehicle's propulsion.",
        "duration": "2 days, 22 hours",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 10",
        "astronauts": [
            "John Young",
            "Michael Collins"
        ]
    },
    {
        "id": "gemini-11",
        "name": "Gemini 11",
        "agency": "NASA",
        "launchDate": "1966-09-12",
        "status": "Success",
        "synopsis": "Direct-ascent rendezvous.",
        "duration": "2 days, 23 hours",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 11",
        "astronauts": [
            "Pete Conrad",
            "Richard Gordon"
        ]
    },
    {
        "id": "gemini-12",
        "name": "Gemini 12",
        "agency": "NASA",
        "launchDate": "1966-11-11",
        "status": "Success",
        "synopsis": "Final Gemini flight, successful EVAs by Aldrin.",
        "duration": "3 days, 22 hours",
        "rocketName": "Titan II",
        "capsuleName": "Gemini 12",
        "astronauts": [
            "Jim Lovell",
            "Buzz Aldrin"
        ]
    },
    {
        "id": "apollo-7",
        "name": "Apollo 7",
        "agency": "NASA",
        "launchDate": "1968-10-11",
        "status": "Success",
        "synopsis": "First crewed Apollo flight.",
        "duration": "10 days, 20 hours",
        "rocketName": "Saturn IB",
        "capsuleName": "Apollo 7",
        "astronauts": [
            "Wally Schirra",
            "Donn Eisele",
            "Walter Cunningham"
        ]
    },
    {
        "id": "apollo-9",
        "name": "Apollo 9",
        "agency": "NASA",
        "launchDate": "1969-03-03",
        "status": "Success",
        "synopsis": "First crewed flight of the Lunar Module.",
        "duration": "10 days",
        "rocketName": "Saturn V",
        "capsuleName": "Gumdrop (CM)",
        "astronauts": [
            "James McDivitt",
            "David Scott",
            "Rusty Schweickart"
        ]
    },
    {
        "id": "apollo-10",
        "name": "Apollo 10",
        "agency": "NASA",
        "launchDate": "1969-05-18",
        "status": "Success",
        "synopsis": "Dress rehearsal for lunar landing.",
        "duration": "8 days",
        "rocketName": "Saturn V",
        "capsuleName": "Charlie Brown (CM)",
        "astronauts": [
            "Thomas Stafford",
            "John Young",
            "Eugene Cernan"
        ]
    },
    {
        "id": "apollo-12",
        "name": "Apollo 12",
        "agency": "NASA",
        "launchDate": "1969-11-14",
        "status": "Success",
        "synopsis": "Second lunar landing, struck by lightning during launch.",
        "duration": "10 days, 4 hours",
        "rocketName": "Saturn V",
        "capsuleName": "Yankee Clipper",
        "astronauts": [
            "Pete Conrad",
            "Richard Gordon",
            "Alan Bean"
        ]
    },
    {
        "id": "apollo-14",
        "name": "Apollo 14",
        "agency": "NASA",
        "launchDate": "1971-01-31",
        "status": "Success",
        "synopsis": "Third lunar landing, Alan Shepard plays golf.",
        "duration": "9 days",
        "rocketName": "Saturn V",
        "capsuleName": "Kitty Hawk",
        "astronauts": [
            "Alan Shepard",
            "Stuart Roosa",
            "Edgar Mitchell"
        ]
    },
    {
        "id": "apollo-15",
        "name": "Apollo 15",
        "agency": "NASA",
        "launchDate": "1971-07-26",
        "status": "Success",
        "synopsis": "First use of the Lunar Roving Vehicle.",
        "duration": "12 days, 7 hours",
        "rocketName": "Saturn V",
        "capsuleName": "Endeavour",
        "astronauts": [
            "David Scott",
            "Alfred Worden",
            "James Irwin"
        ]
    },
    {
        "id": "apollo-16",
        "name": "Apollo 16",
        "agency": "NASA",
        "launchDate": "1972-04-16",
        "status": "Success",
        "synopsis": "First landing in the lunar highlands.",
        "duration": "11 days",
        "rocketName": "Saturn V",
        "capsuleName": "Casper",
        "astronauts": [
            "John Young",
            "Ken Mattingly",
            "Charles Duke"
        ]
    },
    {
        "id": "apollo-17",
        "name": "Apollo 17",
        "agency": "NASA",
        "launchDate": "1972-12-07",
        "status": "Success",
        "synopsis": "Final Apollo lunar landing.",
        "duration": "12 days, 13 hours",
        "rocketName": "Saturn V",
        "capsuleName": "America",
        "astronauts": [
            "Eugene Cernan",
            "Ronald Evans",
            "Harrison Schmitt"
        ]
    },
    {
        "id": "skylab-1",
        "name": "Skylab 1",
        "agency": "NASA",
        "launchDate": "1973-05-14",
        "status": "Success",
        "synopsis": "Launch of the first US space station.",
        "duration": "Uncrewed",
        "rocketName": "Saturn INT-21",
        "capsuleName": "Skylab",
        "astronauts": []
    },
    {
        "id": "skylab-2",
        "name": "Skylab 2",
        "agency": "NASA",
        "launchDate": "1973-05-25",
        "status": "Success",
        "synopsis": "First crewed Skylab mission, repaired the station.",
        "duration": "28 days",
        "rocketName": "Saturn IB",
        "capsuleName": "Apollo CSM-116",
        "astronauts": [
            "Pete Conrad",
            "Paul Weitz",
            "Joseph Kerwin"
        ]
    },
    {
        "id": "skylab-3",
        "name": "Skylab 3",
        "agency": "NASA",
        "launchDate": "1973-07-28",
        "status": "Success",
        "synopsis": "Second crewed Skylab mission.",
        "duration": "59 days",
        "rocketName": "Saturn IB",
        "capsuleName": "Apollo CSM-117",
        "astronauts": [
            "Alan Bean",
            "Jack Lousma",
            "Owen Garriott"
        ]
    },
    {
        "id": "skylab-4",
        "name": "Skylab 4",
        "agency": "NASA",
        "launchDate": "1973-11-16",
        "status": "Success",
        "synopsis": "Final crewed Skylab mission.",
        "duration": "84 days",
        "rocketName": "Saturn IB",
        "capsuleName": "Apollo CSM-118",
        "astronauts": [
            "Gerald Carr",
            "William Pogue",
            "Edward Gibson"
        ]
    },
    {
        "id": "astp",
        "name": "Apollo-Soyuz",
        "agency": "NASA",
        "launchDate": "1975-07-15",
        "status": "Success",
        "synopsis": "First joint US-Soviet space flight.",
        "duration": "9 days",
        "rocketName": "Saturn IB",
        "capsuleName": "Apollo CSM-111",
        "astronauts": [
            "Thomas Stafford",
            "Vance Brand",
            "Deke Slayton"
        ]
    },
    {
        "id": "sts-2",
        "name": "STS-2",
        "agency": "NASA",
        "launchDate": "1981-11-12",
        "status": "Success",
        "synopsis": "First time a crewed reusable spacecraft was flown twice.",
        "duration": "2 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Columbia",
        "astronauts": [
            "Joe Engle",
            "Richard Truly"
        ]
    },
    {
        "id": "sts-7",
        "name": "STS-7",
        "agency": "NASA",
        "launchDate": "1983-06-18",
        "status": "Success",
        "synopsis": "First American woman in space (Sally Ride).",
        "duration": "6 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Challenger",
        "astronauts": [
            "Robert Crippen",
            "Frederick Hauck",
            "John Fabian",
            "Sally Ride",
            "Norman Thagard"
        ]
    },
    {
        "id": "sts-8",
        "name": "STS-8",
        "agency": "NASA",
        "launchDate": "1983-08-30",
        "status": "Success",
        "synopsis": "First night launch and landing of the shuttle. First African American in space (Guion Bluford).",
        "duration": "6 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Challenger",
        "astronauts": [
            "Richard Truly",
            "Daniel Brandenstein",
            "Dale Gardner",
            "Guion Bluford",
            "William Thornton"
        ]
    },
    {
        "id": "sts-9",
        "name": "STS-9",
        "agency": "NASA",
        "launchDate": "1983-11-28",
        "status": "Success",
        "synopsis": "First flight of Spacelab.",
        "duration": "10 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Columbia",
        "astronauts": [
            "John Young",
            "Brewster Shaw",
            "Owen Garriott",
            "Robert Parker",
            "Ulf Merbold",
            "Byron Lichtenberg"
        ]
    },
    {
        "id": "sts-41-b",
        "name": "STS-41-B",
        "agency": "NASA",
        "launchDate": "1984-02-03",
        "status": "Success",
        "synopsis": "First untethered spacewalk using the MMU.",
        "duration": "7 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Challenger",
        "astronauts": [
            "Vance Brand",
            "Robert Gibson",
            "Bruce McCandless II",
            "Ronald McNair",
            "Robert Stewart"
        ]
    },
    {
        "id": "sts-41-c",
        "name": "STS-41-C",
        "agency": "NASA",
        "launchDate": "1984-04-06",
        "status": "Success",
        "synopsis": "First capture and repair of a satellite in orbit (Solar Max).",
        "duration": "6 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Challenger",
        "astronauts": [
            "Robert Crippen",
            "Dick Scobee",
            "George Nelson",
            "James van Hoften",
            "Terry Hart"
        ]
    },
    {
        "id": "sts-41-g",
        "name": "STS-41-G",
        "agency": "NASA",
        "launchDate": "1984-10-05",
        "status": "Success",
        "synopsis": "First flight with two women. First spacewalk by an American woman.",
        "duration": "8 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Challenger",
        "astronauts": [
            "Robert Crippen",
            "Jon McBride",
            "Kathryn Sullivan",
            "Sally Ride",
            "David Leestma",
            "Marc Garneau",
            "Paul Scully-Power"
        ]
    },
    {
        "id": "sts-51-a",
        "name": "STS-51-A",
        "agency": "NASA",
        "launchDate": "1984-11-08",
        "status": "Success",
        "synopsis": "First deployment of two satellites and retrieval of two others.",
        "duration": "7 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Discovery",
        "astronauts": [
            "Frederick Hauck",
            "David Walker",
            "Anna Fisher",
            "Dale Gardner",
            "Joseph Allen"
        ]
    },
    {
        "id": "sts-61-a",
        "name": "STS-61-A",
        "agency": "NASA",
        "launchDate": "1985-10-30",
        "status": "Success",
        "synopsis": "First and only flight with 8 crew members. Funded by West Germany.",
        "duration": "7 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Challenger",
        "astronauts": [
            "Henry Hartsfield",
            "Steven Nagel",
            "Bonnie Dunbar",
            "James Buchli",
            "Guion Bluford",
            "Reinhard Furrer",
            "Ernst Messerschmid",
            "Wubbo Ockels"
        ]
    },
    {
        "id": "sts-26",
        "name": "STS-26",
        "agency": "NASA",
        "launchDate": "1988-09-29",
        "status": "Success",
        "synopsis": "Return to flight after the Challenger disaster.",
        "duration": "4 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Discovery",
        "astronauts": [
            "Frederick Hauck",
            "Richard Covey",
            "John Lounge",
            "George Nelson",
            "David Hilmers"
        ]
    },
    {
        "id": "sts-71",
        "name": "STS-71",
        "agency": "NASA",
        "launchDate": "1995-06-27",
        "status": "Success",
        "synopsis": "First Shuttle docking with the Russian space station Mir.",
        "duration": "9 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Atlantis",
        "astronauts": [
            "Robert Gibson",
            "Charles Precourt",
            "Ellen Baker",
            "Gregory Harbaugh",
            "Bonnie Dunbar",
            "Anatoly Solovyev",
            "Nikolai Budarin"
        ]
    },
    {
        "id": "sts-88",
        "name": "STS-88",
        "agency": "NASA",
        "launchDate": "1998-12-04",
        "status": "Success",
        "synopsis": "First Space Shuttle mission to the International Space Station.",
        "duration": "11 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Endeavour",
        "astronauts": [
            "Robert Cabana",
            "Frederick Sturckow",
            "Nancy Currie",
            "Jerry Ross",
            "James Newman",
            "Sergei Krikalev"
        ]
    },
    {
        "id": "sts-114",
        "name": "STS-114",
        "agency": "NASA",
        "launchDate": "2005-07-26",
        "status": "Success",
        "synopsis": "Return to flight after the Columbia disaster.",
        "duration": "13 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Discovery",
        "astronauts": [
            "Eileen Collins",
            "James Kelly",
            "Soichi Noguchi",
            "Stephen Robinson",
            "Andrew Thomas",
            "Wendy Lawrence",
            "Charles Camarda"
        ]
    },
    {
        "id": "sts-125",
        "name": "STS-125",
        "agency": "NASA",
        "launchDate": "2009-05-11",
        "status": "Success",
        "synopsis": "Final Hubble Space Telescope servicing mission.",
        "duration": "12 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Atlantis",
        "astronauts": [
            "Scott Altman",
            "Gregory Johnson",
            "Michael Good",
            "Megan McArthur",
            "John Grunsfeld",
            "Michael Massimino",
            "Andrew Feustel"
        ]
    },
    {
        "id": "sts-135",
        "name": "STS-135",
        "agency": "NASA",
        "launchDate": "2011-07-08",
        "status": "Success",
        "synopsis": "Final flight of the Space Shuttle program.",
        "duration": "12 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Atlantis",
        "astronauts": [
            "Christopher Ferguson",
            "Douglas Hurley",
            "Sandra Magnus",
            "Rex Walheim"
        ]
    },
    {
        "id": "sputnik-1",
        "name": "Sputnik 1",
        "agency": "Soviet",
        "launchDate": "1957-10-04",
        "status": "Success",
        "synopsis": "First artificial Earth satellite.",
        "duration": "92 days",
        "rocketName": "Sputnik 8K71PS",
        "capsuleName": "Sputnik",
        "astronauts": []
    },
    {
        "id": "sputnik-2",
        "name": "Sputnik 2",
        "agency": "Soviet",
        "launchDate": "1957-11-03",
        "status": "Success",
        "synopsis": "First living being in orbit (Laika the dog).",
        "duration": "162 days",
        "rocketName": "Sputnik 8K71PS",
        "capsuleName": "Sputnik",
        "astronauts": []
    },
    {
        "id": "vostok-2",
        "name": "Vostok 2",
        "agency": "Soviet",
        "launchDate": "1961-08-06",
        "status": "Success",
        "synopsis": "First full day in space.",
        "duration": "1 day",
        "rocketName": "Vostok-K",
        "capsuleName": "Vostok 3KA",
        "astronauts": [
            "Gherman Titov"
        ]
    },
    {
        "id": "vostok-6",
        "name": "Vostok 6",
        "agency": "Soviet",
        "launchDate": "1963-06-16",
        "status": "Success",
        "synopsis": "First woman in space.",
        "duration": "2 days, 22 hours",
        "rocketName": "Vostok-K",
        "capsuleName": "Vostok 3KA",
        "astronauts": [
            "Valentina Tereshkova"
        ]
    },
    {
        "id": "voskhod-1",
        "name": "Voskhod 1",
        "agency": "Soviet",
        "launchDate": "1964-10-12",
        "status": "Success",
        "synopsis": "First multi-person crew.",
        "duration": "1 day",
        "rocketName": "Voskhod",
        "capsuleName": "Voskhod 3KV",
        "astronauts": [
            "Vladimir Komarov",
            "Konstantin Feoktistov",
            "Boris Yegorov"
        ]
    },
    {
        "id": "voskhod-2",
        "name": "Voskhod 2",
        "agency": "Soviet",
        "launchDate": "1965-03-18",
        "status": "Success",
        "synopsis": "First extravehicular activity (EVA).",
        "duration": "1 day",
        "rocketName": "Voskhod",
        "capsuleName": "Voskhod 3KD",
        "astronauts": [
            "Pavel Belyayev",
            "Alexei Leonov"
        ]
    },
    {
        "id": "soyuz-1",
        "name": "Soyuz 1",
        "agency": "Soviet",
        "launchDate": "1967-04-23",
        "status": "Failed",
        "synopsis": "First fatal in-flight accident. Parachute failed on reentry.",
        "duration": "1 day",
        "rocketName": "Soyuz",
        "capsuleName": "Soyuz 7K-OK",
        "astronauts": [
            "Vladimir Komarov"
        ]
    },
    {
        "id": "soyuz-11",
        "name": "Soyuz 11",
        "agency": "Soviet",
        "launchDate": "1971-06-06",
        "status": "Failed",
        "synopsis": "First crew to board a space station (Salyut 1). Crew died on reentry due to depressurization.",
        "duration": "23 days",
        "rocketName": "Soyuz",
        "capsuleName": "Soyuz 7KT-OK",
        "astronauts": [
            "Georgy Dobrovolsky",
            "Vladislav Volkov",
            "Viktor Patsayev"
        ]
    },
    {
        "id": "crs-1",
        "name": "SpaceX CRS-1",
        "agency": "SpaceX",
        "launchDate": "2012-10-08",
        "status": "Success",
        "synopsis": "First operational cargo resupply mission to the ISS.",
        "duration": "20 days",
        "rocketName": "Falcon 9",
        "capsuleName": "Dragon C103",
        "astronauts": []
    },
    {
        "id": "crs-8",
        "name": "SpaceX CRS-8",
        "agency": "SpaceX",
        "launchDate": "2016-04-08",
        "status": "Success",
        "synopsis": "First successful landing of a first stage on a drone ship.",
        "duration": "33 days",
        "rocketName": "Falcon 9",
        "capsuleName": "Dragon C110",
        "astronauts": []
    },
    {
        "id": "crew-1",
        "name": "Crew-1",
        "agency": "SpaceX",
        "launchDate": "2020-11-15",
        "status": "Success",
        "synopsis": "First operational crewed flight of Crew Dragon.",
        "duration": "167 days",
        "rocketName": "Falcon 9",
        "capsuleName": "Resilience",
        "astronauts": [
            "Michael Hopkins",
            "Victor Glover",
            "Soichi Noguchi",
            "Shannon Walker"
        ]
    },
    {
        "id": "crew-2",
        "name": "Crew-2",
        "agency": "SpaceX",
        "launchDate": "2021-04-23",
        "status": "Success",
        "synopsis": "First reuse of a Crew Dragon capsule.",
        "duration": "199 days",
        "rocketName": "Falcon 9",
        "capsuleName": "Endeavour",
        "astronauts": [
            "Shane Kimbrough",
            "Megan McArthur",
            "Akihiko Hoshide",
            "Thomas Pesquet"
        ]
    },
    {
        "id": "starship-ift-2",
        "name": "Starship IFT-2",
        "agency": "SpaceX",
        "launchDate": "2023-11-18",
        "status": "Failed",
        "synopsis": "Second test flight. Achieved stage separation before destruction.",
        "duration": "8 mins",
        "rocketName": "Starship",
        "capsuleName": "Starship",
        "astronauts": []
    },
    {
        "id": "starship-ift-3",
        "name": "Starship IFT-3",
        "agency": "SpaceX",
        "launchDate": "2024-03-14",
        "status": "Success",
        "synopsis": "Third test flight. Reached orbital velocity.",
        "duration": "49 mins",
        "rocketName": "Starship",
        "capsuleName": "Starship",
        "astronauts": []
    },
    {
        "id": "starship-ift-4",
        "name": "Starship IFT-4",
        "agency": "SpaceX",
        "launchDate": "2024-06-06",
        "status": "Success",
        "synopsis": "Fourth test flight. Successful reentry and soft splashdown.",
        "duration": "1 hour, 6 mins",
        "rocketName": "Starship",
        "capsuleName": "Starship",
        "astronauts": []
    },
    {
        "id": "voyager-1",
        "name": "Voyager 1",
        "agency": "NASA",
        "launchDate": "1977-09-05",
        "status": "Success",
        "synopsis": "Flew by Jupiter and Saturn. First human-made object to reach interstellar space.",
        "duration": "Ongoing",
        "rocketName": "Titan IIIE",
        "capsuleName": "Voyager",
        "astronauts": []
    },
    {
        "id": "voyager-2",
        "name": "Voyager 2",
        "agency": "NASA",
        "launchDate": "1977-08-20",
        "status": "Success",
        "synopsis": "Flew by Jupiter, Saturn, Uranus, and Neptune.",
        "duration": "Ongoing",
        "rocketName": "Titan IIIE",
        "capsuleName": "Voyager",
        "astronauts": []
    },
    {
        "id": "pioneer-10",
        "name": "Pioneer 10",
        "agency": "NASA",
        "launchDate": "1972-03-02",
        "status": "Success",
        "synopsis": "First spacecraft to travel through the asteroid belt and visit Jupiter.",
        "duration": "30 years",
        "rocketName": "Atlas-Centaur",
        "capsuleName": "Pioneer",
        "astronauts": []
    },
    {
        "id": "pioneer-11",
        "name": "Pioneer 11",
        "agency": "NASA",
        "launchDate": "1973-04-06",
        "status": "Success",
        "synopsis": "First to visit Saturn.",
        "duration": "22 years",
        "rocketName": "Atlas-Centaur",
        "capsuleName": "Pioneer",
        "astronauts": []
    },
    {
        "id": "galileo",
        "name": "Galileo",
        "agency": "NASA",
        "launchDate": "1989-10-18",
        "status": "Success",
        "synopsis": "First spacecraft to orbit Jupiter.",
        "duration": "14 years",
        "rocketName": "Space Shuttle",
        "capsuleName": "Galileo Orbiter",
        "astronauts": []
    },
    {
        "id": "cassini",
        "name": "Cassini-Huygens",
        "agency": "NASA",
        "launchDate": "1997-10-15",
        "status": "Success",
        "synopsis": "First spacecraft to orbit Saturn.",
        "duration": "20 years",
        "rocketName": "Titan IVB",
        "capsuleName": "Cassini Orbiter",
        "astronauts": []
    },
    {
        "id": "new-horizons",
        "name": "New Horizons",
        "agency": "NASA",
        "launchDate": "2006-01-19",
        "status": "Success",
        "synopsis": "First spacecraft to explore Pluto.",
        "duration": "Ongoing",
        "rocketName": "Atlas V 551",
        "capsuleName": "New Horizons",
        "astronauts": []
    },
    {
        "id": "curiosity",
        "name": "Mars Science Laboratory",
        "agency": "NASA",
        "launchDate": "2011-11-26",
        "status": "Success",
        "synopsis": "Landed the Curiosity rover in Gale Crater.",
        "duration": "Ongoing",
        "rocketName": "Atlas V 541",
        "capsuleName": "Curiosity",
        "astronauts": []
    },
    {
        "id": "parker-solar-probe",
        "name": "Parker Solar Probe",
        "agency": "NASA",
        "launchDate": "2018-08-12",
        "status": "Success",
        "synopsis": "Mission to make observations of the outer corona of the Sun.",
        "duration": "Ongoing",
        "rocketName": "Delta IV Heavy",
        "capsuleName": "PSP",
        "astronauts": []
    },
    {
        "id": "juno",
        "name": "Juno",
        "agency": "NASA",
        "launchDate": "2011-08-05",
        "status": "Success",
        "synopsis": "Orbiting Jupiter to study its composition, gravity field, and magnetic field.",
        "duration": "Ongoing",
        "rocketName": "Atlas V 551",
        "capsuleName": "Juno",
        "astronauts": []
    },
    {
        "id": "osiris-rex",
        "name": "OSIRIS-REx",
        "agency": "NASA",
        "launchDate": "2016-09-08",
        "status": "Success",
        "synopsis": "Returned an asteroid sample to Earth.",
        "duration": "7 years",
        "rocketName": "Atlas V 411",
        "capsuleName": "OSIRIS-REx",
        "astronauts": []
    },
    {
        "id": "vostok-1",
        "name": "Vostok 1",
        "agency": "Soviet",
        "launchDate": "1961-04-12",
        "status": "Success",
        "synopsis": "First human spaceflight.",
        "duration": "1 hour, 48 mins",
        "rocketName": "Vostok-K",
        "capsuleName": "Vostok 3KA",
        "astronauts": [
            "Yuri Gagarin"
        ]
    },
    {
        "id": "shenzhou-5",
        "name": "Shenzhou 5",
        "agency": "CNSA",
        "launchDate": "2003-10-15",
        "status": "Success",
        "synopsis": "First Chinese crewed spaceflight.",
        "duration": "21 hours",
        "rocketName": "Long March 2F",
        "capsuleName": "Shenzhou",
        "astronauts": [
            "Yang Liwei"
        ]
    },
    {
        "id": "apollo-8",
        "name": "Apollo 8",
        "agency": "NASA",
        "launchDate": "1968-12-21",
        "status": "Success",
        "synopsis": "First crewed spacecraft to leave low Earth orbit, reach the Moon, orbit it, and return.",
        "duration": "6 days",
        "rocketName": "Saturn V",
        "capsuleName": "Apollo CSM",
        "astronauts": [
            "Frank Borman",
            "Jim Lovell",
            "William Anders"
        ]
    },
    {
        "id": "gemini-8",
        "name": "Gemini 8",
        "agency": "NASA",
        "launchDate": "1966-03-16",
        "status": "Success",
        "synopsis": "First docking of two spacecraft in orbit.",
        "duration": "10 hours",
        "rocketName": "Titan II",
        "capsuleName": "Gemini",
        "astronauts": [
            "Neil Armstrong",
            "David Scott"
        ]
    },
    {
        "id": "sts-1",
        "name": "STS-1",
        "agency": "NASA",
        "launchDate": "1981-04-12",
        "status": "Success",
        "synopsis": "First flight of the Space Shuttle.",
        "duration": "2 days",
        "rocketName": "Space Shuttle",
        "capsuleName": "Columbia",
        "astronauts": [
            "John Young",
            "Robert Crippen"
        ]
    }
];
