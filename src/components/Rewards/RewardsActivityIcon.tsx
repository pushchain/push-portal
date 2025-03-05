/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import {
  ActivePushPoints,
  BlueBonusActivitySubscribers,
  CreateChannelPoints,
  Discord,
  GatedGroupPoints,
  GradientBonusActivitySubscribers,
  GreyBonusActivitySubscribers,
  OrangeBonusActivitySubscribers,
  RewardsActivity,
  RockstarNFT,
  SetupProfilePoints,
  StakePushBlueCoin,
  StakePushBlueMultiplier,
  StakePushGradientCoin,
  StakePushGradientMultiplier,
  StakePushGreyCoin,
  StakePushGreyMultiplier,
  StakePushOrangeCoin,
  StakePushOrangeDoubleStarMultiplier,
  StakePushOrangeMultiplier,
  StakePushPurpleCoin,
  StakePushYellowCoin,
  StakePushYellowMultiplier,
  SubscribePoints,
  Twitter,
  YellowBonusActivitySubscribers,
  PushAlpha,
  FiveSubscribedDefiChannel,
} from '../../blocks';

// import { ActvityType } from 'queries';

type RewardsActivityIconProp = {
  type: any;
};

const RewardsActivityIcon: FC<RewardsActivityIconProp> = ({ type }) => {
  if (type === 'follow_push_on_discord') {
    return <Discord width={36} height={36} />;
  }

  if (type === 'follow_push_on_twitter') {
    return <Twitter width={36} height={36} />;
  }

  if (type === 'create_gated_group_push_chat') {
    return <GatedGroupPoints width={36} height={36} />;
  }

  if (
    type === 'subscribe_5_channels_push' ||
    type === 'subscribe_20_channels_push'
  ) {
    return <SubscribePoints width={36} height={36} />;
  }

  if (type === 'setup_push_user_profile') {
    return <SetupProfilePoints width={36} height={36} />;
  }

  if (type === 'active_push_chat_user') {
    return <ActivePushPoints width={36} height={36} />;
  }

  if (type === 'hold_push_alpha_access_nft') {
    return <PushAlpha width={36} height={36} />;
  }

  if (type === 'hold_push_rockstar_nft') {
    return <RockstarNFT width={36} height={36} />;
  }

  if (type === 'create_channel_push') {
    return <CreateChannelPoints width={36} height={36} />;
  }

  if (type === 'reach_100_subscribers') {
    return <GreyBonusActivitySubscribers width={36} height={36} />;
  }

  if (type === 'reach_500_subscribers' || type === 'reach_1000_subscribers') {
    return <OrangeBonusActivitySubscribers width={36} height={36} />;
  }

  if (type === 'reach_5000_subscribers') {
    return <BlueBonusActivitySubscribers width={36} height={36} />;
  }

  if (type === 'reach_10000_subscribers') {
    return <YellowBonusActivitySubscribers width={36} height={36} />;
  }

  if (
    type === 'reach_50000_subscribers' ||
    type === 'reach_100000_subscribers'
  ) {
    return <GradientBonusActivitySubscribers width={36} height={36} />;
  }

  if (type === 'channel_specific_subscriptions:BTC_PRICE_TRACKER_CHANNEL')
    if (type === 'atleast_5_defi_channel_specific_subscriptions') {
      return <FiveSubscribedDefiChannel width={36} height={36} />;
    }

  if (type === 'stake_1_uni_v2_lp_epoch' || type === 'stake_1k_push_epoch') {
    return <StakePushGreyCoin width={36} height={36} />;
  }

  if (type === 'stake_5_uni_v2_lp_epoch' || type === 'stake_5k_push_epoch') {
    return <StakePushOrangeCoin width={36} height={36} />;
  }

  if (type === 'stake_10_uni_v2_lp_epoch' || type === 'stake_10k_push_epoch') {
    return <StakePushPurpleCoin width={36} height={36} />;
  }

  if (type === 'stake_50_uni_v2_lp_epoch' || type === 'stake_50k_push_epoch') {
    return <StakePushBlueCoin width={36} height={36} />;
  }

  if (
    type === 'stake_100_uni_v2_lp_epoch' ||
    type === 'stake_100k_push_epoch'
  ) {
    return <StakePushYellowCoin width={36} height={36} />;
  }

  if (
    type === 'stake_500_uni_v2_lp_epoch' ||
    type === 'stake_500k_push_epoch'
  ) {
    return <StakePushGradientCoin width={36} height={36} />;
  }

  if (
    type === 'stake_1_uni_v2_lp_one_time' ||
    type === 'stake_1k_push_one_time'
  ) {
    return <StakePushGreyMultiplier width={36} height={36} />;
  }

  if (
    type === 'stake_5_uni_v2_lp_one_time' ||
    type === 'stake_5k_push_one_time'
  ) {
    return <StakePushOrangeMultiplier width={36} height={36} />;
  }

  if (
    type === 'stake_10_uni_v2_lp_one_time' ||
    type === 'stake_10k_push_one_time'
  ) {
    return <StakePushOrangeDoubleStarMultiplier width={36} height={36} />;
  }

  if (
    type === 'stake_50_uni_v2_lp_one_time' ||
    type === 'stake_50k_push_one_time'
  ) {
    return <StakePushBlueMultiplier width={36} height={36} />;
  }

  if (
    type === 'stake_100_uni_v2_lp_one_time' ||
    type === 'stake_100k_push_one_time'
  ) {
    return <StakePushYellowMultiplier width={36} height={36} />;
  }

  if (
    type === 'stake_500_uni_v2_lp_one_time' ||
    type === 'stake_500k_push_one_time'
  ) {
    return <StakePushGradientMultiplier width={36} height={36} />;
  }

  return <RewardsActivity />;
};
export { RewardsActivityIcon };
