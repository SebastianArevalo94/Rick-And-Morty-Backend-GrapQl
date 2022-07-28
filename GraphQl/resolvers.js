import { Character } from "../API/models/Character.js";
import { Episode } from "../API/models/Episode.js";
import { Location } from "../API/models/Location.js";

const setPage = async (data) => {
  const allCharacters = await Character.find();
  const allEpisodes = await Episode.find();
  const allLocations = await Location.find();
  let finalPage;
  if (data === "characters") {
    const ultimatePage = allCharacters.filter(
      (character) =>
        character.page === allCharacters[allCharacters.length - 1].page
    );
    const page =
      ultimatePage.length === 20
        ? allCharacters[allCharacters.length - 1].page + 1
        : allCharacters[allCharacters.length - 1].page;
    finalPage = page;
  } else if (data === "episodes") {
    const ultimatePage = allEpisodes.filter(
      (episode) => episode.page === allEpisodes[allEpisodes.length - 1].page
    );
    const page =
      ultimatePage.length === 20
        ? allEpisodes[allEpisodes.length - 1].page + 1
        : allEpisodes[allEpisodes.length - 1].page;
    finalPage = page;
  } else if (data === "locations") {
    const ultimatePage = allLocations.filter(
      (location) => location.page === allLocations[allLocations.length - 1].page
    );
    const page =
      ultimatePage.length === 20
        ? allLocations[allLocations.length - 1].page + 1
        : allLocations[allLocations.length - 1].page;
    finalPage = page;
  }
  return finalPage;
};

export const resolvers = {
  Query: {
    characters: async (_, { page }) => {
      let characters = await Character.find({ page });
      return {
        page: page,
        results: characters,
      };
    },
    character: async (_, { id }) => {
      const character = await Character.findById(id);
      return character;
    },
    characterByName: async (_, { name }) => {
      const character = await Character.findOne({ name });
      return character;
    },
    episodes: async (_, { page }) => {
      const episodes = await Episode.find({ page });
      return {
        page: page,
        results: episodes,
      };
    },
    episode: async (_, { id }) => {
      const episode = await Episode.findById(id);
      return episode;
    },
    episodeByName: async (_, { name }) => {
      const episode = await Episode.findOne({ name });
      return episode;
    },
    locations: async (_, { page }) => {
      const locations = await Location.find({ page });
      return {
        page: page,
        results: locations,
      };
    },
    location: async (_, { id }) => {
      const location = await Location.findById(id);
      return location;
    },
    locationByName: async (_, { name }) => {
      const location = await Location.findOne({ name });
      return location;
    },
  },
  Mutation: {
    createCharacter: async (_, { character }) => {
      const newCharacter = new Character(character);
      newCharacter.page = await setPage("characters");
      await newCharacter.save();
      return newCharacter;
    },
    updateCharacter: async (_, { id, character }) => {
      const updatedCharacter = await Character.findByIdAndUpdate(
        id,
        { $set: character },
        { new: true }
      );
      return updatedCharacter;
    },
    deleteCharacter: async (_, { id }) => {
      await Character.findByIdAndDelete(id);
      return "Character Deleted";
    },
    createEpisode: async (_, { episode }) => {
      const newEpisode = new Episode(episode);
      newEpisode.page = await setPage("episodes");
      await newEpisode.save(episode);
      return newEpisode;
    },
    updateEpisode: async (_, { id, episode }) => {
      const newEpisode = await Episode.findByIdAndUpdate(
        id,
        { $set: episode },
        { new: true }
      );
      return newEpisode;
    },
    deleteEpisode: async (_, { id }) => {
      await Episode.findByIdAndDelete(id);
      return "Episode Deleted!";
    },
    createLocation: async (_, { location }) => {
      const newLocation = new Location(location);
      newLocation.page = await setPage("locations");
      await newLocation.save();
      return newLocation;
    },
    updateLocation: async (_, { id, location }) => {
      const updatedLocation = await Location.findByIdAndUpdate(
        id,
        { $set: location },
        { new: true }
      );
      return updatedLocation;
    },
    deleteLocation: async (_, { id }) => {
      await Location.findByIdAndDelete(id);
      return "Location Deleted!";
    },
  },
};
