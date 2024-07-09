class ProjectSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :cpf, :cnpj, :estado, :concessionaria, :latitude, :longitude,
             :tipo_disjuntor, :valor_disjuntor, :total_power, :status, :documents

  has_many :documents

  attribute :documents do |project|
    project.documents.map do |doc|
      {
        id: doc.id,
        name: doc.file.filename.to_s,
        url: Rails.application.routes.url_helpers.rails_blob_url(doc.file, only_path: true)
      }
    end
  end
end
