# GitHub Pages currently pins Liquid 4.0.3, which calls String#tainted?.
# Ruby 3.2+ removed that legacy method. Restore its final no-op behavior for
# local builds on modern Ruby; GitHub Pages' own build environment ignores this.
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end

# Liquid 4 also calls String#untaint from its HTML/XML escaping filters.
unless Object.method_defined?(:untaint)
  class Object
    def untaint
      self
    end
  end
end
