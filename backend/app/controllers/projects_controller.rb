class ProjectsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project, only: %i[ show update destroy ]

  # GET /projects
  def index
    @projects = case current_user.role
                when 1 then Project.all
                when 0 then current_user.projects
    end

    render json: @projects, each_serializer: ProjectSerializer, status: :ok
  end

  # GET /projects/1
  def show
    render json: @project, serializer: ProjectSerializer, status: :ok
  end

  # POST /projects
  def create
    @project = current_user.projects.build(project_params)

    if @project.save
      render json: @project, status: :created, location: @project, notice: "Project created"
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = case current_user.role
                  when 1 then Project.find(params[:id])
                  when 0 then current_user.projects.find(params[:id])
      end
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:id, :name, :user_id,:estado, :concessionaria, :cpf, :cnpj, :tipo_disjuntor, :valor_disjuntor, :latitude, :longitude, :total_power, :status,  documents_attributes: [:file])
    end
end
