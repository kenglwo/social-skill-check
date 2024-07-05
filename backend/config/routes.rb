Rails.application.routes.draw do
  post 'save_score_data', to: 'manage_score#save'
end
