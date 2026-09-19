import { useState, useEffect } from "react"

/**
 * useScrollSpy: High-performance scroll tracking using IntersectionObserver
 * @param {string[]} ids - Array of element DOM IDs to observe
 * @param {object} options - Observer options (rootMargin, threshold)
 * @returns {string} activeId - The ID of the element currently in view
 */
export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(ids[0] || "")

  useEffect(() => {
    if (!ids || ids.length === 0) return

    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // In reduced motion, keep the first item active or let it behave statically
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || "-20% 0px -40% 0px",
      threshold: options.threshold || [0, 0.25, 0.5, 0.75, 1],
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const visibleRatios = new Map()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleRatios.set(entry.target.id, entry.intersectionRatio)
        } else {
          visibleRatios.delete(entry.target.id)
        }
      })

      // Find the entry with the highest intersection ratio
      let bestId = ""
      let maxRatio = -1

      visibleRatios.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          bestId = id
        }
      })

      if (bestId) {
        setActiveId(bestId)
      }
    }, observerOptions)

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [ids, options.rootMargin, options.threshold])

  return activeId
}

export default useScrollSpy
