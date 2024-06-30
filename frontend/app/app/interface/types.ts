export interface ScoreData1 {
    "ability1_category1_q1_0m": number;
    "ability1_category1_q2_0m": number;
    "ability1_category1_q3_0m": number;
    "ability1_category2_q1_0m": number;
    "ability1_category2_q2_0m": number;
    "ability1_category2_q3_0m": number;
    "ability1_category3_q1_0m": number;
    "ability1_category3_q2_0m": number;
    "ability1_category3_q3_0m": number;
    "ability1_category1_q1_6m": number;
    "ability1_category1_q2_6m": number;
    "ability1_category1_q3_6m": number;
    "ability1_category2_q1_6m": number;
    "ability1_category2_q2_6m": number;
    "ability1_category2_q3_6m": number;
    "ability1_category3_q1_6m": number;
    "ability1_category3_q2_6m": number;
    "ability1_category3_q3_6m": number;
    "ability1_category1_q1_12m": number;
    "ability1_category1_q2_12m": number;
    "ability1_category1_q3_12m": number;
    "ability1_category2_q1_12m": number;
    "ability1_category2_q2_12m": number;
    "ability1_category2_q3_12m": number;
    "ability1_category3_q1_12m": number;
    "ability1_category3_q2_12m": number;
    "ability1_category3_q3_12m": number;
}

export interface ScoreData2 {
    "ability2_category1_q1_0m": number;
    "ability2_category1_q2_0m": number;
    "ability2_category1_q3_0m": number;
    "ability2_category2_q1_0m": number;
    "ability2_category2_q2_0m": number;
    "ability2_category2_q3_0m": number;
    "ability2_category3_q1_0m": number;
    "ability2_category3_q2_0m": number;
    "ability2_category3_q3_0m": number;
    "ability2_category1_q1_6m": number;
    "ability2_category1_q2_6m": number;
    "ability2_category1_q3_6m": number;
    "ability2_category2_q1_6m": number;
    "ability2_category2_q2_6m": number;
    "ability2_category2_q3_6m": number;
    "ability2_category3_q1_6m": number;
    "ability2_category3_q2_6m": number;
    "ability2_category3_q3_6m": number;
    "ability2_category1_q1_12m": number;
    "ability2_category1_q2_12m": number;
    "ability2_category1_q3_12m": number;
    "ability2_category2_q1_12m": number;
    "ability2_category2_q2_12m": number;
    "ability2_category2_q3_12m": number;
    "ability2_category3_q1_12m": number;
    "ability2_category3_q2_12m": number;
    "ability2_category3_q3_12m": number;
}

export interface ScoreData3 {
    "ability3_category1_q2_0m": number;
    "ability3_category1_q3_0m": number;
    "ability3_category2_q1_0m": number;
    "ability3_category2_q2_0m": number;
    "ability3_category2_q3_0m": number;
    "ability3_category3_q1_0m": number;
    "ability3_category3_q2_0m": number;
    "ability3_category3_q3_0m": number;
    "ability3_category4_q1_0m": number;
    "ability3_category4_q2_0m": number;
    "ability3_category4_q3_0m": number;
    "ability3_category5_q1_0m": number;
    "ability3_category5_q2_0m": number;
    "ability3_category5_q3_0m": number;
    "ability3_category6_q1_0m": number;
    "ability3_category6_q2_0m": number;
    "ability3_category6_q3_0m": number;

    "ability3_category1_q1_6m": number;
    "ability3_category1_q2_6m": number;
    "ability3_category1_q3_6m": number;
    "ability3_category2_q1_6m": number;
    "ability3_category2_q2_6m": number;
    "ability3_category2_q3_6m": number;
    "ability3_category3_q1_6m": number;
    "ability3_category3_q2_6m": number;
    "ability3_category3_q3_6m": number;
    "ability3_category4_q1_6m": number;
    "ability3_category4_q2_6m": number;
    "ability3_category4_q3_6m": number;
    "ability3_category5_q1_6m": number;
    "ability3_category5_q2_6m": number;
    "ability3_category5_q3_6m": number;
    "ability3_category6_q1_6m": number;
    "ability3_category6_q2_6m": number;
    "ability3_category6_q3_6m": number;
    
    "ability3_category1_q1_12m": number;
    "ability3_category1_q2_12m": number;
    "ability3_category1_q3_12m": number;
    "ability3_category2_q1_12m": number;
    "ability3_category2_q2_12m": number;
    "ability3_category2_q3_12m": number;
    "ability3_category3_q1_12m": number;
    "ability3_category3_q2_12m": number;
    "ability3_category3_q3_12m": number;
    "ability3_category4_q1_12m": number;
    "ability3_category4_q2_12m": number;
    "ability3_category4_q3_12m": number;
    "ability3_category5_q1_12m": number;
    "ability3_category5_q2_12m": number;
    "ability3_category5_q3_12m": number;
    "ability3_category6_q1_12m": number;
    "ability3_category6_q2_12m": number;
    "ability3_category6_q3_12m": number;
}

export interface ScoreDataAll extends ScoreData1, ScoreData2, ScoreData3 {}


