# app/serializers/project_serializer.rb
class ProjectSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :cpf, :cnpj, :estado, :concessionaria, :latitude, :longitude,
             :tipo_disjuntor, :valor_disjuntor, :total_power, :status, :created_at, :updated_at

  attribute :documents do |project|
    project.documents.map do |doc|
      {
        id: doc.id,
        name: doc.file_identifier,
        url: doc.file.url
      }
    end
  end
end
