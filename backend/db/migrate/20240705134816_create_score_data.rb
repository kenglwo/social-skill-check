class CreateScoreData < ActiveRecord::Migration[6.1]
  def change
    create_table :score_data do |t|
      t.string :user_id
      t.integer :ability_num
      t.integer :category_num
      t.integer :score
      t.integer :recorded_at

      t.timestamps
    end
  end
end
