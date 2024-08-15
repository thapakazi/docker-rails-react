class PingController < ApplicationController
  def index
    response = 'ok'
    # binding.pry
    render status: :ok, json: { reply: response }
  end
end
