class PingController < ApplicationController
  def index
    response = 'ok'
    binding.pry
    render status: :ok, html: response
  end
end
