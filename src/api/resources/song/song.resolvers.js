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

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong,
  },
};
