class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
    render json: @benches
  end

  def create
    @bench=Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      flash[:errors]= @bench.errors.full_messages
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description,:latitiude)
  end
end
