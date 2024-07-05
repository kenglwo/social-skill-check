class ManageScoreController < ApplicationController
    def save

        user_id = params['user_id']
        score_data = params['score_data_all']

        # return calculated scores
        api_result = {
            "ability1_category1": 0,
            "ability1_category2": 0,
            "ability1_category3": 0,
            "ability2_category1": 0,
            "ability2_category2": 0,
            "ability2_category3": 0,
            "ability3_category1": 0,
            "ability3_category2": 0,
            "ability3_category3": 0,
            "ability3_category4": 0,
            "ability3_category5": 0,
            "ability3_category6": 0,
        }

        render json: api_result
    end
end
