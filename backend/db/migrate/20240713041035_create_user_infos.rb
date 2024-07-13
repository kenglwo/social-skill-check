class CreateUserInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :user_infos do |t|
      t.string :user_id
      t.string :password_digest

      t.timestamps
    end
  end
end
