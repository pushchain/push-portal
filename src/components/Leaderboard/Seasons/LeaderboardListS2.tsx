// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FC } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { css } from "styled-components";
import {
  useGetRewardsLeaderboardS2,
  ModelledLeaderBoardUser,
} from "../../../queries";
import { Box, Spinner } from "../../../blocks";

import { LeaderboardListItem } from "../List/LeaderboardListItem";

import { fullCAIP10ToWallet } from "../../../helpers/web3helper";
import { LeaderBoardNullState } from "../List/LeaderboardNullState";
import { LeaderboardListColumns } from "../List/LeaderboardListColumns";

const LeaderboardListS2: FC = () => {
  const {
    data,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetRewardsLeaderboardS2({ pageSize: 20 });

  // If there are channels then render them else render 10 skeletons
  const leaderboardList = isLoading
    ? Array(10).fill(0)
    : data?.pages.flatMap((page) => page.users) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  return !leaderboardList.length ? (
    <LeaderBoardNullState
      refetchLeaderboard={isError ? refetch : undefined}
      heading="No Users Found"
      error={isError}
      subHeading={isError ? "Please refresh to view the Leaderboard" : ""}
    />
  ) : (
    !!leaderboardList.length && (
      <Box gap="spacing-sm" display="flex" flexDirection="column">
        <LeaderboardListColumns />
        <Box
          height="calc(100vh - 356px)"
          customScrollbar={true}
          css={css`
            overflow: scroll;
            overflow-x: hidden;
          `}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={() => fetchNextPage()}
            hasMore={hasMoreData}
            useWindow={false}
            threshold={150}
          >
            {leaderboardList.map(
              (item: ModelledLeaderBoardUser, index: number) => (
                <LeaderboardListItem
                  key={`${index}`}
                  rank={item.rank}
                  address={fullCAIP10ToWallet(item.userWallet)}
                  points={item.totalPoints}
                  isLoading={isLoading}
                />
              ),
            )}

            {isFetchingNextPage && (
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                margin="spacing-sm spacing-none"
              >
                <Spinner size="medium" variant="primary" />
              </Box>
            )}
          </InfiniteScroll>
        </Box>
      </Box>
    )
  );
};

export { LeaderboardListS2 };
