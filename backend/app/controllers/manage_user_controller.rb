class ManageUserController < ApplicationController
    def authenticate
        user_id = params['user_id']
        password = params['password']

        api_result = ""

        @user = UserInfo.find_by(user_id: user_id)
        if @user.nil? then
            api_result = "no user"
        else
            authentication_result = @user.authenticate(password)
            api_result = authentication_result ? "valid password" : 'invalid password'
        end


        render json: {"authentication_result": api_result}

    end
end
