export type CharacterStatus = 'UNMINTED' | 'MINTED' | 'RESERVED';

export interface CharacterInfoParams {
  walletAddress: string;
}

export interface CharacterGenerateParams {
  walletAddress: string;
}

export interface CharacterMintParams {
  walletAddress: string;
}

export interface CharacterReshuffleParams {
  walletAddress: string;
}

export interface CharacterInfoResponse {
  eligible: boolean;
  assigned: boolean;
  characterId: string | null;
}

export interface CharacterGenerateResponse {
  success: boolean;
  characterId: string;
  status: CharacterStatus;
}

export interface CharacterMintResponse {
  success: boolean;
  characterId: string;
  status: CharacterStatus;
}

export interface CharacterReshuffleResponse {
  success: boolean;
  newCharacterId: string;
  status: CharacterStatus;
}
