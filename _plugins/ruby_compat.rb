# GitHub Pages currently pins Liquid 4.0.3, which calls String#tainted?.
# Ruby 3.2+ removed that legacy method. Restore its final no-op behavior for
# local builds on modern Ruby; GitHub Pages' own build environment ignores this.
unless String.method_defined?(:tainted?)
  class String
    def tainted?
      false
    end
  end
end
