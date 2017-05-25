class UserController < ApplicationController
  # GET request to /users/:id
  def show
  @user = User.find( params[:id] )
  end
end