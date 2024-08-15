class PingController < ApplicationController
  def index
    response = 'OKAY CHA TA...'
    # binding.pry
    render status: :ok, json: { reply: response }
  end
end
