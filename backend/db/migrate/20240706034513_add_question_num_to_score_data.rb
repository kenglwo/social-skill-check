class AddQuestionNumToScoreData < ActiveRecord::Migration[6.1]
  def change
    add_column :score_data, :question_num, :integer
  end
end
