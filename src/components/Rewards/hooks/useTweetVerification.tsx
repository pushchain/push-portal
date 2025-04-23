import { useEffect, useState } from "react";

type ActivityType = "tweet_about_push_chain" | "tweet_about_200k_points";

type UseTweetVerificationProps = {
  userId: string;
  activityType: ActivityType;
  tweetStatusMap: Partial<Record<ActivityType, boolean>>;
  refetchStatusMap?: Partial<Record<ActivityType, () => void>>;
};

const tweetMessages: Record<ActivityType, string> = {
  tweet_about_push_chain: `Starting my journey into @PushChain’s Incentivized Devnet! 💰 Excited to explore super fun - Universal Apps, and earn rewards along the way. You can jump in too! 👇 Earn your points here 🔗 https://portal.push.org/rewards`,
  tweet_about_200k_points: `Just hit 200K points in @PushChain Devnet Drop! 💥 Universal Apps are wild. Farming points like it’s 2021 again. Start earning before the season concludes 👇 🔗 https://portal.push.org/rewards`,
};
export const useTweetVerification = ({
  userId,
  activityType,
  tweetStatusMap,
  refetchStatusMap,
}: UseTweetVerificationProps) => {
  const STORAGE_KEY = `tweet-status-${userId}-${activityType}`;
  const [isTweeting, setIsTweeting] = useState(
    sessionStorage.getItem(STORAGE_KEY) === "true",
  );
  const [tweetConfirmed, setTweetConfirmed] = useState(
    tweetStatusMap?.[activityType] || false,
  );

  const refetch = refetchStatusMap?.[activityType];

  useEffect(() => {
    if (tweetStatusMap?.[activityType]) {
      setTweetConfirmed(true);
      setIsTweeting(false);
      sessionStorage.removeItem(STORAGE_KEY);
    } else {
      setTweetConfirmed(false);
      setIsTweeting(false);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, [tweetStatusMap, activityType]);

  useEffect(() => {
    if (!isTweeting || tweetConfirmed) return;

    let attempts = 0;
    const interval = setInterval(() => {
      if (attempts >= 12 || tweetConfirmed) {
        clearInterval(interval);
        return;
      }

      refetch?.();
      attempts++;
    }, 5000);

    return () => clearInterval(interval);
  }, [isTweeting, tweetConfirmed, refetch]);

  const handleTweet = () => {
    setIsTweeting(true);
    sessionStorage.setItem(STORAGE_KEY, "true");

    const tweetText = encodeURIComponent(tweetMessages[activityType]);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  };

  return { isTweeting, tweetConfirmed, handleTweet };
};
