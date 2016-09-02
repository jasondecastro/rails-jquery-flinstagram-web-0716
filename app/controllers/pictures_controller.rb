class PicturesController < ApplicationController

  def index
    @pictures = Picture.all
  end

  def like
    # binding.pry

    @picture = Picture.find(params[:id])
    @picture.update_likes(current_user)

    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: { content: @picture.likes_message(current_user), heart: @picture.heart_class(current_user), id: @picture.id}}
    end
  end

end