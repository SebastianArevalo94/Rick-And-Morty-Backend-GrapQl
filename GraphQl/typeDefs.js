import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Character {
    _id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: String
    image: String
    episode: [String]
    location: String
    created: String
  }

  type Episode {
    _id: ID
    name: String
    air_date: String
    episode: String
    characters: [String]
    created: String
  }

  type Location {
    _id: ID
    name: String
    type: String
    dimension: String
    residents: [String]
    created: String
  }

  type CharacterPage {
    page: Int
    results: [Character]
  }

  type EpisodesPage {
    page: Int
    results: [Episode]
  }

  type LocationPage {
    page: Int
    results: [Location]
  }

  type Query {
    #Get Characters By Page
    characters(page: Int): CharacterPage

    #Get Character By Id
    character(id: ID): Character

    #Get Character By Name
    characterByName(name: String): Character

    #Get Episodes By Page
    episodes(page: Int): EpisodesPage

    #Get Episode By Id
    episode(id: ID): Episode

    #Get Episode by Name
    episodeByName(name: String): Episode

    #Get Locations By Page
    locations(page: Int): LocationPage

    #Get Location By Id
    location(id: ID): Location

    #Get Location By Name
    locationByName(name: String): Location
  }

  input CharacterInput {
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: String
    image: String
    episode: [String]
    location: String
    created: String
  }

  input EpisodeInput {
    name: String
    air_date: String
    episode: String
    characters: [String]
    created: String
  }

  input LocationInput {
    name: String
    type: String
    dimension: String
    residents: [String]
    created: String
  }

  type Mutation {
    #--------CRUD CHARACTERS--------#
    #Create Character
    createCharacter(character: CharacterInput): Character
    #Update Character
    updateCharacter(id: ID!, character: CharacterInput): Character
    #Delete Character
    deleteCharacter(id: ID!): String

    #--------CRUD EPISODES--------#
    #Create Episode
    createEpisode(episode: EpisodeInput): Episode
    #Update Episode
    updateEpisode(id: ID!, episode: EpisodeInput): Episode
    #Delete Episode
    deleteEpisode(id: ID): String

    #--------CRUD LOCATIONS--------#
    #Create Location
    createLocation(location: LocationInput): Location
    #Update Location
    updateLocation(id: ID, location: LocationInput): Location
    #Delete Location
    deleteLocation(id: ID) : String
  }
`;
