import React from "react"
import NextLink from "next/link"
import { Box, Button, HStack, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"

type Dorm = {
  name: string
  path: string
}

const dormList: Dorm[] = [
  {
    name: "Balch Hall",
    path: "/balch",
  },
  {
    name: "Barbara McClintock",
    path: "/mcclintock",
  },
  {
    name: "Clara Dickson",
    path: "/dickson"
  },
  {
    name: "Court-Kay-Bauer",
    path: "/ckb"
  },
  {
    name: "Ganędagǫ",
    path: "/ganedago"
  },
  {
    name: "High Rise 5",
    path: "/highrise5"
  },
  {
    name: "Hu Shih",
    path: "/hushih"
  },
  {
    name: "Jameson",
    path: "/jameson"
  },
  {
    name: "Low Rise 6",
    path: "/lowrise6"
  },
  {
    name: "Low Rise 7",
    path: "/lowrise7"
  },
  {
    name: "Mary Donlon",
    path: "/donlon"
  },
  {
    name: "Mews",
    path: "/mews"
  },
  {
    name: "Toni Morrison",
    path: "/morrison"
  },
  {
    name: "Alice Cook House",
    path: "/cook"
  },
  {
    name: "Carl Becker House",
    path: "/becker"
  },
  {
    name: "Hans Bethe House",
    path: "/bethe"
  },
  {
    name: "William Keeton House",
    path: "/keeton"
  },
  {
    name: "Flora Rose House",
    path: "/florarose"
  },
  {
    name: "Cascadilla",
    path: "/cascadilla"
  },
  {
    name: "112 Edgemoor",
    path: "/edgemoor"
  },
  {
    name: "Schuyler House",
    path: "/schuyler"
  },
  {
    name: "Sheldon Court",
    path: "/sheldon"
  }
]

const NavLink = ({ name, path }: Dorm) => {
  const { pathname: currentPath } = useRouter()
  return (
    <NextLink key={path} href={path} passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        tabIndex={-1}
      >
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"facebook"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  )
}

const Dorms = () => {
  return (
    <Box px={4} shadow="base">
      <HStack justifyContent="space-between">
        <HStack h={14} as="nav" spacing={4} alignItems="center">
          {dormList.map((dorm) => (
            <NavLink key={dorm.path} {...dorm} />
          ))}
        </HStack>
      </HStack>
    </Box>
  )
}

export default { Dorms, dormList }
