import { Box } from '../../blocks';
import QuestBannerCard from './QuestBannerCard';
import SpinToWinCard from './SpinToWinCard';
import CollectRaresCard from './CollectRaresCard';

const HeroBannerCards = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ initial: 'row', tb: 'column' }}
      alignItems="stretch"
      gap="spacing-md"
      width="100%"
    >
      <QuestBannerCard />
      <SpinToWinCard />
      <CollectRaresCard />
    </Box>
  );
};

export default HeroBannerCards;
