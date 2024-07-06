Rails.application.routes.draw do
  post 'save_score_data', to: 'manage_score#save'
  get 'get_calculated_scores', to: 'manage_score#get_calculated_scores'
end
