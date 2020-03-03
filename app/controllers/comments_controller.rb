class CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(content: params[:comment])
    @comment.save
  end
end
