import { Song } from './song.model';

const getSong = async (_, { id }, { user }) => {
  const song = await Song.findById(id).exec();

  if (!song) {
    throw new Error('Cannot find song with this id');
  }

  return song;
};

const allSongs = () => {
  return Song.find({}).exec();
};

const newSong = (_, { input }) => {
  return Song.create(input);
};

const updateSong = (_, { input }) => {
  const { id, ...update } = input;

  return Song.findByIdAndUpdate(id, update, { new: true }).exec();
};

const removeSong = (_, { id }) => {
  return Song.findByIdAndRemove(id).exec();
};

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong,
  },
  Mutation: {
    newSong,
    updateSong,
    removeSong,
  },
};
