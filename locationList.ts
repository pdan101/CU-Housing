import { Location } from "./types"

const locationList : Location[] = [
    {
      name: "Morrison",
      id: "morrison",
      region: "North Campus",
      address: "Cornell University, 18 Sisson Pl, Ithaca, NY 14850",
      img: "https://news.cornell.edu/sites/default/files/styles/full_size/public/2021-09/0922_green3.jpg?itok=3FQUEsPj"
    },
    {
      name: "Balch",
      id: "bh",
      region: "North Campus",
      address: "Balch Hall, Ithaca, NY 14850",
      img: "https://www.fs.cornell.edu/fs/facinfo/displayImage.cfm?imageId=3009"
    },
    {
      name: "Dickson",
      id: "cd",
      region: "North Campus",
      address: "21 Northcross Rd, Ithaca, NY 14853",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Clara_Dickson_Hall%2C_Cornell_University_NY.jpg"
    },
    {
      name: "Court-Kay-Bauer",
      id: "ckb",
      region: "North Campus",
      address: "148 Cradit Farm Dr, Ithaca, NY 14850",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Kay_Hall_%28left%29_and_Bauer_Hall_%28right%29%2C_Cornell_University.jpg"
    },
    {
      name: "Ganędagǫ",
      id: "g",
      region: "North Campus",
      address: "121 Triphammer Rd, Ithaca, NY 14850"  ,
      img: "https://www.14850.com/wp-content/uploads/2021/12/ganedago-hall.jpg"
    },
    {
      name: "High Rise 5",
      id: "hr5",
      region: "North Campus",
      address: "225 Jessup Rd, Ithaca, NY 14853",
      img: "https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2019-11/Screen%20Shot%202019-11-08%20at%209.48.41%20AM.png?h=2c87ba76&itok=aad_-uNm"  
    },
    {
      name: "Jameson",
      id: "j",
      region: "North Campus",
      address: "Jameson Hall, Ithaca, NY 14850, USA"  ,
      img: "https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2019-11/Screen%20Shot%202019-11-08%20at%209.54.54%20AM.png?h=746c02d9&itok=pe9S3Z4y"
    },
    {
      name: "Low Rise 6",
      id: "lr6",
      region: "North Campus",
      address: "Low rise #6, Ithaca, NY 14850, USA"  ,
      img: "https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2019-11/Screen%20Shot%202019-11-08%20at%2010.00.07%20AM.png?h=2c87ba76&itok=2RjJXhOu"
    },
    {
      name: "Low Rise 7",
      id: "lr7",
      region: "North Campus",
      address: "Low Rise #7, ithaca, NY 14850, USA"  ,
      img: "https://www.fs.cornell.edu/facinfo/displayImage.cfm?imageId=3207"
    },
    {
      name: "Donlon",
      id: "md",
      region: "North Campus",
      address: "Mary Donlon Hall, Ithaca, NY 14850, USA"  ,
      img: "http://photos.wikimapia.org/p/00/02/59/51/75_big.jpg"
    },
    {
      name: "Mews",
      id: "m",
      region: "North Campus",
      address: "Mews Hall, 172 Cradit Farm Dr, Ithaca, NY 14853, USA"  ,
      img: "https://cornellsun.com/wp-content/uploads/2018/08/Pg-1-North-Campus-File-Photo.jpg"
    },
    {
      name: "Cook",
      id: "ach",
      region: "West Campus",
      address: "Alice Cook House, Ithaca, NY 14850, USA"  ,
      img: "https://localist-images.azureedge.net/photos/16501/original/550a6c3078c1deeee6056bcf42cf179eca8c23a5.jpg"
    },
    {
      name: "Becker",
      id: "cbh",
      region: "West Campus",
      address: "Carl Becker House, Ithaca, NY 14850"  ,
      img: "https://carlbeckerhouse.cornell.edu/sites/carlbeckerhouse/files/2019-08/carlbeckerhouseslide_003.jpg"
    },
    {
      name: "Bethe",
      id: "hbh",
      region: "West Campus",
      address: "Hans Bethe House, Ithaca, NY 14850"  ,
      img: "https://hansbethehouse.cornell.edu/sites/hansbethehouse/files/2019-08/hansbethehouseslide_003.jpg"
    },
    {
      name: "Keeton",
      id: "wkh",
      region: "West Campus",
      address: "William Keeton House, Ithaca, NY 14850"  ,
      img: "https://williamkeetonhouse.cornell.edu/sites/williamkeetonhouse/files/2019-08/williamkeetonhouseslide_001.jpg"
    },
    {
      name: "Rose",
      id: "frh",
      region: "West Campus",
      address: "Flora Rose House, Ithaca, NY 14850"  ,
      img: "https://florarosehouse.cornell.edu/sites/florarosehouse/files/2019-08/florarosehouseslide_004_2.jpg"
    },
    {
      name: "Cascadilla",
      id: "c",
      region: "Collegetown",
      address: "Cascadilla Hall, Ithaca, NY 14850"  ,
      img: "https://www.fs.cornell.edu/fs/facinfo/displayImage.cfm?imageId=3001"
    },
    {
      name: "112 Edgemoor",
      id: "e",
      region: "West Campus",
      address: "112 Edgemoor, Ithaca, NY 14850, USA"  ,
      img: "https://www.fs.cornell.edu/fs/facinfo/displayImage.cfm?imageId=4748"
    },
    {
      name: "Schuyler",
      id: "sh",
      region: "Collegetown",
      address: "Schuyler House, Ithaca, NY 14850"  ,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Schuyler_House%2C_Cornell_University.jpg/1280px-Schuyler_House%2C_Cornell_University.jpg"
    },
    {
      name: "Sheldon",
      id: "sc",
      region: "Collegetown",
      address: "Sheldon Court, Ithaca, NY 14850"  ,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Sheldon_Court%2C_Cornell_University.jpg"
    }
  ]

export default locationList