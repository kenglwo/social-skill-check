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
                attributes = {
                    user_id: user_id,
                    ability_num: ability_num,
                    category_num: category_num,
                    question_num: question_num,
                    recorded_at: recorded_at,
                    score: score_value,
                    created_at: Time.current,
                    updated_at: Time.current
                }

                update_fields = { score: score_value }

                ScoreDatum.upsert(attributes)
                # ScoreDatum.upsert(attributes, unique_by: [:user_id, :ability_num, :category_num, :question_num, :recorded_at])
            end
        end

        # return calculated scores
        api_result = {"status": "OK"}

        render json: api_result
    end

    def get_calculated_scores
        user_id = params['user_id']

        # SELECT ability_num, category_num, SUM(score) AS total_score, recorded_at
        # FROM score_data
        # WHERE user_id = 'user1'
        # GROUP BY ability_num, category_num, recorded_at 
        # ORDER BY recorded_at asc, ability_num asc, category_num asc;

        @results = ScoreDatum
            .select('ability_num, category_num, SUM(score) AS total_score, recorded_at')
            .where(user_id: user_id)
            .group('ability_num, category_num, recorded_at')
            .order('recorded_at ASC, ability_num ASC, category_num ASC')

        logger.debug @results

        render json: @results.as_json(only: [:ability_num, :category_num, :total_score, :recorded_at])
    end
end
