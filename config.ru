# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)

use Rack::Cors do
  allow do
    origins '*'
    resource '*'
  end
end

run Rails.application
