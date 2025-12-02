import { Box } from '../../blocks';
import AppQuestCard from './AppQuestCard';

const ActivityStatsCards = () => {
  const degenChessQuests = [
    {
      title: 'Play 1 live game',
      xp: 150,
      isCompleted: false,
      isDisabled: true,
    },
    {
      title: 'Watch 1 live game (7+ mins)',
      xp: 200,
      progress: 0,
      maxProgress: 1,
      isCompleted: false,
      isDisabled: false,
    },
    {
      title: 'Play 3 matches',
      xp: 150,
      progress: 0,
      maxProgress: 3,
      isCompleted: false,
      isDisabled: false,
    },
    {
      title: 'Achieve ELO rating of 100',
      xp: 250,
      progress: 0,
      maxProgress: 100,
      isCompleted: false,
      isDisabled: false,
    },
    {
      title: 'Create or join a public match',
      xp: 150,
      progress: 0,
      maxProgress: 1,
      isCompleted: false,
      isDisabled: false,
    },
  ];

  const uniMarketQuests = [
    {
      title: 'Place 1 prediction bet',
      xp: 150,
      isCompleted: false,
      isDisabled: true,
    },
    {
      title: 'Win 1 prediction bet',
      xp: 200,
      progress: 0,
      maxProgress: 1,
      isCompleted: false,
      isDisabled: false,
    },
    {
      title: 'Lose 1 prediction bet',
      xp: 100,
      progress: 0,
      maxProgress: 1,
      isCompleted: false,
      isDisabled: false,
    },
    {
      title: 'Place 5 bets total',
      xp: 300,
      progress: 0,
      maxProgress: 5,
      isCompleted: false,
      isDisabled: false,
    },
    {
      title: 'Bet on 3 different markets',
      xp: 250,
      progress: 0,
      maxProgress: 3,
      isCompleted: false,
      isDisabled: false,
    },
  ];

  return (
    <Box
      display="flex"
      gap="spacing-md"
      width="100%"
      flexDirection={{ initial: 'row', tb: 'column' }}
    >
      <AppQuestCard
        appName="Degen Chess"
        appUrl="degenchess.fun"
        description="Complete quests on degenchess.fun and claim to level up and earn rewards"
        resetTime="New Quests in 6D 23H"
        quests={degenChessQuests}
      />

      <AppQuestCard
        appName="Uni Market"
        appUrl="unimarket.xyz"
        description="Complete quests on unimarket.xyz and claim to level up and earn rewards"
        resetTime="New Quests in 6D 23H"
        quests={uniMarketQuests}
        gradient="linear-gradient(241deg, rgba(221, 245, 255, 1) 0%, rgba(127, 231, 169, 1) 100%)"
        titleGradient="linear-gradient(180deg, rgba(0, 0, 0, 1) 8%, rgba(34, 132, 68, 1) 100%)"
        linkColor="#0d663b"
        blurColor="#40ee8b"
      />
    </Box>
  );
};

export default ActivityStatsCards;
