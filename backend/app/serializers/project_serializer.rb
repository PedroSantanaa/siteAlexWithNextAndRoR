class ProjectSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :cpf, :cnpj, :estado, :concessionaria, :latitude, :longitude,
             :tipo_disjuntor, :valor_disjuntor, :total_power, :status
  has_many :documents

  def documents
    object.documents.map do |doc|
      {
        name: doc.file.filename,
        url: doc.file.url
      }
    end
  end
end
