import { Playlist } from './playlist.model';

const getPlaylist = async (_, { id }) => {
  const playlist = await Playlist.findById(id).exec();
  console.log(JSON.stringify(playlist, null, 2));
  return playlist;
};

const allPlaylists = () => {
  return Playlist.find({}).exec();
};

const newPlaylist = (_, { input }) => {
  return Playlist.create(input);
};

const updatePlaylist = (_, { input }) => {
  // https://dmitripavlutin.com/object-rest-spread-properties-javascript/
  // const update = input - id
  const { id, ...update } = input;

  return Playlist.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const playlistResolvers = {
  Query: {
    allPlaylists,
    Playlist: getPlaylist,
  },
  Mutation: {
    newPlaylist,
    updatePlaylist,
  },
  Playlist: {
    async songs(playlist) {
      const populated = await playlist.populate('songs').execPopulate();

      return populated.songs;
    },
  },
};
