import { useEffect, useState } from "react";

type UseTweetVerificationProps = {
  userId: string;
  hasTweeted?: boolean;
  refetchTweetStatus?: () => void;
};

export const useTweetVerification = ({
  userId,
  hasTweeted,
  refetchTweetStatus,
}: UseTweetVerificationProps) => {
  const STORAGE_KEY = `tweet-status-${userId}`;
  const [isTweeting, setIsTweeting] = useState(
    sessionStorage.getItem(STORAGE_KEY) === "true",
  );
  const [tweetConfirmed, setTweetConfirmed] = useState(hasTweeted || false);

  useEffect(() => {
    if (hasTweeted) {
      setTweetConfirmed(true);
      setIsTweeting(false);
      sessionStorage.removeItem(STORAGE_KEY);
    } else {
      setTweetConfirmed(false);
      setIsTweeting(false);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, [hasTweeted]);

  useEffect(() => {
    if (!isTweeting || tweetConfirmed) return;

    let attempts = 0;
    const interval = setInterval(() => {
      if (attempts >= 12 || tweetConfirmed) {
        clearInterval(interval);
        return;
      }

      refetchTweetStatus?.();
      attempts++;
    }, 5000);

    return () => clearInterval(interval);
  }, [isTweeting, tweetConfirmed, refetchTweetStatus]);

  const handleTweetAboutPush = () => {
    setIsTweeting(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
    const tweetText = encodeURIComponent(
      `Starting my journey into @PushChain’s Incentivized Devnet! 💰 Excited to explore super fun - Universal Apps, and earn rewards along the way. You can jump in too! 👇 Earn your points here 🔗 https://portal.push.org/rewards`,
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  };

  return { isTweeting, tweetConfirmed, handleTweetAboutPush };
};
