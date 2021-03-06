class Api::MenusController < ApplicationController
  
 before_action :set_menu, only: [:show, :update, :destroy]
  def index
   render json: Menu.all
  end

  def show
    render json: @menu
  end

  def create
    Menu = Menu.new(menu_params)

    if Menu.save
      render json: menu
    else
      render json: {errors: @api.menu.errors.full_messages.join(',')}, status: :unprocessable_entity
    end
  end

  def update
    if menu.update(menu_params)
      render json: @menu
    else
      render json: menu.errors, status 422
    end
  end

  def destroy
    @menu.destroy
  end

  private

  def set_menu
    @menu = Menu.find(params[:id])
end

def menu_params
  params.require(:menu).permit(:name, :description, :price, :timeofday)
