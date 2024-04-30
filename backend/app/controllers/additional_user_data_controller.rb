class AdditionalUserDataController < ApplicationController
  before_action :authenticate_user!

  def update
    @user = current_user
    if @user.update(additional_user_data_params)
      render status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def additional_user_data_params
    params.require(:user).permit(:name, :cep, :estado, :rua, :bairro, :cidade, :numero, :complemento, :telefone, :cpf)
  end

end
