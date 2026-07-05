import { ref, onMounted } from 'vue'

export function useResource(basePath, extensions = []) {
  const url = ref('')
  const exists = ref(false)
  const loading = ref(true)
  const notFound = ref(false)

  let loadId = 0

  async function checkFile(path) {
    try {
      const cacheBust = `_t=${Date.now()}${Math.random().toString(36).slice(2, 6)}`
      let r = await fetch(`${path}?${cacheBust}`, { method: 'HEAD' })
      if (!r.ok || r.headers.get('content-type')?.includes('text/html')) {
        r = await fetch(`${path}?${cacheBust}`, { method: 'GET', headers: { Range: 'bytes=0-0' } })
      }
      if (r.ok && !r.headers.get('content-type')?.includes('text/html')) {
        return true
      }
    } catch (_) {}
    return false
  }

  async function load() {
    const id = ++loadId
    loading.value = true
    url.value = ''
    exists.value = false
    notFound.value = false

    for (const ext of extensions) {
      const u = `${basePath}.${ext}`
      if (await checkFile(u)) {
        if (id !== loadId) return
        url.value = u
        exists.value = true
        loading.value = false
        return
      }
    }

    if (id !== loadId) return
    loading.value = false
    notFound.value = true
  }

  onMounted(load)

  return { url, exists, loading, notFound, reload: load }
}