export const initialScoreData1 = {
    "ability1_category1_q1_0m": 0,
    "ability1_category1_q2_0m": 0,
    "ability1_category1_q3_0m": 0,
    "ability1_category2_q1_0m": 0,
    "ability1_category2_q2_0m": 0,
    "ability1_category2_q3_0m": 0,
    "ability1_category3_q1_0m": 0,
    "ability1_category3_q2_0m": 0,
    "ability1_category3_q3_0m": 0,
    "ability1_category1_q1_6m": 0,
    "ability1_category1_q2_6m": 0,
    "ability1_category1_q3_6m": 0,
    "ability1_category2_q1_6m": 0,
    "ability1_category2_q2_6m": 0,
    "ability1_category2_q3_6m": 0,
    "ability1_category3_q1_6m": 0,
    "ability1_category3_q2_6m": 0,
    "ability1_category3_q3_6m": 0,
    "ability1_category1_q1_12m": 0,
    "ability1_category1_q2_12m": 0,
    "ability1_category1_q3_12m": 0,
    "ability1_category2_q1_12m": 0,
    "ability1_category2_q2_12m": 0,
    "ability1_category2_q3_12m": 0,
    "ability1_category3_q1_12m": 0,
    "ability1_category3_q2_12m": 0,
    "ability1_category3_q3_12m": 0,
  }

  export const initialScoreData2 = {
    "ability2_category1_q1_0m": 0,
    "ability2_category1_q2_0m": 0,
    "ability2_category1_q3_0m": 0,
    "ability2_category2_q1_0m": 0,
    "ability2_category2_q2_0m": 0,
    "ability2_category2_q3_0m": 0,
    "ability2_category3_q1_0m": 0,
    "ability2_category3_q2_0m": 0,
    "ability2_category3_q3_0m": 0,
    "ability2_category1_q1_6m": 0,
    "ability2_category1_q2_6m": 0,
    "ability2_category1_q3_6m": 0,
    "ability2_category2_q1_6m": 0,
    "ability2_category2_q2_6m": 0,
    "ability2_category2_q3_6m": 0,
    "ability2_category3_q1_6m": 0,
    "ability2_category3_q2_6m": 0,
    "ability2_category3_q3_6m": 0,
    "ability2_category1_q1_12m": 0,
    "ability2_category1_q2_12m": 0,
    "ability2_category1_q3_12m": 0,
    "ability2_category2_q1_12m": 0,
    "ability2_category2_q2_12m": 0,
    "ability2_category2_q3_12m": 0,
    "ability2_category3_q1_12m": 0,
    "ability2_category3_q2_12m": 0,
    "ability2_category3_q3_12m": 0,
  }

  export const initialScoreData3 = {
    "ability3_category1_q2_0m": 0,
    "ability3_category1_q3_0m": 0,
    "ability3_category2_q1_0m": 0,
    "ability3_category2_q2_0m": 0,
    "ability3_category2_q3_0m": 0,
    "ability3_category3_q1_0m": 0,
    "ability3_category3_q2_0m": 0,
    "ability3_category3_q3_0m": 0,
    "ability3_category4_q1_0m": 0,
    "ability3_category4_q2_0m": 0,
    "ability3_category4_q3_0m": 0,
    "ability3_category5_q1_0m": 0,
    "ability3_category5_q2_0m": 0,
    "ability3_category5_q3_0m": 0,
    "ability3_category6_q1_0m": 0,
    "ability3_category6_q2_0m": 0,
    "ability3_category6_q3_0m": 0,

    "ability3_category1_q1_6m": 0,
    "ability3_category1_q2_6m": 0,
    "ability3_category1_q3_6m": 0,
    "ability3_category2_q1_6m": 0,
    "ability3_category2_q2_6m": 0,
    "ability3_category2_q3_6m": 0,
    "ability3_category3_q1_6m": 0,
    "ability3_category3_q2_6m": 0,
    "ability3_category3_q3_6m": 0,
    "ability3_category4_q1_6m": 0,
    "ability3_category4_q2_6m": 0,
    "ability3_category4_q3_6m": 0,
    "ability3_category5_q1_6m": 0,
    "ability3_category5_q2_6m": 0,
    "ability3_category5_q3_6m": 0,
    "ability3_category6_q1_6m": 0,
    "ability3_category6_q2_6m": 0,
    "ability3_category6_q3_6m": 0,
    
    "ability3_category1_q1_12m": 0,
    "ability3_category1_q2_12m": 0,
    "ability3_category1_q3_12m": 0,
    "ability3_category2_q1_12m": 0,
    "ability3_category2_q2_12m": 0,
    "ability3_category2_q3_12m": 0,
    "ability3_category3_q1_12m": 0,
    "ability3_category3_q2_12m": 0,
    "ability3_category3_q3_12m": 0,
    "ability3_category4_q1_12m": 0,
    "ability3_category4_q2_12m": 0,
    "ability3_category4_q3_12m": 0,
    "ability3_category5_q1_12m": 0,
    "ability3_category5_q2_12m": 0,
    "ability3_category5_q3_12m": 0,
    "ability3_category6_q1_12m": 0,
    "ability3_category6_q2_12m": 0,
    "ability3_category6_q3_12m": 0,
  }

export const initialScoreDataAll = {...initialScoreData1, ...initialScoreData2, ...initialScoreData3}