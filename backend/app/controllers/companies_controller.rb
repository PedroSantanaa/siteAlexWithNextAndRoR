class CompaniesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_company, only: %i[ show update destroy ]

  # GET /companies
  def index
    @companies = current_user.company

    render json: @companies
  end

  # GET /companies/1
  def show
    render json: @company
  end

  # POST /companies
  def create
    @company = current_user.build_company(company_params)

    if @company.save
      render json: @company, status: :created, location: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /companies/1
  def update
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  # DELETE /companies/1
  def destroy
    @company.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company
      @company = current_user.company
    end

    # Only allow a list of trusted parameters through.
    def company_params
      params.require(:company).permit(:cnpj, :nome_fantasia, :razao_social, :registro_estadual, :registro_municipal, :cep, :estado, :cidade, :rua, :numero, :bairro, :complemento, :user_id)
    end
end
