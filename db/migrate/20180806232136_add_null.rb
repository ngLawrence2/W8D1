class AddNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :benches, :lat, false
    change_column_null :benches, :lng, false
    change_column_null :benches, :description, false
  end
end
