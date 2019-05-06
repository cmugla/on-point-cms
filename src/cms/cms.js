import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', IndexPagePreview)
CMS.registerPreviewTemplate('services', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
