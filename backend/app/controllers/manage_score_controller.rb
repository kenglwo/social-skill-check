class ManageScoreController < ApplicationController
    def save

        user_id = params['user_id']
        score_data = params['score_data_all']
        # score_data_hash = JSON.parse(score_data)


        # score_data_hash.each do |key, value|
        score_data.each do |ability_key, ability_value|

            ability_value.each do |score_key, score_value|
                score_key_components = score_key.split("_")
                # logger.debug score_key_components
                
                ability_num = score_key_components[0][-1].to_i
                category_num = score_key_components[1][-1].to_i
                question_num = score_key_components[2][-1].to_i
                recorded_at = score_key_components[3].chomp("m").to_i

                # logger.debug "#{ability_num}_#{category_num}_#{question_num}_#{recorded_at}"

                ScoreDatum.create(
                    user_id: user_id,
                    ability_num: ability_num,
                    category_num: category_num,
                    question_num: question_num,
                    recorded_at: recorded_at,
                    score: score_value
                )
            end
        end

        # return calculated scores
        api_result = {"status": "OK"}

        render json: api_result
    end
end
