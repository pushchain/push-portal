import axios from 'axios';
import { getUserDiscordDetailsModelCreator } from '../../models';

export const getUserDiscordDetails = (token: string) =>
  axios({
    method: 'GET',
    url: `https://discord.com/api/users/@me`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => getUserDiscordDetailsModelCreator(response.data));
